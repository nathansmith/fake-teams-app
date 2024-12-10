/*
eslint

{
  '@typescript-eslint/no-explicit-any': 'off',
}
*/

// =====================
// Helper: sort by name.
// =====================

const sortByName = <T>(list: T[]): T[] => {
  // Expose array.
  return list.slice().sort((a: any, b: any) => a?.name?.localeCompare(b?.name));
};

// Export.
export { sortByName };
