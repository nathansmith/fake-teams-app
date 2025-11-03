import { css } from 'styled-system/css';
import { For, Show } from 'solid-js';
import { state } from '~/state';
import ButtonLink from '~/common/ButtonLink';
import EventMinistry from '~/common/EventMinistry';
import FlexStack from '~/common/FlexStack';
import Link from '~/common/Link';
import SpaceBetween from '~/common/SpaceBetween';
import Video from '~/common/Video';
import type { Component } from 'solid-js';

// =====
// Data.
// =====

import eventsList from '~/data/ministry/eventList.json';

// ==========
// Component.
// ==========

const PanelHome: Component = () => {
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
        <FlexStack>
          <h3>Latest message</h3>

          <Video
            //
            title="Jesus Centered 04: Jesus Is Who We Proclaim"
            video="FKkkl4wGCoY"
          />
        </FlexStack>

        <FlexStack>
          <h3>About us</h3>

          <p
            class={css({
              md: {
                fontSize: '{fontSizes.lg}',
                textWrap: 'balance',
              },
            })}
          >
            We are a non-denominational church community located slightly north of Dallas, Texas. We
            have physical campuses in Frisco, McKinney, Prosper, and regularly stream our services
            online. Check out the latest message from our sermon series. We look forward to
            connecting with you soon.
          </p>

          <p>
            <Link href="https://hopefellowship.net">🔗 HopeFellowship.net</Link>
          </p>
        </FlexStack>
      </div>

      <hr
        class={css({
          // Media query.
          lg: {
            display: 'none',
          },
        })}
      />

      <SpaceBetween>
        <h3>Upcoming events</h3>

        <ButtonLink onClick={() => state.signalMinistryTab.set(1)}>View more</ButtonLink>
      </SpaceBetween>

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
          <For each={eventsList.slice(0, 4)}>
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
export default PanelHome;
