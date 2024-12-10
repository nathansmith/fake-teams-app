import { MOCK_DATE_STRING } from '~/__mocks__';
import { render } from 'solid-js/web';
import EventMinistry from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/EventMinistry', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      date: MOCK_DATE_STRING,
      description: 'EXAMPLE_DESCRIPTION',
      image: '/path/to/image.webp',
      imagePosition: '0 0',
      title: 'EXAMPLE_TITLE',
    };

    // Component.
    const component = () => <EventMinistry {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.body.querySelector('div') as HTMLElement;
    const img = parent.querySelector('img') as HTMLElement;

    const table = parent.querySelector('table') as HTMLElement;
    const thList = table.querySelectorAll('th');
    const tdList = table.querySelectorAll('td');

    // Test assertions.
    expect(img.getAttribute('alt')).toBe(props.title);
    expect(img.getAttribute('title')).toBe(props.title);

    expect(thList[0].textContent).toBe('Event:');
    expect(tdList[0].textContent).toBe(props.title);

    expect(thList[1].textContent).toBe('Date:');
    expect(tdList[1].textContent).toBe('Saturday, 11/9/2024, 1:00 PM');

    expect(thList[2].textContent).toBe('Description:');
    expect(tdList[2].textContent).toBe(props.description);
  });
});
