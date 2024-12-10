import { css } from 'styled-system/css';
import { For, Show } from 'solid-js';
import Image from '~/common/Image';
import Link from '~/common/Link';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

interface IPhotoItem {
  alt: string;
  image: string;
  url: string;
}

interface IPhotoList {
  list: IPhotoItem[];
}

// ==========
// Component.
// ==========

const PhotoList: Component<IPhotoList> = (props) => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <>
      {/*
      =================
      Images exist: NO.
      =================
      */}
      <Show when={!props.list?.length}>
        <p
          class={css({
            color: '{colors.neutral.500}',
          })}
        >
          No images yet.
        </p>
      </Show>

      {/*
      ==================
      Images exist: YES.
      ==================
      */}
      <Show when={props.list?.length}>
        <div
          class={css({
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '{spacing.5}',

            // Media query.
            '@media (max-width: 639.9px)': {
              '& img': {
                width: '100%',
              },
            },

            // Media query.
            sm: {
              display: 'flex',
              flexWrap: 'wrap',
            },
          })}
        >
          <For each={props.list}>
            {({ alt, image, url }) => {
              const img = (
                <Image
                  //
                  alt={alt}
                  src={image}
                />
              );

              // Link exists: NO.
              if (!url) {
                // Expose `<img>` tag.
                return img;
              }

              // Expose `<a>` tag.
              return <Link href={url}>{img}</Link>;
            }}
          </For>
        </div>
      </Show>
    </>
  );
};

// Export.
export default PhotoList;
