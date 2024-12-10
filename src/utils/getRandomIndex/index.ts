// ======
// Types.
// ======

export type IUnknownList = unknown[] | Readonly<unknown[]>;

// ==========================
// Helper: get random number.
// ==========================

const getRandomIndex = (list: IUnknownList): number => {
  // Get index.
  const index = Math.random() * list.length;

  // Expose number.
  return Math.floor(index);
};

// Export.
export { getRandomIndex };
