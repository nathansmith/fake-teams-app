// ===================
// Helper: get tab ID.
// ===================

const getPanelId = (id: string, index: number): string => {
  // Expose string.
  return `tabpanel-${id}-${index}`;
};

// Export.
export { getPanelId };
