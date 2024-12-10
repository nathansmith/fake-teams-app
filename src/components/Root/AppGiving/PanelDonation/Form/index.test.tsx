import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import { state } from '~/state';
import Form from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root/AppGiving/PanelDonation/Form', (): void => {
  // =======
  // Before.
  // =======

  beforeEach((): void => {
    // Update.
    state.signalGivingId.set('EXAMPLE_GIVING_ID');
  });

  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      onSubmit: vi.fn(),
    };

    // Component.
    const component = () => <Form {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const form = document.querySelector('form') as HTMLElement;
    const formButton = form.querySelector('button') as HTMLElement;

    // Test assertions.
    expect(formButton.getAttribute('type')).toBe('submit');
    expect(formButton.textContent).toBe('Submit donation');

    // Fire events.
    fireEvent.click(formButton);

    // Test assertions.
    expect(props.onSubmit).toBeCalledWith({
      address_line_1: expect.any(String),
      address_line_2: expect.any(String),
      card_cvv: expect.any(String),
      card_month: expect.any(String),
      card_number: expect.any(String),
      card_year: expect.any(String),
      city: expect.any(String),
      country: expect.any(String),
      email: expect.any(String),
      first_name: expect.any(String),
      giving_amount: expect.any(String),
      giving_frequency: expect.any(String),
      last_name: expect.any(String),
      phone: expect.any(String),
      postal_code: expect.any(String),
      state: expect.any(String),
    });

    // Get elements.
    const notice = document.querySelector('[aria-live="polite"]') as HTMLElement;
    const noticeButton = notice.querySelector('button') as HTMLElement;
    const noticeH4 = notice.querySelector('h4') as HTMLElement;
    const noticePList = notice.querySelectorAll('p');

    // Test assertions.
    expect(noticeH4.textContent).toBe('🎉 Thank you!');
    expect(noticePList[0].textContent).toBe('Your donation is being processed.');
    expect(noticePList[1].textContent).toBe('You should receive an email confirmation soon.');
    expect(noticeButton.textContent).toBe('⬅️ Back to Giving App');

    // Fire events.
    fireEvent.click(noticeButton);

    // Test assertions.
    expect(state.signalGivingId.get()).toBe('');
  });
});
