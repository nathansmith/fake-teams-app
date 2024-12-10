// ==================
// Helper: form data.
// ==================

const getFormData = (form: HTMLFormElement): Record<string, string> => {
  // New form data.
  const data = new FormData(form);

  // Set later.
  const obj: Record<string, string> = {};

  // Get form fields.
  const inputList = form.querySelectorAll('[name]');

  // Loop through.
  for (const input of inputList) {
    // Get name.
    const name = input.getAttribute('name');

    // Name exists: YES.
    if (name) {
      // Get value.
      const value = data.get(name);

      // Value exists: YES.
      if (typeof value === 'string') {
        // Set value.
        obj[name] = value;
      }
    }
  }

  // Expose object.
  return obj;
};

// Export.
export { getFormData };
