import { For } from 'solid-js';
import { sortByName } from '~/utils';
import College from './College';
import FlexStack from '~/common/FlexStack';
import type { Component } from 'solid-js';

// =====
// Data.
// =====

import collegeList from '~/data/recruiting/collegeList.json';

// ==========
// Component.
// ==========

const CollegeList: Component = () => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <FlexStack>
      <For each={sortByName(collegeList)}>
        {(item) => (
          <>
            <hr />

            <College {...item} />
          </>
        )}
      </For>
    </FlexStack>
  );
};

// Export.
export default CollegeList;
