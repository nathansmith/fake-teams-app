import { css } from 'styled-system/css';
import Image from '~/common/Image';
import type { Component } from 'solid-js';
import type { SystemStyleObject } from 'styled-system/types';

// ======
// Types.
// ======

export interface IHeroImage {
  alt?: string;
  cssRaw?: SystemStyleObject;
  image: string;
}

// ==========
// Component.
// ==========

const HeroImage: Component<IHeroImage> = (props) => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <Image
      alt={props.alt}
      cssRaw={css.raw({
        aspectRatio: '16 / 9',
        width: '100%',
      })}
      src={props.image}
    />
  );
};

// Export.
export default HeroImage;
