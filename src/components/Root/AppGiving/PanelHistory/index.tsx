import { css } from 'styled-system/css';
import FlexStack from '~/common/FlexStack';
import HistoryList from './HistoryList';
import Link from '~/common/Link';
import type { Component } from 'solid-js';

// =====
// Data.
// =====

import historyList2023 from '~/data/giving/historyList2023.json';
import historyList2024 from '~/data/giving/historyList2024.json';

// ==========
// Component.
// ==========

const PanelHistory: Component = () => {
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
      <h3>Employer matching</h3>

      <p>
        ➡️ <b>Did you know?</b>
      </p>

      <p
        class={css({
          textWrap: 'balance',
        })}
      >
        Some employers have philanthropic "
        <Link href="https://en.wikipedia.org/wiki/Matching_funds">matching funds</Link>" programs,
        where they will donate up to a certain amount for every dollar given to charity by
        employees. This can be a great way to double your impact. You should ask at work if they
        offer this perk, and how you can take advantage of it.
      </p>

      <hr />

      <h3>2024 giving history</h3>

      <HistoryList list={historyList2024} />

      <h3>2023 giving history</h3>

      <HistoryList list={historyList2023} />
    </FlexStack>
  );
};

// Export.
export default PanelHistory;
