import type { JSX } from 'solid-js';

// ======
// Types.
// ======

export interface TabPanel {
  children: JSX.Element;
  isScroll?: boolean;
  isScrollBottom?: boolean;
}

// ==========
// Component.
// ==========

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TabPanel = (props: TabPanel): any => props;

// Export.
export default TabPanel;
