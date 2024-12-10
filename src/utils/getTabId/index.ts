// ===================
// Helper: get tab ID.
// ===================

const getTabId = (id: string, index: number): string => {
  // Expose string.
  return `tab-${id}-${index}`;
};

// Export.
export { getTabId };
