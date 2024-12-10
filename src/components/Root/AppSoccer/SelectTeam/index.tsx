import { css } from 'styled-system/css';
import { getRandomId } from '~/utils';
import { state } from '~/state';
import optionList from './optionList.json';
import Select from '~/common/Select';
import type { Component } from 'solid-js';

// ==========
// Component.
// ==========

const SelectTeam: Component = () => {
  // ==========
  // Constants.
  // ==========

  const selectTeamId = getRandomId();
  const selectTeamTitle = 'Select team';

  // ==============
  // Event: change.
  // ==============

  const onChange = (value: number | string): void => {
    // Update.
    state.signalSoccerId.set(value as string);
  };

  // ==========
  // Expose UI.
  // ==========

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label
      class={css({
        display: 'flex',
        alignItems: 'center',
        gap: '{spacing.1}',
      })}
      for={selectTeamId}
    >
      <span
        //
        aria-label={selectTeamTitle}
        title={selectTeamTitle}
      >
        ➡️
      </span>

      <Select
        cssRaw={css.raw({
          cursor: 'pointer',
          fontSize: '{fontSizes.lg}',
          fontWeight: 'bold',

          paddingTop: '{spacing.5}',
          paddingBottom: '{spacing.5}',
          minHeight: '100%',

          // Media query.
          md: {
            fontSize: '{fontSizes.2xl}',
          },
        })}
        id={selectTeamId}
        onChange={onChange}
        optionList={optionList}
        value={state.signalSoccerId.get()}
      />
    </label>
  );
};

// Export.
export default SelectTeam;
