import { css } from 'styled-system/css';
import { For, Show } from 'solid-js';
import { formatDate } from '~/utils';
import Link from '~/common/Link';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

export interface IFileItem {
  date: number | string;
  name: string;
  type: string;
  url?: string;
  user: string;
}

export interface IFileList {
  list: IFileItem[];
}

// ==========
// Component.
// ==========

const FileList: Component<IFileList> = (props) => {
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

          '&:not(:first-child)': {
            paddingLeft: '{spacing.2.5}',
          },
        },

        '& th': {
          paddingBottom: '{spacing.5}',
          fontWeight: '600',
          textAlign: 'left',
          verticalAlign: 'bottom',
        },

        '& td': {
          borderTopColor: '{colors.neutral.300}',
          borderTopStyle: 'solid',
          borderTopWidth: '1px',
          paddingTop: '{spacing.5}',
          verticalAlign: 'top',
        },

        '& tbody tr:not(:last-child) td': {
          paddingBottom: '{spacing.5}',
        },
      })}
    >
      <thead>
        <tr>
          <th scope="col" aria-label="type" />

          <th scope="col">Name</th>

          <th scope="col">Date shared</th>

          <th
            class={css({
              '@media (max-width: 767.9px)': {
                display: 'none',
              },
            })}
            scope="col"
          >
            Shared by
          </th>
        </tr>
      </thead>

      <tbody>
        {/*
        ================
        Files exist: NO.
        ================
        */}
        <Show when={!props.list?.length}>
          <tr>
            <td>📄</td>

            <td
              class={css({
                color: '{colors.neutral.500}',
              })}
              colspan="3"
            >
              No files yet.
            </td>
          </tr>
        </Show>

        {/*
        =================
        Files exist: YES.
        =================
        */}
        <Show when={props.list?.length}>
          <For each={props.list}>
            {({ date, name, type, url, user }) => (
              <tr>
                <td>
                  <Show when={type === 'file'}>📄</Show>

                  <Show when={type === 'image'}>🖼️</Show>

                  <Show when={type === 'link'}>🌐</Show>
                </td>

                <td>
                  <Show when={url}>
                    <Link href={url}>{name}</Link>
                  </Show>

                  <Show when={!url}>
                    <u>{name}</u>
                  </Show>
                </td>

                <td>
                  {formatDate(date, {
                    withYear: true,
                  })}
                </td>

                <td
                  class={css({
                    '@media (max-width: 767.9px)': {
                      display: 'none',
                    },
                  })}
                >
                  {user}
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
export default FileList;
