// ============================
// Helper: get domain from URL.
// ============================

const getDomain = (url: string): string => {
  // Get domain.
  let domain = new URL(url).hostname;

  // Has prefix: YES.
  if (domain.startsWith('www.')) {
    // Remove prefix.
    domain = domain.replace(/^www\./, '');
  }

  // Expose string.
  return domain;
};

// Export.
export { getDomain };
