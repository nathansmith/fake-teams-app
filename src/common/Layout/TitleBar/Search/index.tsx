/*
eslint

{
  'jsx-a11y/label-has-associated-control': 'off',
}
*/

import { css } from 'styled-system/css';
import { getFormData, getRandomId } from '~/utils';
import { IconSearch20 } from '~/icons';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

export interface ISearch {
  onSubmit?: (data: Record<string, string>) => void;
}

// ==========
// Component.
// ==========

const Search: Component<ISearch> = (props) => {
  // ==========
  // Constants.
  // ==========

  const inputId = getRandomId();

  // ==============
  // Event: submit.
  // ==============

  const onSubmit = (event: Event): void => {
    // Prevent default.
    event.preventDefault();

    // Callback exists: YES.
    if (typeof props.onSubmit === 'function') {
      // Get form.
      const form = event.target as HTMLFormElement;

      // Get data.
      const data = getFormData(form);

      // Fire callback.
      props.onSubmit(data);
    }
  };

  // ==========
  // Expose UI.
  // ==========

  return (
    <form
      class={css({
        flex: '1',
        display: 'flex',

        color: '#000',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderColor: '{colors.neutral.300}',
        borderStyle: 'solid',
        borderRadius: '{radii.md}',
        borderWidth: '1px',

        overflow: 'hidden',
        marginRight: 'auto',
        height: '32px',

        '&:hover, &:focus-within': {
          backgroundColor: '#fff',
        },

        '&:focus-within': {
          outline: '1px solid {colors.indigo.500}',
        },
      })}
      onSubmit={onSubmit}
    >
      <label
        aria-label="Search"
        class={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
        })}
        for={inputId}
      >
        <IconSearch20 />
      </label>

      <input
        autocomplete="off"
        class={css({
          flex: '1',
          width: '100%',
          outline: '0',
        })}
        id={inputId}
        name="search"
        placeholder="Search"
        type="text"
      />
    </form>
  );
};

// Export
export default Search;
