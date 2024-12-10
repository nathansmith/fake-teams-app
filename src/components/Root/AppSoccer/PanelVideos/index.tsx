import { css } from 'styled-system/css';
import { createEffect, createSignal, For } from 'solid-js';
import { state } from '~/state';
import Video from '~/common/Video';
import type { Component } from 'solid-js';
import type { IVideo } from '~/common/Video';

// =====
// Data.
// =====

import videoListFusion08b from '~/data/fusion-08b/videoList.json';
import videoListFusion10b from '~/data/fusion-10b/videoList.json';

// ==========
// Component.
// ==========

const PanelVideos: Component = () => {
  // ==========
  // Constants.
  // ==========

  const videoObj: Record<string, IVideo[]> = {
    'fusion-08b': videoListFusion08b,
    'fusion-10b': videoListFusion10b,
  };

  // ============
  // Local state.
  // ============

  const [videoList, setVideoList] = createSignal<IVideo[]>(videoObj[state.signalSoccerId.get()]);

  // ===========
  // Reactivity.
  // ===========

  createEffect((): void => {
    // Update.
    setVideoList(videoObj[state.signalSoccerId.get()]);
  });

  // ==========
  // Expose UI.
  // ==========

  return (
    <div
      class={css({
        display: 'grid',
        gap: '{spacing.5}',

        // Media query.
        md: {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },

        // Media query.
        lg: {
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
      })}
    >
      <For each={videoList()}>
        {({ startTime, title, video }) => (
          <Video
            //
            mute={true}
            startTime={startTime}
            title={title}
            video={video}
          />
        )}
      </For>
    </div>
  );
};

// Export.
export default PanelVideos;
