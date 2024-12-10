import { css } from 'styled-system/css';
import type { ParentComponent } from 'solid-js';

// ======
// Types.
// ======

export interface IFieldset {
  legend: string;
}

// ==========
// Component.
// ==========

const Fieldset: ParentComponent<IFieldset> = (props) => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <fieldset
      class={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '{spacing.5}',

        borderColor: '{colors.neutral.300}',
        borderRadius: '{radii.md}',
        borderStyle: 'solid',
        borderWidth: '1px',

        padding: '{spacing.5}',
        position: 'relative',
      })}
    >
      <legend
        class={css({
          borderColor: '{colors.neutral.300}',
          borderRadius: '{radii.md}',
          borderStyle: 'solid',
          borderWidth: '1px',

          fontFamily: '"Arial Narrow", sans-serif',
          fontSize: '{fontSizes.lg}',
          lineHeight: '1',

          paddingTop: '{spacing.1.5}',
          paddingLeft: '{spacing.2.5}',
          paddingRight: '{spacing.2.5}',
          paddingBottom: '{spacing.1.5}',

          // Media query.
          md: {
            fontSize: '{fontSizes.xl}',
          },
        })}
      >
        {props.legend}
      </legend>

      {props.children}
    </fieldset>
  );
};

// Export.
export default Fieldset;
