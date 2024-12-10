import { css, cva } from 'styled-system/css';
import { createEffect, createSignal, Show } from 'solid-js';
import { IMAGE_FALLBACK, STATUS_LIST } from '~/sharedConstants';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

export interface IAvatar {
  alt?: string;
  image?: string;
  size?: number;
  status?: string;
}

// ==========
// Component.
// ==========

const Avatar: Component<IAvatar> = (props) => {
  // ==========
  // Constants.
  // ==========

  const avatarSizeDefault = 32;

  // ==========
  // Set later.
  // ==========

  let refImage: HTMLImageElement;

  // ============
  // Local state.
  // ============

  const [status, setStatus] = createSignal<string | undefined>();

  // ===========
  // Reactivity.
  // ===========

  createEffect((): void => {
    // Update.
    setStatus(props.status);
  });

  // =========================
  // Helper: get status title.
  // =========================

  const getStatusTitle = (): string => {
    // Get value.
    const value = status() || '';

    // Expose string.
    return [
      // First letter.
      value.charAt(0).toUpperCase(),

      // Everything else.
      value.slice(1),
    ].join('');
  };

  // =============
  // Event: error.
  // =============

  const onError = (): void => {
    // Update.
    refImage.src = IMAGE_FALLBACK;
  };

  // ===========================
  // Variants: status indicator.
  // ===========================

  const cvaStatusIndicator = cva({
    base: {
      borderColor: 'transparent',
      borderRadius: '50%',
      borderStyle: 'solid',
      borderWidth: '1px',
      boxShadow: '#fff 0 0 0 2px',

      marginTop: '35%',
      marginLeft: '35%',
      width: '11px',
      height: '11px',

      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      top: '50%',
      left: '50%',
    },
    variants: {
      status: {
        away: {
          backgroundColor: '{colors.yellow.500}',

          '&:before, &:after': {
            content: '""',
            backgroundColor: '#fff',
            height: '1.5px',

            transformOrigin: 'left center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            right: '1px',
          },

          '&:before': {
            transform: 'translateY(-50%) rotate(30deg)',
          },

          '&:after': {
            transform: 'translateY(-50%) rotate(-90deg)',
          },
        },
        busy: {
          backgroundColor: '{colors.red.500}',

          '&:before': {
            content: '""',
            backgroundColor: '#fff',
            height: '1.5px',

            transform: 'translateY(-50%)',
            position: 'absolute',
            top: '50%',
            left: '1px',
            right: '1px',
          },
        },
        offline: {
          backgroundColor: '#fff',
          borderColor: '{colors.neutral.500}',

          '&:before, &:after': {
            content: '""',
            backgroundColor: '{colors.neutral.500}',
            height: '1px',

            position: 'absolute',
            top: '50%',
            left: '1.5px',
            right: '1.5px',
          },

          '&:before': {
            transform: 'translateY(-50%) rotate(45deg)',
          },

          '&:after': {
            transform: 'translateY(-50%) rotate(-45deg)',
          },
        },
        online: {
          backgroundColor: '{colors.green.600}',

          '&:before, &:after': {
            content: '""',
            backgroundColor: '#fff',
            height: '1.5px',

            transformOrigin: 'left center',
            position: 'absolute',
            top: 'calc(50% + 1.5px)',
            left: '50%',
          },

          '&:before': {
            transform: 'rotate(-60deg)',
            width: '60%',
          },

          '&:after': {
            transform: 'rotate(-140deg)',
            width: '40%',
          },
        },
      },
    },
  });

  // ==========
  // Expose UI.
  // ==========

  return (
    <figure
      class={css({
        aspectRatio: '1 / 1',
        position: 'relative',
        width: 'var(--avatar-size)',
        minWidth: 'var(--avatar-size)',
      })}
      style={{
        '--avatar-size': `${props.size || avatarSizeDefault}px`,
      }}
    >
      <img
        alt={props.alt || ''}
        class={css({
          backgroundColor: '{colors.neutral.500}',
          borderRadius: '50%',
          objectFit: 'cover',

          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
        })}
        loading="lazy"
        onError={onError}
        ref={(el) => (refImage = el)}
        src={props.image || IMAGE_FALLBACK}
        title={props.alt}
      />

      <Show when={status()}>
        <span
          aria-label={getStatusTitle()}
          class={cvaStatusIndicator({
            status: status() as (typeof STATUS_LIST)[number],
          })}
          role="img"
          title={getStatusTitle()}
        />
      </Show>
    </figure>
  );
};

// Export.
export default Avatar;
