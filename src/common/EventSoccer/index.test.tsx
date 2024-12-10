import { MOCK_DATE_STRING } from '~/__mocks__';
import { render } from 'solid-js/web';
import EventSoccer from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/EventSoccer', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const addressLine1 = '1234 Fifth Street';
    const addressLine2 = 'Smallville, KS 12345';

    const props = {
      address: `${addressLine1} \n ${addressLine2}`,
      arrivalTime: 30,
      date: MOCK_DATE_STRING,
      field: 'C',
      map: {
        alt: 'EXAMPLE_MAP',
        image: '/path/to/image.webp',
      },
      opponent: 'EXAMPLE_OPPONENT',
      type: 'game',
      uniform: {
        shirt: 'EXAMPLE_SHIRT',
        shorts: 'EXAMPLE_SHORTS',
        socks: 'EXAMPLE_SOCKS',
      },
    };

    // Component.
    const component = () => <EventSoccer {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.body.querySelector('div') as HTMLElement;

    const table = parent.querySelector('table') as HTMLElement;
    const thList = table.querySelectorAll('th');
    const tdList = table.querySelectorAll('td');
    const labelList = tdList[0].querySelectorAll('label > span');

    const mapImageLink = parent.querySelector(`a[href*="${props.map.image}"]`) as HTMLElement;
    const mapImage = mapImageLink.querySelector('img') as HTMLImageElement;

    // Test assertions.
    expect(thList[0].textContent).toBe('RSVP:');
    expect(labelList[0].textContent).toBe('Yes');
    expect(labelList[1].textContent).toBe('Maybe');
    expect(labelList[2].textContent).toBe('No');

    expect(thList[1].textContent).toBe('Event:');
    expect(tdList[1].textContent).toBe(props.type);

    expect(thList[2].textContent).toBe('Opponent:');
    expect(tdList[2].textContent).toBe(props.opponent);

    expect(thList[3].textContent).toBe('Start time:');
    expect(tdList[3].textContent).toContain('2024');

    expect(thList[4].textContent).toBe('Arrival time:');
    expect(tdList[4].textContent).toContain(String(props.arrivalTime));

    expect(thList[5].textContent).toBe('Uniform:');
    expect(tdList[5].textContent).toContain(props.uniform.shirt);
    expect(tdList[5].textContent).toContain(props.uniform.shorts);
    expect(tdList[5].textContent).toContain(props.uniform.socks);

    expect(thList[6].textContent).toBe('Field:');
    expect(tdList[6].textContent).toBe(props.field);

    expect(thList[7].textContent).toBe('Address:');
    expect(tdList[7].textContent).toContain(addressLine1);
    expect(tdList[7].textContent).toContain(addressLine2);

    expect(thList[8].textContent).toBe('Map:');
    expect(tdList[8].querySelector('a')?.textContent).toContain('LINK');
    expect(tdList[8].querySelector('a')?.getAttribute('href')).toContain(encodeURI(addressLine1));
    expect(tdList[8].querySelector('a')?.getAttribute('href')).toContain(encodeURI(addressLine2));

    expect(mapImage.getAttribute('alt')).toBe(props.map.alt);
    expect(mapImage.getAttribute('src')).toBe(props.map.image);
  });
});
