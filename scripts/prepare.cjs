/*
eslint

{
  '@typescript-eslint/no-require-imports': 'off',
}
*/

// =======
// Import.
// =======

const { exec, execSync } = require('child_process');
const { existsSync } = require('fs');

// ===========
// File paths.
// ===========

const FILE_GIT_HOOKS = '.git/hooks';
const FILE_PRE_COMMIT = './.git/hooks/pre-commit';
const FILE_PRE_PUSH = './.git/hooks/pre-push';

// =========
// Commands.
// =========

const CLI_GIT_HOOKS_CONFIG = 'git config core.hooksPath';
const CLI_GIT_HOOKS_CONFIG_SET = `${CLI_GIT_HOOKS_CONFIG} ${FILE_GIT_HOOKS}`;
const CLI_GIT_HOOKS_REMOVE = `npx rimraf ${FILE_GIT_HOOKS}`;

const CLI_PANDA = 'npx panda codegen';
const CLI_PRE_COMMIT = 'npx simple-git-hooks';
const CLI_PRE_PUSH = 'git lfs install';

// ============
// Panda setup.
// ============

global.console.log(CLI_PANDA);
execSync(CLI_PANDA);

// ==================
// Restore Git hooks.
// ==================

exec(CLI_GIT_HOOKS_CONFIG, (_error, hooksPath) => {
  // =================
  // Check hooks path.
  // =================

  if (!existsSync(FILE_GIT_HOOKS) || !hooksPath.startsWith(FILE_GIT_HOOKS)) {
    // Clear hooks.
    global.console.log(CLI_GIT_HOOKS_REMOVE);
    execSync(CLI_GIT_HOOKS_REMOVE);

    // Set config.
    global.console.log(CLI_GIT_HOOKS_CONFIG_SET);
    execSync(CLI_GIT_HOOKS_CONFIG_SET);
  }

  // ====================
  // Add pre-commit hook.
  // ====================

  if (!existsSync(FILE_PRE_COMMIT)) {
    global.console.log(CLI_PRE_COMMIT);
    execSync(CLI_PRE_COMMIT);
  }

  // ==================
  // Add Git LFS hooks.
  // ==================

  if (!existsSync(FILE_PRE_PUSH)) {
    global.console.log(CLI_PRE_PUSH);
    execSync(CLI_PRE_PUSH);
  }
});
