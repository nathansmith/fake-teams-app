import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import { state } from '~/state';
import Nonprofit from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root/AppGiving/PanelNonprofits/NonprofitList/Nonprofit', (): void => {
  beforeEach((): void => {
    // Update.
    state.signalGivingId.set('');
  });

  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      description: 'EXAMPLE_DESCRIPTION',
      id: 'EXAMPLE_ID',
      image: '/path/to/image.webp',
      name: 'EXAMPLE_NAME',
      url: 'https://example.com/',
    };

    // Component.
    const component = () => <Nonprofit {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const img = parent.querySelector('img') as HTMLElement;

    const divContent = parent.querySelector('div') as HTMLElement;
    const h4 = divContent.querySelector('h4') as HTMLElement;
    const p = divContent.querySelector('p') as HTMLElement;
    const button = divContent.querySelector('button') as HTMLElement;
    const link = divContent.querySelector('a') as HTMLElement;

    // Test assertions.
    expect(img.getAttribute('alt')).toBe(props.name);
    expect(img.getAttribute('src')).toBe(props.image);

    expect(h4.textContent).toBe(props.name);
    expect(p.textContent).toBe(props.description);
    expect(button.textContent).toBe('Donate');
    expect(link.textContent).toContain('example.com');

    // Fire events.
    fireEvent.click(button);

    // Test assertions.
    expect(state.signalGivingId.get()).toBe(props.id);
  });
});
