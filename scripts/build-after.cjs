/*
eslint

{
  '@typescript-eslint/no-require-imports': 'off',
}
*/

// =======
// Import.
// =======

const { copySync } = require('fs-extra');

// ===========
// Copy files.
// ===========

copySync(
  // Copy from:
  './assets/pdf',

  // Copy to:
  './dist/pdf'
);
