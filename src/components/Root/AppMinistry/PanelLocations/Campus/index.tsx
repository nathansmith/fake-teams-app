import { css } from 'styled-system/css';
import { Show } from 'solid-js';
import { getMapUrl, textToHtml } from '~/utils';
import FlexStack from '~/common/FlexStack';
import Image from '~/common/Image';
import Link from '~/common/Link';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

export interface ICampus {
  address: string;
  image: string;
  name: string;
  times: string;
  url?: string;
}

// ==========
// Component.
// ==========

const Campus: Component<ICampus> = (props) => {
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
          aspectRatio: '16 / 9',
          width: '100%',

          // Media query.
          sm: {
            width: '300px',
          },
        })}
        src={props.image}
      />

      <FlexStack>
        <table
          class={css({
            alignSelf: 'start',

            '& tr:not(:first-child) > *': {
              paddingTop: '{spacing.5}',
            },

            '& th': {
              fontWeight: '600',
              paddingRight: '{spacing.5}',
              textAlign: 'right',
              verticalAlign: 'top',
              whiteSpace: 'nowrap',
            },
          })}
        >
          <tbody>
            <tr>
              <th scope="col">Campus:</th>

              <td
                class={css({
                  textTransform: 'uppercase',
                })}
              >
                {props.name}
              </td>
            </tr>

            <tr>
              <th scope="col">When:</th>

              {/* eslint-disable-next-line solid/no-innerhtml */}
              <td innerHTML={textToHtml(props.times)} />
            </tr>

            <tr>
              <th scope="col">Where:</th>

              {/* eslint-disable-next-line solid/no-innerhtml */}
              <td innerHTML={textToHtml(props.address)} />
            </tr>

            {/*
            ===================
            Address exists: NO.
            ===================
            */}
            <Show when={props.address}>
              <tr>
                <th scope="col">Map:</th>

                <td>
                  <Link href={getMapUrl(props.address)}>🔗 LINK</Link>
                </td>
              </tr>
            </Show>

            {/*
            ================
            URL exists: YES.
            ================
            */}
            <Show when={props.url}>
              <tr>
                <th scope="col">URL:</th>

                <td>
                  <Link href={props.url}>🔗 LINK</Link>
                </td>
              </tr>
            </Show>
          </tbody>
        </table>
      </FlexStack>
    </div>
  );
};

// Export.
export default Campus;
