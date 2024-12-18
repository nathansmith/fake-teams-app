import { getFormData } from './';

// ====================
// Describe `fileName`.
// ====================

describe('utils/getFormData', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const KEY_CHECKBOX = 'checkbox';
    const KEY_EMAIL = 'email';
    const KEY_MESSAGE = 'message';
    const KEY_NAME = 'name';
    const KEY_RADIO = 'radio';

    const VALUE_CHECKBOX = 'yes';
    const VALUE_EMAIL = 'first.last@example.com';
    const VALUE_MESSAGE = 'Hello world!';
    const VALUE_NAME = 'First Last';
    const VALUE_RADIO_1 = 'option_1';
    const VALUE_RADIO_2 = 'option_2';

    // Dummy content.
    document.body.innerHTML = `
      <form>
        <input
          name="${KEY_NAME}"
          type="text"
          value="${VALUE_NAME}"
        />

        <input
          name="${KEY_EMAIL}"
          type="email"
          value="${VALUE_EMAIL}"
        />

        <textarea
          name="${KEY_MESSAGE}"
        >${VALUE_MESSAGE}</textarea>

        <input
          checked
          name="${KEY_CHECKBOX}"
          type="checkbox"
          value="${VALUE_CHECKBOX}"
        />

        <input
          name="${KEY_RADIO}"
          type="radio"
          value="${VALUE_RADIO_1}"
        />

        <input
          checked
          name="${KEY_RADIO}"
          type="radio"
          value="${VALUE_RADIO_2}"
        />
      </form>
    `;

    // Get elements.
    const form = document.querySelector('form') as HTMLFormElement;

    // Get data.
    const data = getFormData(form);

    // Test assertions.
    expect(data).toEqual({
      [KEY_CHECKBOX]: VALUE_CHECKBOX,
      [KEY_EMAIL]: VALUE_EMAIL,
      [KEY_MESSAGE]: VALUE_MESSAGE,
      [KEY_NAME]: VALUE_NAME,
      [KEY_RADIO]: VALUE_RADIO_2,
    });
  });
});
