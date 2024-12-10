import { css } from 'styled-system/css';
import type { ParentComponent } from 'solid-js';
import type { SystemStyleObject } from 'styled-system/types';

// ======
// Types.
// ======

export interface ILink {
  cssRaw?: SystemStyleObject;
  href?: string;
  title?: string;
}

// ==========
// Component.
// ==========

const Link: ParentComponent<ILink> = (props) => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <a
      class={css(
        {
          color: '#00f',
          display: 'inline-block',
          textDecoration: 'underline',
        },
        props.cssRaw
      )}
      href={props.href}
      target="_blank"
      title={props.title}
    >
      {props.children}
    </a>
  );
};

// Export.
export default Link;
