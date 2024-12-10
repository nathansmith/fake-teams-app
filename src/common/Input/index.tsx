import { css } from 'styled-system/css';
import { getRandomId } from '~/utils';
import { Show } from 'solid-js';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

export interface IInput {
  ariaLabel?: string;
  id?: string;
  label?: string;
  max?: number;
  maxLength?: number;
  min?: number;
  name?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value?: string;
}

// ==========
// Component.
// ==========

const Input: Component<IInput> = (props) => {
  // ==========
  // Constants.
  // ==========

  const inputId = getRandomId();

  // ================
  // Helper: get max.
  // ================

  const getMax = (): number | undefined => {
    if (props.type === 'number') {
      return props.max;
    }
  };

  // ================
  // Helper: get min.
  // ================

  const getMin = (): number | undefined => {
    if (props.type === 'number') {
      return props.min || 0;
    }
  };

  // ==============
  // Event: change.
  // ==============

  const onChange = (event: Event): void => {
    // Get value.
    const target = event.target as HTMLInputElement;
    const value = target.value;

    // Callback exists: YES.
    if (typeof props.onChange == 'function') {
      // Update.
      props.onChange(value);
    }
  };

  // ==========
  // Expose UI.
  // ==========
  return (
    <div
      class={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '{spacing.1}',
      })}
    >
      <Show when={props.label}>
        <label
          for={props.id || inputId}
          class={css({
            alignSelf: 'start',
            display: 'flex',
            alignItems: 'end',
            fontWeight: '600',
          })}
        >
          {props.label}

          <Show when={props.required}>
            <abbr
              //
              class={css({
                color: '{colors.orange.500}',
                fontFamily: 'monospace',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                lineHeight: '0.7',
                marginLeft: '{spacing.1}',
                textDecoration: 'none',
              })}
              title="Required"
            >
              *
            </abbr>
          </Show>
        </label>
      </Show>

      <input
        aria-label={props.ariaLabel}
        autocomplete="off"
        class={css({
          appearance: 'none',
          borderColor: '{colors.gray.500}',
          borderRadius: '{radii.md}',
          borderStyle: 'solid',
          borderWidth: '1px',
          padding: '{spacing.2.5}',
          width: '100%',

          // @ts-expect-error Firefox.
          '-moz-appearance': 'textfield',

          // Override `number` styles.
          '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
            appearance: 'none',
          },
        })}
        id={props.id || inputId}
        max={getMax()}
        maxLength={props.maxLength}
        min={getMin()}
        name={props.name}
        onChange={onChange}
        placeholder={props.placeholder}
        type={props.type || 'text'}
        value={props.value || ''}
      />
    </div>
  );
};

// Export.
export default Input;
