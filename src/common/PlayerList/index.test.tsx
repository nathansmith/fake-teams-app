import { render } from 'solid-js/web';
import PlayerList from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/PlayerList', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      list: [
        {
          image: '/path/to/image.webp',
          name: 'EXAMPLE_NAME',
          position: 'EXAMPLE_POSITION',
          number: 11,
        },
      ],
    };

    // Component.
    const component = () => <PlayerList {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const table = document.querySelector('table') as HTMLElement;
    const thList = table.querySelectorAll('th');
    const tdList = table.querySelectorAll('td');

    // Test assertions.
    expect(thList[0].getAttribute('colspan')).toBe(String(2));
    expect(thList[0].getAttribute('scope')).toBe('col');
    expect(thList[0].textContent).toBe('Player');

    expect(thList[1].getAttribute('scope')).toBe('col');
    expect(thList[1].textContent).toBe('Position');

    expect(thList[2].getAttribute('scope')).toBe('col');
    expect(thList[2].textContent).toBe('Number');

    expect(tdList[0].querySelector('img')?.getAttribute('alt')).toBe(props.list[0].name);
    expect(tdList[1].textContent).toBe(props.list[0].name);
    expect(tdList[2].textContent).toBe(props.list[0].position);
    expect(tdList[3].querySelector('span')?.textContent).toBe(String(props.list[0].number));
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
    const component = () => <PlayerList {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const table = document.querySelector('table') as HTMLElement;
    const tdList = table.querySelectorAll('td');

    // Test assertions.
    expect(tdList[0].getAttribute('colspan')).toBe(String(4));
    expect(tdList[0].textContent).toBe('No players yet.');
  });
});
