import { css } from 'styled-system/css';
import { createSignal, createEffect } from 'solid-js';
import { IconChevronLeft20 } from '~/icons';
import { state } from '~/state';
import ButtonIcon from '~/common/ButtonIcon';
import FlexStack from '~/common/FlexStack';
import Form from './Form';
import Link from '~/common/Link';
import ScrollVertical from '~/common/ScrollVertical';
import type { Component } from 'solid-js';
import type { INonprofit } from '../PanelNonprofits/NonprofitList/Nonprofit';

// =====
// Data.
// =====

import nonprofitList from '~/data/giving/nonprofitList.json';

// ==========
// Component.
// ==========

const PanelDonation: Component = () => {
  // ============
  // Local state.
  // ============

  const [activeObj, setActiveObj] = createSignal<INonprofit | undefined>();

  // ===========
  // Reactivity.
  // ===========

  createEffect((): void => {
    // Get nonprofit.
    const obj = nonprofitList.find(({ id }) => id === state.signalGivingId.get());

    // Update.
    setActiveObj(obj);
  });

  // ==========
  // Expose UI.
  // ==========

  return (
    <ScrollVertical>
      <FlexStack
        cssRaw={css.raw({
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1000px',
        })}
      >
        <div
          class={css({
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            alignItems: 'center',
            gap: '{spacing.5}',
          })}
        >
          <ButtonIcon
            cssRaw={css.raw({
              borderColor: '{colors.neutral.500}',
            })}
            icon={<IconChevronLeft20 />}
            onClick={() => state.signalGivingId.set('')}
            title="Back"
            variants={{
              mode: 'chunky',
            }}
          />

          <h3>
            Donating to:
            <br />
            <small
              class={css({
                fontSize: 'inherit',
                fontWeight: 'normal',
              })}
            >
              <Link
                //
                href={activeObj()?.url}
                title={activeObj()?.url}
              >
                {activeObj()?.name}
              </Link>
            </small>
          </h3>
        </div>

        <Form />
      </FlexStack>
    </ScrollVertical>
  );
};

// Export.
export default PanelDonation;
