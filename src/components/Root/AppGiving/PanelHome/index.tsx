import { css } from 'styled-system/css';
import { For } from 'solid-js';
import { IconMoney20 } from '~/icons';
import { state } from '~/state';
import Button from '~/common/Button';
import ButtonLink from '~/common/ButtonLink';
import FlexStack from '~/common/FlexStack';
import Image from '~/common/Image';
import Link from '~/common/Link';
import ListUnordered from '~/common/ListUnordered';
import SpaceBetween from '~/common/SpaceBetween';
import type { Component } from 'solid-js';

// =====
// Data.
// =====

import nonprofitList from '~/data/giving/nonprofitList.json';

// ==========
// Component.
// ==========

const PanelHome: Component = () => {
  // ==========
  // Constants.
  // ==========

  const nonprofitListFeatured = nonprofitList.filter(({ featured }) => featured);

  // ==========
  // Expose UI.
  // ==========

  return (
    <FlexStack
      cssRaw={css.raw({
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1000px',
      })}
    >
      <h3>Impactful opportunity awaits</h3>

      <Image
        alt=""
        cssRaw={css.raw({
          aspectRatio: '4 / 1',
          width: '100%',
        })}
        imagePosition="0 0"
        src="/giving/webp/giving-header.webp"
      />

      <p>
        ❤️ <b>Affecting change</b>
      </p>

      <p
        class={css({
          textWrap: 'balance',
        })}
      >
        So far this year, you have given to charities and nonprofits that have positively affected
        the lives of those in need. Thanks to the generosity of people like you, transformative
        change is happening: throughout the region, country, and on a broader global scale. The only
        way we can all make a difference collectively is when we believe that individually one
        person can change the world.
      </p>

      <p>
        🙏 <b>Your top causes:</b>
      </p>

      <ListUnordered>
        <li>
          <Link href="https://wvi.org">World Vision International</Link>
        </li>

        <li>
          <Link href="https://habitat.org">Habitat for Humanity</Link>
        </li>

        <li>
          <Link href="https://spca.org">SPCA of Texas</Link>
        </li>
      </ListUnordered>

      <hr />

      <SpaceBetween>
        <h3>Featured causes</h3>

        <ButtonLink onClick={() => state.signalGivingTab.set(1)}>View more</ButtonLink>
      </SpaceBetween>

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
        <For each={nonprofitListFeatured}>
          {({ id, image, name, url }) => (
            <figure
              class={css({
                display: 'flex',
                flexDirection: 'column',
                gap: '{spacing.5}',
              })}
            >
              <Image
                alt={name}
                cssRaw={css.raw({
                  aspectRatio: '8 / 5',
                  width: '100%',
                })}
                imagePosition="0 0"
                src={image}
              />

              <figcaption
                class={css({
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  alignItems: 'center',
                  gap: '{spacing.5}',
                })}
              >
                <Button
                  onClick={() => {
                    // Update.
                    state.signalGivingId.set(id);
                  }}
                >
                  <IconMoney20 />
                  Donate
                </Button>

                <Link
                  cssRaw={css.raw({
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  })}
                  href={url}
                  title={name}
                >
                  {name}
                </Link>
              </figcaption>
            </figure>
          )}
        </For>
      </div>
    </FlexStack>
  );
};

// Export.
export default PanelHome;
