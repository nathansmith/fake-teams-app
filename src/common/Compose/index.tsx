import { css } from 'styled-system/css';
import { IconAdd20, IconAttach20, IconLaugh20, IconSend20 } from '~/icons';
import { getFormData } from '~/utils';
import ButtonIcon from '~/common/ButtonIcon';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

export interface ICompose {
  onSubmit?: (data: Record<string, string>) => void;
}

// ==========
// Component.
// ==========

const Compose: Component<ICompose> = (props) => {
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
        display: 'flex',
        alignItems: 'center',

        borderColor: '{colors.neutral.500}',
        borderStyle: 'solid',
        borderRadius: '{radii.md}',
        borderWidth: '1px',

        marginLeft: 'auto',
        marginRight: 'auto',
        overflow: 'hidden',
        maxWidth: '950px',
        height: '48px',

        '&:focus-within': {
          outline: '1px solid {colors.indigo.500}',
        },
      })}
      onSubmit={onSubmit}
    >
      <input
        autocomplete="off"
        class={css({
          flex: '1',
          outline: '0',
          paddingLeft: '{spacing.5}',
          paddingRight: '{spacing.2.5}',
          height: '100%',
          resize: 'none',
        })}
        name="compose"
        placeholder="Type a message"
        type="text"
      />

      <div
        class={css({
          display: 'flex',
          gap: '{spacing.2.5}',
          alignItems: 'center',
          paddingRight: '{spacing.5}',
        })}
      >
        <ButtonIcon
          //
          icon={<IconLaugh20 />}
          title="Emoji, GIFs, and Stickers"
        />

        <ButtonIcon
          //
          icon={<IconAttach20 />}
          title="Attach files"
        />

        <ButtonIcon
          //
          icon={<IconAdd20 />}
          title="Actions and apps"
        />

        <span
          class={css({
            backgroundColor: '{colors.neutral.300}',
            width: '1px',
            height: '24px',
          })}
          role="presentation"
        />

        <ButtonIcon
          //
          icon={<IconSend20 />}
          title="Send"
          type="submit"
        />
      </div>
    </form>
  );
};

// Export.
export default Compose;
