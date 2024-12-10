import { css } from 'styled-system/css';
import { createEffect, createSignal, Show } from 'solid-js';
import type { Component } from 'solid-js';
import type { IReaction } from '../..';

// ==========
// Component.
// ==========

const Reaction: Component<IReaction> = (props) => {
  // ============
  // Local state.
  // ============

  const [count, setCount] = createSignal<number>(0);

  // ===========
  // Reactivity.
  // ===========

  createEffect((): void => {
    // Update.
    setCount(props.count);
  });

  // =============
  // Event: click.
  // =============

  const onClick = (): void => {
    // Is larger: YES.
    if (props.count < count()) {
      // Decrement.
      setCount(count() - 1);
    } else {
      // Increment.
      setCount(count() + 1);
    }
  };

  // ==========
  // Expose UI.
  // ==========

  return (
    <Show when={props.emoji && props.count}>
      <button
        class={css({
          display: 'flex',
          gap: '{spacing.1}',

          color: '{colors.neutral.500}',
          backgroundColor: '#fff',
          borderColor: '#ccc',
          borderRadius: '9rem',
          borderWidth: '1px',
          lineHeight: '1',
          padding: '{spacing.2}',

          '&:active': {
            transform: 'translateY(1px)',
          },

          '&[data-reaction-plus="true"]': {
            color: '#000',
            backgroundColor: '#eff',
            borderColor: '#00f',
          },
        })}
        data-reaction-plus={props.count < count()}
        onClick={onClick}
        type="button"
      >
        {props.emoji}

        <Show when={1 < count()}>
          <span
            class={css({
              fontWeight: '600',
            })}
          >
            {count()}
          </span>
        </Show>
      </button>
    </Show>
  );
};

// Export.
export default Reaction;
