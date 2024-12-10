import { render } from 'solid-js/web';
import PanelRoster from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/AppSoccer/PanelRoster', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <PanelRoster {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const table = parent.querySelector('table') as HTMLElement;
    const linkList = parent.querySelectorAll(':scope > div > a');
    const imgList = parent.querySelectorAll(':scope > div > a > img');

    // Test assertions.
    expect(table).toBeTruthy();

    expect(linkList[0].getAttribute('href')).toBe('https://academy.com/');
    expect(linkList[1].getAttribute('href')).toBe('https://dickssportinggoods.com/');

    expect(imgList[0].getAttribute('alt')).toBe('Academy Sports + Outdoors');
    expect(imgList[1].getAttribute('alt')).toBe('Dicks Sporting Goods');

    expect(imgList[0].getAttribute('src')).toBe('/promo/academy-sports-and-outdoors.webp');
    expect(imgList[1].getAttribute('src')).toBe('/promo/dicks-sporting-goods.webp');
  });
});
