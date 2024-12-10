import { cva } from 'styled-system/css';
import { For } from 'solid-js';
import Radio from './Radio';
import type { Component } from 'solid-js';
import type { IRadio } from './Radio';

// ======
// Types.
// ======

export interface IRadioList {
  name: string;
  onChange?: (value: number | string) => void;
  optionList: Pick<IRadio, 'text' | 'value'>[];
  value?: number | string;
  variants?: Record<string, string>;
}

// ==========
// Component.
// ==========

const RadioList: Component<IRadioList> = (props) => {
  // =====================
  // Variants: radio list.
  // =====================

  const cvaRadioList = cva({
    base: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      gap: '{spacing.5}',
      listStyle: 'none',
    },
    variants: {
      mode: {
        inline: {
          // Media query.
          sm: {
            flexDirection: 'row',
          },
        },
      },
    },
  });

  // ==========
  // Expose UI.
  // ==========

  return (
    <ul class={cvaRadioList(props.variants)}>
      <For each={props.optionList}>
        {({ text, value }) => (
          <li>
            <Radio
              checked={value === props.value}
              name={props.name}
              onChange={props.onChange}
              text={text}
              value={value}
            />
          </li>
        )}
      </For>
    </ul>
  );
};

// Export.
export default RadioList;
