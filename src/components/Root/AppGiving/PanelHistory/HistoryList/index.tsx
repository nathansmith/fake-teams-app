import { css } from 'styled-system/css';
import { For, Show } from 'solid-js';
import { formatDate, formatMoney } from '~/utils';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

export interface IHistoryItem {
  amount: number;
  date: number | string;
  name: string;
}

export interface IHistoryList {
  list: IHistoryItem[];
}

// ==========
// Component.
// ==========

const HistoryList: Component<IHistoryList> = (props) => {
  // ==================
  // Helper: get total.
  // ==================

  const getTotal = (): string => {
    // Set later.
    let total = 0;

    // Loop through.
    for (const { amount } of props.list) {
      total += amount;
    }

    // Expose string.
    return formatMoney(total);
  };

  // ==========
  // Expose UI.
  // ==========

  return (
    <div
      class={css({
        borderColor: '{colors.neutral.300}',
        borderRadius: '{radii.md}',
        borderStyle: 'solid',
        borderWidth: '1px',
        overflow: 'hidden',
      })}
    >
      <table
        class={css({
          width: '100%',

          '& th, & td': {
            paddingTop: '{spacing.5}',
            paddingRight: '{spacing.5}',
            paddingBottom: '{spacing.5}',

            '&:first-child': {
              paddingLeft: '{spacing.5}',
            },

            '&:last-child:not(:only-child)': {
              textAlign: 'right',
            },
          },

          '& th': {
            backgroundColor: '{colors.neutral.50}',
            fontWeight: '600',
            textAlign: 'left',
            verticalAlign: 'bottom',
          },

          '& td': {
            borderTopColor: '{colors.neutral.300}',
            borderTopStyle: 'solid',
            borderTopWidth: '1px',
            verticalAlign: 'top',
          },

          '& tfoot td': {
            backgroundColor: '{colors.yellow.50}',
          },
        })}
      >
        <thead>
          <tr>
            <th scope="col">Date</th>

            <th scope="col">Name</th>

            <th scope="col">Amount</th>
          </tr>
        </thead>

        <tbody>
          {/*
          ===================
          History exists: NO.
          ===================
          */}
          <Show when={!props.list?.length}>
            <tr>
              <td
                class={css({
                  color: '{colors.neutral.500}',
                })}
                colspan="3"
              >
                No giving history yet.
              </td>
            </tr>
          </Show>

          {/*
          ====================
          History exists: YES.
          ====================
          */}
          <Show when={props.list?.length}>
            <For each={props.list}>
              {({ amount, date, name }) => (
                <tr>
                  <td>
                    {formatDate(date, {
                      month: 'short',
                      withYear: true,
                    })}
                  </td>

                  <td>{name}</td>

                  <td>{formatMoney(amount)}</td>
                </tr>
              )}
            </For>
          </Show>
        </tbody>

        <Show when={props.list?.length}>
          <tfoot>
            <tr>
              <td>
                <u>Download CSV</u>
              </td>

              <td>
                <b>Total:</b>
              </td>

              <td>
                <b>{getTotal()}</b>
              </td>
            </tr>
          </tfoot>
        </Show>
      </table>
    </div>
  );
};

// Export.
export default HistoryList;
