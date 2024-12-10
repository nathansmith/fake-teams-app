import { fireEvent } from '@testing-library/dom';
import { render } from 'solid-js/web';
import Tab from '~/common/Tab';
import TabList from './';

// ====================
// Describe `fileName`.
// ====================

describe('common/TabList', (): void => {
  // ==========
  // Constants.
  // ==========

  const sharedProps = {
    activeIndex: 0,
    id: 'EXAMPLE_ID',
    isResponsive: false,
    onChange: vi.fn(),
  };

  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = { ...sharedProps };

    // Component.
    const component = () => (
      <TabList {...props}>
        <Tab text="Tab 1" />
        <Tab text="Tab 2" />
      </TabList>
    );

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const buttonList = parent.querySelectorAll('button');
    const select = document.querySelector('select');

    // Test assertions.
    expect(select).toBeFalsy();

    expect(parent.getAttribute('data-is-responsive')).toBe(String(false));
    expect(parent.getAttribute('aria-multiselectable')).toBe(String(false));
    expect(parent.getAttribute('aria-orientation')).toBe('horizontal');
    expect(parent.getAttribute('role')).toBe('tablist');

    expect(buttonList[0].getAttribute('id')).toBeTruthy();
    expect(buttonList[0].getAttribute('aria-controls')).toBeTruthy();
    expect(buttonList[0].getAttribute('role')).toBe('tab');
    expect(buttonList[0].getAttribute('type')).toBe('button');

    expect(buttonList[0].getAttribute('aria-selected')).toBe(String(true));
    expect(buttonList[0].tabIndex).toBe(0);

    expect(buttonList[1].getAttribute('aria-selected')).toBe(String(false));
    expect(buttonList[1].tabIndex).toBe(-1);

    // Fire events.
    fireEvent.keyDown(buttonList[0], { key: 'NOT_VALID' });
    fireEvent.keyDown(buttonList[0], { key: 'arrowleft' });
    fireEvent.click(buttonList[1]);

    // Test assertions.
    expect(document.activeElement).toBe(buttonList[1]);
    expect(props.onChange).toBeCalledWith(1);

    expect(buttonList[0].tabIndex).toBe(-1);
    expect(buttonList[1].tabIndex).toBe(0);

    expect(buttonList[0].getAttribute('aria-selected')).toBe(String(false));
    expect(buttonList[1].getAttribute('aria-selected')).toBe(String(true));

    // Fire events.
    fireEvent.keyDown(buttonList[1], { key: 'NOT_VALID' });
    fireEvent.keyDown(buttonList[1], { key: 'arrowright' });
    fireEvent.click(buttonList[0]);

    // Test assertions.
    expect(document.activeElement).toBe(buttonList[0]);
    expect(props.onChange).toBeCalledWith(0);

    expect(buttonList[0].tabIndex).toBe(0);
    expect(buttonList[1].tabIndex).toBe(-1);

    expect(buttonList[0].getAttribute('aria-selected')).toBe(String(true));
    expect(buttonList[1].getAttribute('aria-selected')).toBe(String(false));
  });

  // ==============================
  // Test "is responsive" scenario.
  // ==============================

  test('handles "is responsive" scenario', (): void => {
    // Dummy props.
    const props = {
      ...sharedProps,
      isResponsive: true,
    };

    // Component.
    const component = () => (
      <TabList {...props}>
        <Tab text="Tab 1" />
        <Tab text="Tab 2" />
      </TabList>
    );

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const buttonList = parent.querySelectorAll('button');

    const select = document.querySelector('select') as HTMLSelectElement;
    const optionList = select.querySelectorAll('option');

    // Test assertions.
    expect(parent.getAttribute('data-is-responsive')).toBe(String(true));

    expect(select.getAttribute('aria-label')).toBeTruthy();
    expect(select.value).toBe(String(0));

    expect(optionList.length).toBe(buttonList.length);
    expect(optionList.length).toBe(2);

    // Fire events.
    fireEvent.change(select, {
      target: {
        value: '1',
      },
    });

    // Test assertions.
    expect(props.onChange).toBeCalledWith(1);
    expect(select.value).toBe(String(1));
  });
});
