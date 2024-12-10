import type { JSX } from 'solid-js';

// ======
// Types.
// ======

export interface ITab {
  icon?: JSX.Element;
  text: string;
}

// ==========
// Component.
// ==========

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tab = (props: ITab): any => props;

// Export.
export default Tab;
