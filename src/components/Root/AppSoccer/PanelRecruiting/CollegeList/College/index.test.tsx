import { render } from 'solid-js/web';
import College from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/AppSoccer/PanelRecruiting/CollegeList/College', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const addressLine1 = '1234 Fifth Street';
    const addressLine2 = 'Smallville, KS 12345';

    const props = {
      address: `${addressLine1} \n ${addressLine2}`,
      division: 'EXAMPLE_DIVISION',
      image: '/path/to/image.webp',
      name: 'EXAMPLE_NAME',
      urlForSchool: 'https://example.edu/',
      urlForTeam: 'https://example.com/',
    };

    // Component.
    const component = () => <College {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const img = parent.querySelector('img') as HTMLElement;
    const h4 = parent.querySelector('h4') as HTMLElement;
    const table = parent.querySelector('table') as HTMLElement;
    const thList = table.querySelectorAll('th');
    const tdList = table.querySelectorAll('td');

    // Test assertions.
    expect(img.getAttribute('alt')).toBe(props.name);
    expect(img.getAttribute('src')).toBe(props.image);
    expect(h4.textContent).toBe(props.name);

    expect(thList[0].getAttribute('scope')).toBe('row');
    expect(thList[0].textContent).toBe('School site:');

    expect(thList[1].getAttribute('scope')).toBe('row');
    expect(thList[1].textContent).toBe('Team site:');

    expect(thList[2].getAttribute('scope')).toBe('row');
    expect(thList[2].textContent).toBe('Division:');

    expect(thList[3].getAttribute('scope')).toBe('row');
    expect(thList[3].textContent).toBe('Address:');

    expect(thList[4].getAttribute('scope')).toBe('row');
    expect(thList[4].textContent).toBe('Map:');

    expect(tdList[0].querySelector('a')?.getAttribute('href')).toContain('example.edu');
    expect(tdList[1].querySelector('a')?.getAttribute('href')).toContain('example.com');
    expect(tdList[2].textContent).toBe(props.division);

    expect(tdList[3].textContent).toContain(addressLine1);
    expect(tdList[3].textContent).toContain(addressLine1);

    expect(tdList[4].querySelector('a')?.getAttribute('href')).toContain(encodeURI(addressLine1));
    expect(tdList[4].querySelector('a')?.getAttribute('href')).toContain(encodeURI(addressLine2));
  });
});
