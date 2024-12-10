import { css } from 'styled-system/css';
import { Show } from 'solid-js';
import { state } from '~/state';
import Avatar from '~/common/Avatar';
import FlexStack from '~/common/FlexStack';
import HeroImage from '~/common/HeroImage';
import Link from '~/common/Link';
import type { Component } from 'solid-js';

// ==========
// Component.
// ==========

const AboutFusion: Component = () => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <FlexStack>
      <hr
        class={css({
          // Media query.
          lg: {
            display: 'none',
          },
        })}
      />

      <Show when={state.signalSoccerId.get() === 'fusion-08b'}>
        <h3>Latest photo: "Game plan"</h3>

        <HeroImage
          alt="Frisco Fusion 08B team"
          image="/photos/fusion-08b/webp/fusion-08b-team-tent.webp"
        />
      </Show>

      <Show when={state.signalSoccerId.get() === 'fusion-10b'}>
        <h3>Latest photo: "Roll call"</h3>

        <HeroImage
          alt="Frisco Fusion 10B team"
          image="/photos/fusion-10b/webp/fusion-10b-team-photo.webp"
        />
      </Show>

      <h3>Frisco Fusion</h3>

      <p>
        <Link href="https://friscofusionsoccer.com">🔗 FriscoFusionSoccer.com</Link>
      </p>

      <p>
        We focus on constant improvement, teamwork, and skills development. By concentrating on
        perfecting execution, we believe results will follow.
      </p>

      <p>
        Practices are held twice weekly year-round, with regular seasons in the fall and spring, and
        additional tournaments during off-season.
      </p>

      <hr />

      <h4>About the team</h4>

      <div
        class={css({
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '{spacing.5}',
        })}
      >
        <Avatar
          image={
            state.signalSoccerId.get() === 'fusion-08b'
              ? '/avatars/svg/fusion-08b.svg'
              : '/avatars/svg/fusion-10b.svg'
          }
          size={48}
        />

        <FlexStack>
          <Show when={state.signalSoccerId.get() === 'fusion-08b'}>
            <p>
              The Frisco Fusion 08B team is comprised of boys who were born in 2008 and 2009. They
              play competitively in the Plano Premier Invitational League.
            </p>
          </Show>

          <Show when={state.signalSoccerId.get() === 'fusion-10b'}>
            <p>
              The Frisco Fusion 10B team is comprised of boys who were born in 2010 and 2011. They
              play competitively in the Plano Premier Invitational League.
            </p>
          </Show>

          <p>
            <Link href="https://comp.pysa.org">🔗 comp.pysa.org</Link>
          </p>
        </FlexStack>
      </div>
    </FlexStack>
  );
};

// Export.
export default AboutFusion;
