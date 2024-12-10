import { MOCK_DATE_STRING } from '~/__mocks__';
import { render } from 'solid-js/web';
import HistoryList from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root/AppGiving/PanelHistory/HistoryList', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {
      list: [
        {
          amount: 1500,
          date: MOCK_DATE_STRING,
          name: 'EXAMPLE_NAME',
        },
      ],
    };

    // Component.
    const component = () => <HistoryList {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const table = document.querySelector('table') as HTMLElement;
    const thList = table.querySelectorAll('th');
    const tbodyTdList = table.querySelectorAll('tbody td');
    const tfootTdList = table.querySelectorAll('tfoot td');

    // Test assertions.
    expect(thList[0].textContent).toBe('Date');
    expect(thList[1].textContent).toBe('Name');
    expect(thList[2].textContent).toBe('Amount');

    expect(tbodyTdList[0].textContent).toBe('Nov 9, 2024');
    expect(tbodyTdList[1].textContent).toBe(props.list[0].name);
    expect(tbodyTdList[2].textContent).toBe('$1,500.00');

    expect(tfootTdList[0].querySelector('u')?.textContent).toBe('Download CSV');
    expect(tfootTdList[1].textContent).toBe('Total:');
    expect(tfootTdList[2].textContent).toBe('$1,500.00');
  });

  // =========================
  // Test "no list"" scenario.
  // =========================

  test('handles "no list" scenario', (): void => {
    // Dummy props.
    const props = {
      list: [],
    };

    // Component.
    const component = () => <HistoryList {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const table = document.querySelector('table') as HTMLElement;
    const tbodyTdList = table.querySelectorAll('tbody td');
    const tfootTdList = table.querySelectorAll('tfoot td');

    // Test assertions.
    expect(tbodyTdList[0].getAttribute('colspan')).toBe(String(3));
    expect(tbodyTdList[0].textContent).toBe('No giving history yet.');
    expect(tfootTdList.length).toBeFalsy();
  });
});
