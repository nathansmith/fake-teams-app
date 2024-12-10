import { css } from 'styled-system/css';
import { formatDate, getMapUrl, textToHtml } from '~/utils';
import { Show } from 'solid-js';
import DateTile from '~/common/DateTile';
import FlexStack from '~/common/FlexStack';
import Image from '~/common/Image';
import Link from '~/common/Link';
import RadioList from '~/common/RadioList';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

export interface IEventSoccer {
  address: string;
  arrivalTime?: number;
  date: string;
  field?: string;
  map?: null | {
    alt: string;
    image: string;
  };
  opponent?: string;
  type: string;
  uniform?: {
    shirt: string;
    shorts: string;
    socks: string;
  };
}

// ==========
// Component.
// ==========

const EventSoccer: Component<IEventSoccer> = (props) => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <div
      class={css({
        display: 'grid',
        gap: '{spacing.5}',
        gridTemplateColumns: 'auto 1fr',

        '@media (max-width: 1023.9px)': {
          '& > a:nth-child(3)': {
            gridColumn: 'span 2',
            order: '-1',
          },
        },

        lg: {
          '&:has(> a:nth-child(3) > img)': {
            gridTemplateColumns: 'auto 1fr auto',
          },
        },
      })}
      data-event-type={props.type}
    >
      <DateTile
        //
        date={props.date}
        variants={{
          mode: props.type === 'game' ? 'alert' : '',
        }}
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
              <th scope="row">RSVP:</th>

              <td>
                <RadioList
                  name={props.date}
                  optionList={[
                    {
                      text: 'Yes',
                      value: 'yes',
                    },
                    {
                      text: 'Maybe',
                      value: 'maybe',
                    },
                    {
                      text: 'No',
                      value: 'no',
                    },
                  ]}
                  value="yes"
                  variants={{ mode: 'inline' }}
                />
              </td>
            </tr>

            <tr>
              <th scope="row">Event:</th>

              <td
                class={css({
                  textTransform: 'uppercase',
                })}
              >
                {props.type}
              </td>
            </tr>

            <Show when={props.opponent}>
              <tr>
                <th scope="row">Opponent:</th>

                <td>{props.opponent}</td>
              </tr>
            </Show>

            <tr>
              <th scope="row">Start time:</th>

              <td>
                {formatDate(props.date, {
                  withWeekday: true,
                  withTime: true,
                  withYear: true,
                })}
              </td>
            </tr>

            <Show when={props.arrivalTime}>
              <tr>
                <th scope="row">Arrival time:</th>

                <td>{props.arrivalTime} minutes early</td>
              </tr>
            </Show>

            <Show when={props.uniform}>
              <tr>
                <th scope="row">Uniform:</th>

                <td>
                  {props.uniform?.shirt} shirt
                  <br />
                  {props.uniform?.shorts} shorts
                  <br />
                  {props.uniform?.socks} socks
                </td>
              </tr>
            </Show>

            <Show when={props.field}>
              <tr>
                <th scope="row">Field:</th>

                <td>{props.field}</td>
              </tr>
            </Show>

            <tr>
              <th scope="row">Address:</th>

              {/* eslint-disable-next-line solid/no-innerhtml */}
              <td innerHTML={textToHtml(props.address)} />
            </tr>

            <tr>
              <th scope="row">Map:</th>

              <td>
                <Link href={getMapUrl(props.address)}>🔗 LINK</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </FlexStack>

      <Show when={props.map}>
        <Link href={props.map?.image}>
          <Image
            alt={props.map?.alt}
            cssRaw={css.raw({
              aspectRatio: '4 / 3',
              width: '100%',

              // Media query.
              lg: {
                width: '480px',
              },
            })}
            src={props.map?.image}
          />
        </Link>
      </Show>
    </div>
  );
};

// Export.
export default EventSoccer;
