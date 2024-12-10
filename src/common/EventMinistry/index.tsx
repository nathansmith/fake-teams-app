import { css } from 'styled-system/css';
import { formatDate } from '~/utils';
import DateTile from '~/common/DateTile';
import Image from '~/common/Image';
import FlexStack from '~/common/FlexStack';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

export interface IEventMinistry {
  date: string;
  description: string;
  image?: string;
  imagePosition?: string;
  title: string;
}

// ==========
// Component.
// ==========

const EventMinistry: Component<IEventMinistry> = (props) => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <div
      class={css({
        display: 'grid',
        gap: '{spacing.5}',
        gridTemplateColumns: 'auto 1fr',
      })}
    >
      <DateTile date={props.date} />

      <FlexStack>
        <Image
          //
          alt={props.title}
          cssRaw={css.raw({
            aspectRatio: '16 / 9',
            width: '100%',
          })}
          imagePosition={props.imagePosition}
          src={props.image}
        />

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
              <th scope="row">Event:</th>

              <td>
                <u>{props.title}</u>
              </td>
            </tr>

            <tr>
              <th scope="row">Date:</th>

              <td>
                {formatDate(props.date, {
                  withWeekday: true,
                  withTime: true,
                  withYear: true,
                })}
              </td>
            </tr>

            <tr>
              <th scope="row">Description:</th>

              <td
                class={css({
                  textWrap: 'balance',
                })}
              >
                {props.description}
              </td>
            </tr>
          </tbody>
        </table>
      </FlexStack>
    </div>
  );
};

// Export.
export default EventMinistry;
