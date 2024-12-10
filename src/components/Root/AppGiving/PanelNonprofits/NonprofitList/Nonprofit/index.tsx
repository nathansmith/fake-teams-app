import { css } from 'styled-system/css';
import { getDomain } from '~/utils';
import { IconMoney20 } from '~/icons';
import { state } from '~/state';
import Button from '~/common/Button';
import FlexStack from '~/common/FlexStack';
import Image from '~/common/Image';
import Link from '~/common/Link';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

export interface INonprofit {
  description: string;
  id: string;
  image: string;
  name: string;
  url: string;
}

// ==========
// Component.
// ==========

const Nonprofit: Component<INonprofit> = (props) => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <div
      class={css({
        display: 'grid',
        gap: '{spacing.5}',

        // Media query.
        sm: {
          gridTemplateColumns: 'auto 1fr',
        },
      })}
    >
      <Image
        //
        alt={props.name}
        cssRaw={css.raw({
          aspectRatio: '8 / 5',
          width: '100%',

          // Media query.
          sm: {
            width: '300px',
          },
        })}
        imagePosition="0 0"
        src={props.image}
      />

      <FlexStack>
        <h4>{props.name}</h4>

        <p
          class={css({
            textWrap: 'balance',
          })}
        >
          {props.description}
        </p>

        <p
          class={css({
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            alignItems: 'center',
            gap: '{spacing.5}',
          })}
        >
          <Button
            onClick={() => {
              // Update.
              state.signalGivingId.set(props.id);
            }}
          >
            <IconMoney20 />
            Donate
          </Button>

          <Link
            cssRaw={css.raw({
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            })}
            href={props.url}
          >
            🔗 {getDomain(props.url)}
          </Link>
        </p>
      </FlexStack>
    </div>
  );
};

// Export.
export default Nonprofit;
