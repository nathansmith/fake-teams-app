/*
eslint

{
  '@typescript-eslint/no-explicit-any': 'off',
}
*/

// ======
// Types.
// ======

interface IGetChildren {
  children?: any;
}

// =====================
// Helper: get children.
// =====================

const getChildren = (obj: IGetChildren): any[] => {
  // Expose array.
  return Array.isArray(obj.children) ? obj.children : [obj.children];
};

// Export.
export { getChildren };
