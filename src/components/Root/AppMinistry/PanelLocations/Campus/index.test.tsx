import { render } from 'solid-js/web';
import Campus from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root/AppMinistry/PanelLocations/Campus', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const addressLine1 = '1234 Fifth Street';
    const addressLine2 = 'Smallville, KS 12345';
    const serviceTime1 = 'Saturday 5:00 PM';
    const serviceTime2 = 'Sunday 9:30 AM & 11:15 AM';

    const props = {
      address: `${addressLine1} \n ${addressLine2}`,
      image: '/path/to/image.webp',
      name: 'EXAMPLE_NAME',
      times: `${serviceTime1} \n ${serviceTime2}`,
      url: 'https://example.com/',
    };

    // Component.
    const component = () => <Campus {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const img = parent.querySelector('img') as HTMLElement;
    const table = parent.querySelector('table') as HTMLElement;
    const thList = table.querySelectorAll('th');
    const tdList = table.querySelectorAll('td');

    // Test assertions.
    expect(img.getAttribute('alt')).toBe(props.name);
    expect(img.getAttribute('src')).toBe(props.image);

    expect(thList[0].textContent).toBe('Campus:');
    expect(thList[0].getAttribute('scope')).toBe('col');

    expect(thList[1].textContent).toBe('When:');
    expect(thList[1].getAttribute('scope')).toBe('col');

    expect(thList[2].textContent).toBe('Where:');
    expect(thList[2].getAttribute('scope')).toBe('col');

    expect(thList[3].textContent).toBe('Map:');
    expect(thList[3].getAttribute('scope')).toBe('col');

    expect(thList[4].textContent).toBe('URL:');
    expect(thList[4].getAttribute('scope')).toBe('col');

    expect(tdList[0].textContent).toBe(props.name);
    expect(tdList[1].textContent).toContain(serviceTime1);
    expect(tdList[1].textContent).toContain(serviceTime2);

    expect(tdList[2].textContent).toContain(addressLine1);
    expect(tdList[2].textContent).toContain(addressLine2);

    expect(tdList[3].querySelector('a')?.textContent).toContain('LINK');
    expect(tdList[3].querySelector('a')?.getAttribute('href')).toContain(encodeURI(addressLine1));
    expect(tdList[3].querySelector('a')?.getAttribute('href')).toContain(encodeURI(addressLine2));

    expect(tdList[4].querySelector('a')?.textContent).toContain('LINK');
    expect(tdList[4].querySelector('a')?.getAttribute('href')).toBe(props.url);
  });
});
