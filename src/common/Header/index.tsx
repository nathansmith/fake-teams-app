import { css, cva } from 'styled-system/css';
import type { ParentComponent } from 'solid-js';
import type { SystemStyleObject } from 'styled-system/types';

// ======
// Types.
// ======

export interface IHeader {
  cssRaw?: SystemStyleObject;
}

// ==========
// Component.
// ==========

const Header: ParentComponent<IHeader> = (props) => {
  // ==========
  // Component.
  // ==========

  return (
    <header
      class={css(
        {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, auto)',
          alignItems: 'center',
          justifyContent: 'start',
          gap: '{spacing.5}',

          borderBottomColor: '{colors.neutral.300}',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',

          paddingLeft: '{spacing.5}',
          paddingRight: '{spacing.5}',

          '& > h2': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          },
        },
        props.cssRaw
      )}
    >
      {props.children}
    </header>
  );
};

// Export.
export default Header;
