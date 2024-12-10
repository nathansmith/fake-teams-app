import { css } from 'styled-system/css';
import { For, Show } from 'solid-js';
import { sortByName } from '~/utils';
import Avatar from '~/common/Avatar';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

export interface IPlayer {
  image: string;
  name: string;
  position: string;
  number: number;
}

export interface IPlayerTable {
  list: IPlayer[];
}

// ==========
// Component.
// ==========

const PlayerList: Component<IPlayerTable> = (props) => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <table
      class={css({
        width: '100%',

        '& th, & td': {
          '&:first-child': {
            width: '1px',
          },

          '&:last-child:not(:only-child)': {
            textAlign: 'right',
          },

          '&:not(:first-child)': {
            paddingLeft: '{spacing.5}',
          },
        },

        '& th': {
          fontWeight: '600',
          paddingBottom: '{spacing.5}',
          textAlign: 'left',
          verticalAlign: 'bottom',
        },

        '& td': {
          borderTopColor: '{colors.neutral.300}',
          borderTopStyle: 'solid',
          borderTopWidth: '1px',
          paddingTop: '{spacing.5}',
          verticalAlign: 'center',
        },

        '& tbody tr:not(:last-child) td': {
          paddingBottom: '{spacing.5}',
        },
      })}
    >
      <thead>
        <tr>
          <th
            //
            colspan="2"
            scope="col"
          >
            Player
          </th>

          <th scope="col">Position</th>

          <th scope="col">Number</th>
        </tr>
      </thead>

      <tbody>
        {/*
        ==================
        Players exist: NO.
        ==================
        */}
        <Show when={!props.list?.length}>
          <tr>
            <td
              class={css({
                color: '{colors.neutral.500}',
              })}
              colspan="4"
            >
              No players yet.
            </td>
          </tr>
        </Show>

        {/*
        ===================
        Players exist: YES.
        ===================
        */}
        <Show when={props.list?.length}>
          <For each={sortByName(props.list)}>
            {({ image, name, number, position }) => (
              <tr>
                <td>
                  <Avatar
                    //
                    alt={name}
                    image={image}
                    size={48}
                  />
                </td>

                <td>{name}</td>

                <td
                  class={css({
                    textTransform: 'capitalize',
                  })}
                >
                  {position}
                </td>

                <td>
                  <span
                    class={css({
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',

                      aspectRatio: '1 / 1',
                      color: '#053e7b',
                      backgroundColor: '#98c0e3',

                      paintOrder: 'stroke fill',
                      WebkitTextStroke: '3px #fff',

                      borderRadius: '50%',
                      fontFamily: '"Arial Black", sans-serif',
                      fontSize: '{fontSizes.2xl}',
                      fontWeight: '900',

                      overflow: 'hidden',
                      width: '48px',
                    })}
                  >
                    {number}
                  </span>
                </td>
              </tr>
            )}
          </For>
        </Show>
      </tbody>
    </table>
  );
};

// Export.
export default PlayerList;
