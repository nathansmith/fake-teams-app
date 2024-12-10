import postcss from 'postcss';

// ======
// Types.
// ======

interface IUseRecord {
  declarations: Set<postcss.Declaration>;
  dependencies: Set<string>;
  uses: number;
}

// ===============================
// Helper: purge unused keyframes.
// ===============================

const pandaPurgeKeyframes = (css: string): string => {
  // Get root element.
  const root = postcss.parse(css);

  // Set later.
  const keyframes = new Map<string, boolean>();

  // Walk the tree.
  root.walk((node) => {
    // Is prunable type: YES.
    if (node.type === 'atrule' && node.name === 'keyframes') {
      // Record keyframe and mark as unused.
      keyframes.set(node.params, false);

      // Is declaration: YES.
    } else if (node.type === 'decl') {
      // Get animation name.
      const animationName = node.prop === 'animation' ? node.value.split(' ')[0] : node.value;

      // Prop is animation:YES.
      if (keyframes.has(animationName) && ['animation', 'animation-name'].includes(node.prop)) {
        // Mark keyframe as used.
        keyframes.set(animationName, true);
      }
    }
  });

  // Walk the tree.
  root.walkAtRules('keyframes', (rule) => {
    // Is keyframe used: NO.
    if (keyframes.get(rule.params) === false) {
      // Remove keyframe.
      rule.remove();
    }
  });

  // Expose string.
  return root.toString();
};

// ===============================
// Helper: purge unused variables.
// ===============================

const pandaPurgeVars = (css: string) => {
  // Get root element.
  const root = postcss.parse(css);

  // Set later.
  const records = new Map<string, IUseRecord>();

  // Helper: get record.
  const getRecord = (variable: string): IUseRecord => {
    // Set later.
    let record = records.get(variable);

    // Record exists: NO.
    if (!record) {
      // Get record.
      record = { uses: 0, dependencies: new Set(), declarations: new Set() };

      // Set record.
      records.set(variable, record);
    }

    // Expose record.
    return record;
  };

  // Helper: register dependency.
  const registerDependency = (variable: string, dependency: string) => {
    // Get record.
    const record = getRecord(variable);

    // Add dependency.
    record.dependencies.add(dependency);
  };

  // Helper: register use.
  const registerUse = (variable: string, ignoreList = new Set<string>()) => {
    // Get record.
    const record = getRecord(variable);

    // Increment.
    record.uses++;

    // Add to list.
    ignoreList.add(variable);

    // Loop through.
    for (const dependency of record.dependencies) {
      // Has dependency: NO.
      if (!ignoreList.has(dependency)) {
        // Register use.
        registerUse(dependency, ignoreList);
      }
    }
  };

  // Walk the tree.
  root.walkDecls((decl): void => {
    // Get parent.
    const parent = decl.parent;

    // Parent exists: NO.
    if (!parent) {
      // Early exit.
      return;
    }

    // Root element: YES.
    if (parent.type === 'rule' && (parent as postcss.Rule).selector === ':root') {
      // Early exit.
      return;
    }

    // Get booleans.
    const isVar = decl.prop.startsWith('--');

    // Initiate record
    if (isVar) getRecord(decl.prop).declarations.add(decl);

    // Variable used: NO.
    if (!decl.value.includes('var(')) {
      // Early exit.
      return;
    }

    // Loop through.
    for (const match of decl.value.matchAll(/var\(\s*(?<name>--[^ ,);]+)/g)) {
      // Get variable.
      const variable = match.groups?.name.trim();

      // Variable exists: NO.
      if (!variable) {
        // Early exit.
        continue;
      }

      // Is variable: YES.
      if (isVar) {
        // Register dependency.
        registerDependency(decl.prop, variable);
      } else {
        // Register use.
        registerUse(variable);
      }
    }
  });

  // Loop through.
  for (const { uses, declarations } of records.values()) {
    // Is unused: YES.
    if (uses === 0) {
      for (const decl of declarations) {
        // Only declaration: YES.
        if (decl.parent?.nodes.length === 1) {
          // Remove parent.
          decl.parent?.remove();
        } else {
          // Remove declaration.
          decl.remove();
        }
      }
    }
  }

  // Expose string.
  return root.toString();
};

// Export.
export { pandaPurgeKeyframes, pandaPurgeVars };
