// ======
// Types.
// ======

import type { IJson } from '~/sharedTypes';

// ==========================
// Storage: flag for support.
// ==========================

const hasSupport: boolean = ((): boolean => {
  // Assume no support.
  let bool = false;

  // Used in the `try`.
  const key = 'TEST_KEY';
  const val = 'TEST_VAL';

  // Rigorously test for support.
  try {
    // Set the key/value.
    globalThis.localStorage.setItem(key, val);

    // Are we able to read it?
    bool = globalThis.localStorage.getItem(key) === val;

    // Delete the key/value.
    globalThis.localStorage.removeItem(key);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } /* v8 ignore start */ catch (_error) {
    bool = false;
  } /* v8 ignore stop */

  // Return the boolean.
  return bool;
})();

// =========================
// Storage: fallback object.
// =========================

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fallback: Record<string, any> = {
  /* v8 ignore start */
  clear: (): void => {
    Object.keys(cache).forEach((key) => delete cache[key]);
  },
  /* v8 ignore stop */
};

const cache = hasSupport ? globalThis.localStorage : fallback;

// =========================
// Storage: clear key/value.
// =========================

const clear = (): void => {
  cache.clear();
};

// ================
// Storage: getter.
// ================

const get = (key: string) => {
  // Get data.
  let data = cache[key];

  // No data?
  if (!data) {
    // Early exit.
    return;
  }

  try {
    // Attempt to parse.
    data = JSON.parse(data);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } /* v8 ignore start */ catch (_error) {
    data = cache[key];
  } /* v8 ignore stop */

  // Expose value.
  return data;
};

// ================
// Storage: setter.
// ================

const set = (key: string, data: IJson): void => {
  // Get booleans.
  const isBadKey = ['clear', 'getItem', 'key', 'length', 'removeItem', 'setItem'].includes(key);

  // Bad key?
  if (isBadKey) {
    // Early exit.
    throw new Error(`Cannot overwrite method: globalThis.localStorage.${key}`);
  }

  // Object type?
  if (typeof data === 'object') {
    // Convert to string.
    data = JSON.stringify(data);
  }

  // Set value.
  cache[key] = data;
};

// ============================
// Storage: remove single item.
// ============================

const remove = (key: string): void => {
  delete cache[key];
};

// =======
// Bundle.
// =======

const local = {
  cache,
  clear,
  get,
  remove,
  set,
};

// Export.
export { local };
