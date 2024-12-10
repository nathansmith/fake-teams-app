import { css } from 'styled-system/css';
import { getRandomId } from '~/utils';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

export interface IRadio {
  checked?: boolean;
  name: string;
  onChange?: (value: number | string) => void;
  text: string;
  value: number | string;
}

// ==========
// Component.
// ==========

const Radio: Component<IRadio> = (props) => {
  // ==========
  // Constants.
  // ==========

  const radioId = getRandomId();

  // ==============
  // Event: change.
  // ==============

  const onChange = (event: Event): void => {
    // Get value.
    const target = event.target as HTMLInputElement;
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
    <label
      class={css({
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '{spacing.2.5}',
        userSelect: 'none',

        '&, & *': {
          cursor: 'pointer',
        },
      })}
      for={radioId}
    >
      <input
        checked={props.checked}
        id={radioId}
        name={props.name}
        onChange={onChange}
        type="radio"
        value={props.value}
      />

      <span
        class={css({
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        })}
      >
        {props.text}
      </span>
    </label>
  );
};

// Export.
export default Radio;
