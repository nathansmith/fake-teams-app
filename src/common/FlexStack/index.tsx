import { css } from 'styled-system/css';
import { Show } from 'solid-js';
import type { ParentComponent } from 'solid-js';
import type { SystemStyleObject } from 'styled-system/types';

// ======
// Types.
// ======

export interface IFlexStack {
  cssRaw?: SystemStyleObject;
  html?: string;
}

// ==========
// Component.
// ==========

const FlexStack: ParentComponent<IFlexStack> = (props) => {
  // =======
  // Styles.
  // =======

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '{spacing.5}',
  };

  // ==========
  // Expose UI.
  // ==========

  return (
    <>
      <Show when={props.children && !props.html}>
        <div
          class={css(
            //
            styles,
            props.cssRaw
          )}
        >
          {props.children}
        </div>
      </Show>

      <Show when={props.html && !props.children}>
        <div
          class={css(
            //
            styles,
            props.cssRaw
          )}
          // eslint-disable-next-line solid/no-innerhtml
          innerHTML={props.html}
        />
      </Show>
    </>
  );
};

// Export.
export default FlexStack;
