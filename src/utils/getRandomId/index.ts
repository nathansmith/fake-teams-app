// ======================
// Helper: get random ID.
// ======================

const getRandomId = (): string => {
  // Expose string.
  return (
    // Prefer real UUID.
    globalThis.crypto.randomUUID?.() ||
    // Or use a fallback.
    `${Date.now()}-${Math.random()}`.replaceAll('.', '')
  );
};

// Export.
export { getRandomId };
