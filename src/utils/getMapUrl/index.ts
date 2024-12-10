// ====================
// Helper: get map URL.
// ====================

const getMapUrl = (value: string): string => {
  // Clean up.
  let str = String(value).replace(/\s+/g, ' ');
  str = encodeURI(str);

  // Expose string.
  return `https://www.google.com/maps?q=${str}`;
};

// Export.
export { getMapUrl };
