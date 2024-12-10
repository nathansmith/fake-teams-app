import { For } from 'solid-js';
import FlexStack from '~/common/FlexStack';
import Nonprofit from './Nonprofit';
import type { Component } from 'solid-js';

// =====
// Data.
// =====

import nonprofitList from '~/data/giving/nonprofitList.json';

// ==========
// Component.
// ==========

const NonprofitList: Component = () => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <FlexStack>
      <For each={nonprofitList}>
        {(item) => (
          <>
            <hr />

            <Nonprofit {...item} />
          </>
        )}
      </For>
    </FlexStack>
  );
};

// Export.
export default NonprofitList;
