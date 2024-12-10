import { css } from 'styled-system/css';
import { createEffect, createSignal, For, Show } from 'solid-js';
import { getChildren, getPanelId, getTabId } from '~/utils';
import type { JSX, ParentComponent } from 'solid-js';
import Select from '../Select';

// ======
// Types.
// ======

export interface ITabList {
  activeIndex?: number;
  id: string;
  isResponsive?: boolean;
  onChange?: (index: number) => void;
}

// ==========
// Component.
// ==========

const TabList: ParentComponent<ITabList> = (props) => {
  // ==========
  // Set later.
  // ==========

  let refParent: HTMLElement;

  // ==========
  // Get props.
  // ==========

  const getProps = () => props;

  // ============
  // Local state.
  // ============

  const [activeIndex, setActiveIndex] = createSignal<number>(getProps().activeIndex || 0);

  // ===========
  // Reactivity.
  // ===========

  createEffect((): void => {
    // Update state.
    setActiveIndex(props.activeIndex || 0);
  });

  // =======================
  // Event: handle key down.
  // =======================

  const onKeyDown = (event: KeyboardEvent): void => {
    // Get key.
    const key = event.key.toLowerCase();

    // Key events.
    const isArrowLeft = key === 'arrowleft';
    const isArrowRight = key === 'arrowright';
    const isArrowKey = isArrowLeft || isArrowRight;

    // Invalid key?
    if (!isArrowKey) {
      // Early exit.
      return;
    }

    // Cancel bubble.
    event.stopPropagation();

    // Prevent default.
    event.preventDefault();

    // Set later.
    let newIndex = activeIndex();
    let nextItem: HTMLButtonElement | null = null;

    // Get list.
    const list = refParent.querySelectorAll('button');

    // Arrow left?
    if (isArrowLeft) {
      // Get next item.
      newIndex = activeIndex() - 1;
      nextItem = list[newIndex];

      // No next item?
      if (!nextItem) {
        // Wrap around.
        newIndex = list.length - 1;
        nextItem = list[newIndex];
      }
    }

    // Arrow right?
    if (isArrowRight) {
      // Get next item.
      newIndex = activeIndex() + 1;
      nextItem = list[newIndex];

      // No next item?
      if (!nextItem) {
        // Wrap around.
        newIndex = 0;
        nextItem = list[newIndex];
      }
    }

    // Item exists?
    if (nextItem) {
      // Focus next item.
      nextItem.focus();

      // Update state.
      setActiveIndex(newIndex);
    }
  };

  // ==============
  // Event: change.
  // ==============

  const onChange = (value: number): void => {
    // Callback exists: YES.
    if (typeof props.onChange === 'function') {
      // Fire callback.
      props.onChange(value);
    }
  };

  // ==========
  // Expose UI.
  // ==========

  return (
    <>
      {/*
      ===========
      UI: SELECT.
      ===========
      */}
      <Show when={props.isResponsive}>
        <Select
          ariaLabel="select tab"
          cssRaw={css.raw({
            cursor: 'pointer',
            fontWeight: 'bold',

            paddingTop: '{spacing.5}',
            paddingBottom: '{spacing.5}',
            minHeight: '100%',

            // Media query.
            md: {
              // Hide.
              display: 'none',
            },
          })}
          onChange={(value) => onChange(value as number)}
          optionList={getChildren(props).map((child, index) => {
            // Get child props.
            const { text } = typeof child === 'function' ? child() : child;

            // Expose object.
            return {
              text,
              value: index,
            };
          })}
          value={activeIndex()}
        />
      </Show>

      {/*
      =============
      UI: TAB LIST.
      =============
      */}
      <div
        aria-multiselectable={false}
        aria-orientation="horizontal"
        class={css({
          display: 'flex',
          gap: '{spacing.5}',
          height: '100%',

          // Is responsive: YES.
          '&[data-is-responsive="true"]': {
            // Hide.
            display: 'none',

            // Media query.
            md: {
              // Show.
              display: 'flex',
            },
          },
        })}
        data-is-responsive={props.isResponsive}
        ref={(el) => (refParent = el)}
        role="tablist"
      >
        <For each={getChildren(props)}>
          {(child, index) => {
            // Get child props.
            const { icon, text } = typeof child === 'function' ? child() : child;

            // Expose UI.
            return (
              <button
                aria-controls={getPanelId(props.id, index())}
                aria-selected={index() === activeIndex()}
                class={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '{spacing.1}',
                  position: 'relative',

                  '&:after': {
                    content: '""',
                    backgroundColor: 'transparent',
                    borderRadius: '1px',
                    height: '3px',
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    bottom: '0',
                  },

                  '&:focus-visible': {
                    zIndex: '1',
                  },

                  '&[aria-selected="true"]:after': {
                    backgroundColor: '{colors.indigo.500}',
                  },

                  '&[aria-selected="false"]:hover:after': {
                    backgroundColor: '{colors.neutral.300}',
                  },
                })}
                id={getTabId(props.id, index())}
                onClick={() => {
                  // Update state.
                  setActiveIndex(index());

                  // Fire callback.
                  onChange(index());
                }}
                onKeyDown={onKeyDown}
                role="tab"
                tabindex={index() === activeIndex() ? 0 : -1}
                type="button"
              >
                {icon}
                {text}
              </button>
            );
          }}
        </For>
      </div>
    </>
  );
};

// Export.
export default TabList;
