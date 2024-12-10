import { css } from 'styled-system/css';
import Main from './Main';
import Nav from './Nav';
import TitleBar from './TitleBar';
import type { ParentComponent } from 'solid-js';

// ==========
// Component.
// ==========

const Layout: ParentComponent = (props) => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <div
      class={css({
        display: 'grid',
        gridTemplateAreas: `
          "GRID_AREA_TITLE_BAR GRID_AREA_TITLE_BAR"
          "GRID_AREA_NAV GRID_AREA_NAV"
          "GRID_AREA_MAIN GRID_AREA_MAIN"
        `,
        gridTemplateRows: 'auto 70px 1fr',

        width: '100%',
        height: '100dvh',

        // Media query.
        lg: {
          gridTemplateAreas: `
            "GRID_AREA_TITLE_BAR GRID_AREA_TITLE_BAR"
            "GRID_AREA_NAV GRID_AREA_MAIN"
          `,
          gridTemplateRows: 'auto 1fr',
          gridTemplateColumns: '70px 1fr',
        },
      })}
    >
      <TitleBar />

      <Nav />

      <Main>{props.children}</Main>
    </div>
  );
};

// Export.
export default Layout;
