import { MOCK_DATE_STRING } from '~/__mocks__';
import { render } from 'solid-js/web';
import FileList from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/FileList', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      list: [
        {
          date: MOCK_DATE_STRING,
          name: 'EXAMPLE_NAME',
          type: 'link',
          url: 'https://example.com/',
          user: 'EXAMPLE_USER',
        },
      ],
    };

    // Component.
    const component = () => <FileList {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const table = document.querySelector('table') as HTMLElement;
    const thList = table.querySelectorAll('th');
    const tdList = table.querySelectorAll('td');

    // Test assertions.
    expect(thList[0].getAttribute('aria-label')).toBe('type');
    expect(thList[0].textContent).toBe('');
    expect(thList[1].textContent).toBe('Name');
    expect(thList[2].textContent).toBe('Date shared');
    expect(thList[3].textContent).toBe('Shared by');

    expect(tdList[0].textContent).toBe('🌐');
    expect(tdList[1].querySelector('a')?.textContent).toBe(props.list[0].name);
    expect(tdList[2].textContent).toContain('2024');
    expect(tdList[3].textContent).toBe(props.list[0].user);
  });

  // ======================
  // Test default scenario.
  // ======================

  test('handles "no URL" scenario', (): void => {
    // Dummy props.
    const props = {
      list: [
        {
          date: MOCK_DATE_STRING,
          name: 'EXAMPLE_NAME',
          type: 'link',
          url: '',
          user: 'EXAMPLE_USER',
        },
      ],
    };

    // Component.
    const component = () => <FileList {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const table = document.querySelector('table') as HTMLElement;
    const tdList = table.querySelectorAll('td');

    // Test assertions.
    expect(tdList[1].querySelector('u')?.textContent).toBe(props.list[0].name);
  });

  // ========================
  // Test "no list" scenario.
  // ========================

  test('handles "no list" scenario', (): void => {
    // Dummy props.
    const props = {
      list: [],
    };

    // Component.
    const component = () => <FileList {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const table = document.querySelector('table') as HTMLElement;
    const tdList = table.querySelectorAll('td');

    // Test assertions.
    expect(tdList[0].textContent).toBe('📄');
    expect(tdList[1].getAttribute('colspan')).toBe(String(3));
    expect(tdList[1].textContent).toBe('No files yet.');
  });
});
