import { Show, For } from 'solid-js';
import { css } from 'styled-system/css';
import EventMinistry from '~/common/EventMinistry';
import FlexStack from '~/common/FlexStack';
import type { Component } from 'solid-js';

// =====
// Data.
// =====

import eventsList from '~/data/ministry/eventList.json';

// ==========
// Component.
// ==========

const PanelEvents: Component = () => {
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
      <h3>Upcoming events</h3>

      <Show when={eventsList?.length}>
        <div
          class={css({
            display: 'grid',
            gap: '{spacing.5}',

            // Media query.
            md: {
              gap: '{spacing.10}',
              gridTemplateColumns: 'repeat(2, 1fr)',
            },
          })}
        >
          <For each={eventsList}>
            {(item) => (
              <FlexStack>
                <hr />

                <EventMinistry {...item} />
              </FlexStack>
            )}
          </For>
        </div>
      </Show>
    </FlexStack>
  );
};

// Export.
export default PanelEvents;
