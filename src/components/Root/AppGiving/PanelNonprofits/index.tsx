import { css } from 'styled-system/css';
import FlexStack from '~/common/FlexStack';
import NonprofitList from './NonprofitList';
import type { Component } from 'solid-js';

// ==========
// Component.
// ==========

const PanelNonprofits: Component = () => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <FlexStack
      cssRaw={css.raw({
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1000px',
      })}
    >
      <h3>Charities & Nonprofits</h3>

      <NonprofitList />
    </FlexStack>
  );
};

// Export.
export default PanelNonprofits;
