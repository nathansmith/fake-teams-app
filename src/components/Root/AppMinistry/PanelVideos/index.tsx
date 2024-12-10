import { css } from 'styled-system/css';
import { For } from 'solid-js';
import Video from '~/common/Video';
import type { Component } from 'solid-js';

// =====
// Data.
// =====

import videoList from '~/data/ministry/videoList.json';

// ==========
// Component.
// ==========

const PanelVideos: Component = () => {
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
      <For each={videoList}>
        {({ title, video }) => (
          <Video
            //
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
