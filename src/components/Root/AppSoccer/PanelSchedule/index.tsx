import { css } from 'styled-system/css';
import { For } from 'solid-js';
import { getRandomId } from '~/utils';
import { state } from '~/state';
import { createEffect, createSignal } from 'solid-js';
import EventSoccer from '~/common/EventSoccer';
import FlexStack from '~/common/FlexStack';
import SpaceBetween from '~/common/SpaceBetween';
import type { Component } from 'solid-js';
import type { IEventSoccer } from '~/common/EventSoccer';

// =====
// Data.
// =====

import eventListFusion08b from '~/data/fusion-08b/eventList.json';
import eventListFusion10b from '~/data/fusion-10b/eventList.json';

// ==========
// Component.
// ==========

const PanelSchedule: Component = () => {
  // ==========
  // Constants.
  // ==========

  const showGamesId = getRandomId();

  const eventObj: Record<string, IEventSoccer[]> = {
    'fusion-08b': eventListFusion08b,
    'fusion-10b': eventListFusion10b,
  };

  // ============
  // Local state.
  // ============

  const [eventList, setEventList] = createSignal<IEventSoccer[]>(
    eventObj[state.signalSoccerId.get()]
  );

  // ===========
  // Reactivity.
  // ===========

  createEffect((): void => {
    // Update.
    setEventList(eventObj[state.signalSoccerId.get()]);
  });

  // ==========
  // Expose UI.
  // ==========

  return (
    <FlexStack
      cssRaw={css.raw({
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1000px',

        '&:has([type="checkbox"]:checked) [data-event-type="practice"]': {
          display: 'none',
        },
      })}
    >
      <SpaceBetween>
        <h3>Fall 2024</h3>

        <label
          //
          class={css({
            display: 'flex',
            alignItems: 'center',
            gap: '{spacing.2.5}',
            userSelect: 'none',

            '&, & *': {
              cursor: 'pointer',
            },
          })}
          for={showGamesId}
        >
          <input
            //
            id={showGamesId}
            type="checkbox"
          />

          <span
            class={css({
              color: '#00f',
              textDecoration: 'underline',
            })}
          >
            Show games only
          </span>
        </label>
      </SpaceBetween>

      <For each={eventList()}>
        {({ address, arrivalTime, date, field, map, opponent, type, uniform }) => (
          <>
            <hr data-event-type={type} />

            <EventSoccer
              address={address}
              arrivalTime={arrivalTime}
              date={date}
              field={field}
              map={map}
              opponent={opponent}
              type={type}
              uniform={uniform}
            />
          </>
        )}
      </For>
    </FlexStack>
  );
};

// Export.
export default PanelSchedule;
