import { css } from 'styled-system/css';
import { createEffect, createSignal } from 'solid-js';
import { state } from '~/state';
import Image from '~/common/Image';
import Link from '~/common/Link';
import PlayerList from '~/common/PlayerList';
import type { Component } from 'solid-js';
import type { IPlayer } from '~/common/PlayerList';

// =====
// Data.
// =====

import playerListFusion08b from '~/data/fusion-08b/playerList.json';
import playerListFusion10b from '~/data/fusion-10b/playerList.json';

// ==========
// Component.
// ==========

const PanelRoster: Component = () => {
  // ==========
  // Constants.
  // ==========

  const rosterObj: Record<string, IPlayer[]> = {
    'fusion-08b': playerListFusion08b,
    'fusion-10b': playerListFusion10b,
  };

  // ============
  // Local state.
  // ============

  const [playerList, setPlayerList] = createSignal<IPlayer[]>(
    rosterObj[state.signalSoccerId.get()]
  );

  // ===========
  // Reactivity.
  // ===========

  createEffect((): void => {
    // Update.
    setPlayerList(rosterObj[state.signalSoccerId.get()]);
  });

  // ==========
  // Expose UI.
  // ==========

  return (
    <div
      class={css({
        display: 'grid',
        gap: '{spacing.10}',

        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1000px',

        // Media query.
        lg: {
          gridTemplateColumns: '1fr 300px',
        },
      })}
    >
      <PlayerList list={playerList()} />

      <div
        class={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '{spacing.5}',

          // Media query.
          lg: {
            display: 'flex',
            flexDirection: 'column',
          },
        })}
      >
        <Link href="https://academy.com/">
          <Image
            alt="Academy Sports + Outdoors"
            cssRaw={css.raw({
              width: '100%',
            })}
            src="/promo/academy-sports-and-outdoors.webp"
          />
        </Link>

        <Link href="https://dickssportinggoods.com/">
          <Image
            alt="Dicks Sporting Goods"
            cssRaw={css.raw({
              width: '100%',
            })}
            src="/promo/dicks-sporting-goods.webp"
          />
        </Link>
      </div>
    </div>
  );
};

// Export.
export default PanelRoster;
