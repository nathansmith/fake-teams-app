import { css } from 'styled-system/css';
import { For } from 'solid-js';
import type { Component } from 'solid-js';
import type { SystemStyleObject } from 'styled-system/types';

// ======
// Types.
// ======

export interface ISelect {
  ariaLabel?: string;
  cssRaw?: SystemStyleObject;
  id?: string;
  name?: string;
  onChange?: (value: number | string) => void;
  optionList: ISelectOption[];
  value?: number | string;
}

export interface ISelectOption {
  text: string;
  value: number | string;
}

// ==========
// Component.
// ==========

const Select: Component<ISelect> = (props) => {
  // ==============
  // Event: change.
  // ==============

  const onChange = (event: Event): void => {
    // Get value.
    const target = event.target as HTMLSelectElement;
    const valueStr = target.value;
    const valueNum = parseFloat(valueStr);

    // Callback exists: YES.
    if (typeof props.onChange === 'function') {
      // Fire callback.
      props.onChange(
        // Prefer numeric value.
        isNaN(valueNum) ? valueStr : valueNum
      );
    }
  };

  // ==========
  // Expose UI.
  // ==========

  return (
    <select
      aria-label={props.ariaLabel}
      class={css(
        {
          appearance: 'none',
          backgroundImage: 'url("/background/select.svg")',
          backgroundPosition: '100% center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '10px auto',
          paddingLeft: '0',
          paddingRight: '15px',
        },
        props.cssRaw
      )}
      id={props.id}
      name={props.name}
      onChange={onChange}
      value={props.value}
    >
      <For each={props.optionList}>
        {({ text, value }) => <option value={value}>{text}</option>}
      </For>
    </select>
  );
};

// Export.
export default Select;
