import { MOCK_DATE_STRING } from '~/__mocks__';
import { render } from 'solid-js/web';
import DateTile from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/DateTile', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      date: MOCK_DATE_STRING,
    };

    // Component.
    const component = () => <DateTile {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const divMonth = parent.querySelector(':scope > div:nth-of-type(1)') as HTMLElement;
    const divDay = parent.querySelector(':scope > div:nth-of-type(2)') as HTMLElement;

    // Test assertions.
    expect(divMonth.textContent).toBe('Nov');
    expect(divDay.textContent).toBe('09');
  });
});
