import { css } from 'styled-system/css';
import { Show } from 'solid-js';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

export interface IVideo {
  startTime?: number;
  mute?: boolean;
  title: string;
  video?: string;
}

// ==========
// Component.
// ==========

const Video: Component<IVideo> = (props) => {
  // ==========
  // Constants.
  // ==========

  const allowList = [
    'accelerometer',
    'autoplay',
    'clipboard-write',
    'encrypted-media',
    'gyroscope',
    'picture-in-picture',
    'web-share',
  ].join(';');

  const queryOptions = {
    autoplay: 0,
    cc_load_policy: 0,
    controls: 1,
    loop: 0,
    rel: 0,
  };

  // =========================
  // Helper: get query params.
  // =========================

  const getQueryParams = (): string => {
    // Build object.
    const newQueryOptions = {
      ...queryOptions,
      mute: props.mute ? 1 : 0,
      start: props.startTime || 0,
    };

    // Expose string.
    return Object.entries(newQueryOptions)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
  };

  // ==========
  // Expose UI.
  // ==========

  return (
    <>
      {/*
      ==================
      Video exists: YES.
      ==================
      */}
      <Show when={props.video}>
        <iframe
          /*
          =====
          NOTE:
          =====

            Specifying `allowfullscreen` must be without a value.

            Setting it to `true` causes the attribute not to work.
          */
          allowfullscreen
          allow={allowList}
          class={css({
            aspectRatio: '16 / 9',
            backgroundColor: '#666',
            borderRadius: '{radii.md}',
            width: '100%',
          })}
          referrerpolicy="strict-origin-when-cross-origin"
          src={`https://www.youtube.com/embed/${props.video}?${getQueryParams()}`}
          title={props.title}
        />
      </Show>

      {/*
      =================
      Video exists: NO.
      =================
      */}
      <Show when={!props.video}>
        <figure
          class={css({
            aspectRatio: '16 / 9',

            display: 'flex',
            flexDirection: 'column',

            color: '#fff',
            backgroundColor: '#333',
            borderRadius: '{radii.md}',
            overflow: 'hidden',
          })}
        >
          <figcaption
            class={css({
              fontWeight: '600',
              paddingTop: '{spacing.2}',
              paddingLeft: '{spacing.4}',
              paddingRight: '{spacing.4}',
              paddingBottom: '{spacing.2}',

              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            })}
            title={props.title}
          >
            {props.title}
          </figcaption>

          <div
            class={css({
              flex: '1',

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              backgroundColor: '#666',
              fontFamily: '"Arial Narrow", sans-serif',
              fontSize: '{fontSizes.2xl}',
              fontWeight: 'bold',
              textShadow: '{shadows.text}',
              textTransform: 'uppercase',
              overflow: 'hidden',
            })}
          >
            No video yet
          </div>
        </figure>
      </Show>
    </>
  );
};

// Export.
export default Video;
