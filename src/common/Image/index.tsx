import { css } from 'styled-system/css';
import { IMAGE_FALLBACK } from '~/sharedConstants';
import type { Component, JSX } from 'solid-js';
import type { SystemStyleObject } from 'styled-system/types';

// ======
// Types.
// ======

export interface IImage {
  alt?: string;
  cssRaw?: SystemStyleObject;
  imagePosition?: string;
  src?: string;
}

// ==========
// Component.
// ==========

const Image: Component<IImage> = (props) => {
  // ==========
  // Set later.
  // ==========

  let refImage: HTMLImageElement;

  // ==================
  // Helper: get style.
  // ==================

  const getStyle = (): JSX.CSSProperties | undefined => {
    // Image position exists: YES.
    if (props.imagePosition) {
      // Expose object.
      return {
        'object-position': props.imagePosition,
      };
    }
  };

  // =============
  // Event: error.
  // =============

  const onError = (): void => {
    // Update.
    refImage.src = IMAGE_FALLBACK;
  };

  // ==========
  // Expose UI.
  // ==========

  return (
    <img
      alt={props.alt || ''}
      class={css(
        {
          aspectRatio: '1 / 1',
          backgroundColor: '{colors.neutral.500}',
          borderColor: '{colors.neutral.500}',
          borderStyle: 'solid',
          borderRadius: '{radii.md}',
          borderWidth: '1px',
          objectFit: 'cover',
          width: '256px',
        },
        props.cssRaw
      )}
      loading="lazy"
      onError={onError}
      ref={(el) => (refImage = el)}
      src={props.src || IMAGE_FALLBACK}
      style={getStyle()}
      title={props.alt}
    />
  );
};

// Export.
export default Image;
