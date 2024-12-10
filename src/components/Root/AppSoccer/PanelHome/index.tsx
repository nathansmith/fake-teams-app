import { css } from 'styled-system/css';
import { createEffect, createSignal } from 'solid-js';
import { state } from '~/state';
import AboutFusion from './AboutFusion';
import ButtonLink from '~/common/ButtonLink';
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

const PanelHome: Component = () => {
  // ==========
  // Constants.
  // ==========

  const eventObj: Record<string, IEventSoccer[]> = {
    'fusion-08b': eventListFusion08b,
    'fusion-10b': eventListFusion10b,
  };

  // ============
  // Local state.
  // ============

  const [eventList, setEventList] = createSignal<IEventSoccer[]>([]);

  // ===========
  // Reactivity.
  // ===========

  createEffect((): void => {
    // Update.
    setEventList(eventObj[state.signalSoccerId.get()]);
  });

  // ======================
  // Helper: get next game.
  // ======================

  const getNextGame = (): IEventSoccer => {
    // Get event.
    const nextGame = eventList()
      .slice()
      .reverse()
      .find(({ type }) => type === 'game') as IEventSoccer;

    // Expose object.
    return nextGame;
  };

  // ==========================
  // Helper: get next practice.
  // ==========================

  const getNextPractice = (): IEventSoccer => {
    // Get event.
    const nextPractice = eventList()
      .slice()
      .reverse()
      .find(({ type }) => type === 'practice') as IEventSoccer;

    // Expose object.
    return nextPractice;
  };

  // ==========
  // Expose UI.
  // ==========

  return (
    <div
      class={css({
        display: 'grid',
        gap: '{spacing.5}',

        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1000px',

        // Media query.
        lg: {
          gap: '{spacing.10}',
          gridTemplateColumns: '1fr 480px',
        },
      })}
    >
      <FlexStack>
        <SpaceBetween>
          <h3>Upcoming events</h3>

          <ButtonLink onClick={() => state.signalSoccerTab.set(1)}>View more</ButtonLink>
        </SpaceBetween>

        <hr />

        <h4>Next practice</h4>

        <EventSoccer
          //
          {...getNextPractice()}
          map={null}
        />

        <hr />

        <h4>Next game</h4>

        <EventSoccer
          //
          {...getNextGame()}
          map={null}
        />
      </FlexStack>

      <AboutFusion />
    </div>
  );
};

// Export.
export default PanelHome;
