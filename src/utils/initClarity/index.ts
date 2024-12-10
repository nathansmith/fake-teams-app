/*
eslint

{
  'func-style': 'off',
  'no-var': 'off',
  'prefer-rest-params': 'off',
}
*/

/*
// =====
// NOTE:
// =====

  The following code is an readable version
  of the original Clarity "install" script.

  The prescribed approach is to put this in
  directly in the `<head>` of an HTML page.

  https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-setup

  ```
  <script>
    (function(c, l, a, r, i, t, y) {
      c[a] = c[a] || function() {
        (c[a].q = c[a].q || []).push(arguments)
      };
      t = l.createElement(r);
      t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(globalThis, document, "clarity", "script", "clarityId_HERE");
  </script>
  ```
*/

// ======
// Types.
// ======

declare global {
  var clarity: {
    (): void;
    q: {
      push: (x: IArguments) => void;
    };
  };
}

// ==========
// Constants.
// ==========

const clarityId = 'oh6aoyxjym';
const clarityPath = 'https://www.clarity.ms/tag';
const claritySrc = `${clarityPath}/${clarityId}`;

// ================
// Create function.
// ================

function clarity(): void {
  // Add queue.
  globalThis.clarity.q = globalThis.clarity.q || [];

  // Push arguments.
  globalThis.clarity.q.push(arguments);
}

// =============
// Init Clarity.
// =============

const initClarity = () => {
  // Get booleans.
  const isFirstRun = !document.querySelector(`script[src="${claritySrc}"]`);
  const isProd = globalThis.location.hostname === 'capstone.sonspring.com';
  const isTest = typeof vi !== 'undefined';

  if (
    // Is first run: YES.
    isFirstRun &&
    // Is production or test: YES.
    (isProd || isTest)
  ) {
    // Add global.
    globalThis.clarity = globalThis.clarity || clarity;

    // Get first `<script>` tag.
    const oldScript = document.getElementsByTagName('script')[0];

    // Create new script.
    const newScript = document.createElement('script');
    newScript.async = true;
    newScript.src = claritySrc;

    // Append script.
    oldScript?.parentNode?.insertBefore(newScript, oldScript);
  }
};

// Export.
export { initClarity };
