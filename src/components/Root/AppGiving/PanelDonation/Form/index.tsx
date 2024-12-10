import { css } from 'styled-system/css';
import { createSignal, Show } from 'solid-js';
import { getFormData } from '~/utils';
import { IconMoney20 } from '~/icons';
import { state } from '~/state';
import Button from '~/common/Button';
import ButtonLink from '~/common/ButtonLink';
import Fieldset from '~/common/Fieldset';
import FlexStack from '~/common/FlexStack';
import GridSplit from '~/common/GridSplit';
import Input from '~/common/Input';
import Notice from '~/common/Notice';
import RadioList from '~/common/RadioList';
import type { Component } from 'solid-js';

// ======
// Types.
// ======

export interface IForm {
  onSubmit?: (data: Record<string, string>) => void;
}

// ==========
// Component.
// ==========

const Form: Component<IForm> = (props) => {
  // ============
  // Local state.
  // ============

  const [showConfirm, setShowConfirm] = createSignal<boolean>(false);

  // ==============
  // Event: submit.
  // ==============

  const onSubmit = (event: Event): void => {
    // Prevent default.
    event.preventDefault();

    // Update.
    setShowConfirm(true);

    // Callback exists: YES.
    if (typeof props.onSubmit === 'function') {
      // Get form.
      const form = event.target as HTMLFormElement;

      // Get data.
      const data = getFormData(form);

      // Fire callback.
      props.onSubmit(data);
    }
  };

  // ==========
  // Expose UI.
  // ==========

  return (
    <>
      {/*
      ==================
      Show confirm: YES.
      ==================
      */}
      <Show when={showConfirm()}>
        <Notice>
          <h4>🎉 Thank you!</h4>

          <p>Your donation is being processed.</p>

          <p>You should receive an email confirmation soon.</p>

          <p>
            <ButtonLink
              onClick={(): void => {
                state.signalGivingId.set('');
              }}
            >
              ⬅️ Back to Giving App
            </ButtonLink>
          </p>
        </Notice>
      </Show>

      {/*
      =================
      Show confirm: NO.
      =================
      */}
      <Show when={!showConfirm()}>
        <form onSubmit={onSubmit}>
          <FlexStack>
            <Fieldset legend="Donation info">
              <GridSplit>
                <Input
                  //
                  label="Amount"
                  name="giving_amount"
                  min={0}
                  required={true}
                  type="number"
                />

                <div
                  class={css({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '{spacing.4}',
                  })}
                >
                  <span
                    class={css({
                      fontWeight: '600',
                    })}
                  >
                    Frequency
                  </span>

                  <RadioList
                    name="giving_frequency"
                    optionList={[
                      {
                        text: 'One-time',
                        value: 'FREQUENCY_ONE_TIME',
                      },
                      {
                        text: 'Monthly',
                        value: 'FREQUENCY_MONTHLY',
                      },
                    ]}
                    value="FREQUENCY_ONE_TIME"
                    variants={{ mode: 'inline' }}
                  />
                </div>
              </GridSplit>
            </Fieldset>

            <Fieldset legend="Personal info">
              <GridSplit>
                <Input
                  //
                  label="First name"
                  name="first_name"
                  required={true}
                />

                <Input
                  //
                  label="Last name"
                  name="last_name"
                  required={true}
                />

                <Input
                  //
                  label="Email address"
                  name="email"
                  required={true}
                  type="email"
                />

                <Input
                  //
                  label="Phone number"
                  name="phone"
                  required={true}
                  type="tel"
                />
              </GridSplit>
            </Fieldset>

            <Fieldset legend="Billing info">
              <GridSplit>
                <Input
                  //
                  label="Address"
                  name="address_line_1"
                  required={true}
                />

                <Input
                  //
                  label="Address line 2"
                  name="address_line_2"
                />

                <Input
                  //
                  label="City"
                  name="city"
                  required={true}
                />

                <Input
                  //
                  label="State"
                  name="state"
                  required={true}
                />

                <Input
                  //
                  label="Postal code"
                  name="postal_code"
                  required={true}
                />

                <Input
                  //
                  label="Country"
                  name="country"
                  required={true}
                />
              </GridSplit>
            </Fieldset>

            <Fieldset legend="Card info">
              <GridSplit>
                <Input
                  //
                  label="Card number"
                  name="card_number"
                  required={true}
                  type="number"
                />

                <div
                  class={css({
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '{spacing.5}',
                  })}
                >
                  <Input
                    //
                    label="Month"
                    name="card_month"
                    required={true}
                    type="number"
                  />

                  <Input
                    //
                    label="Year"
                    name="card_year"
                    required={true}
                    type="number"
                  />

                  <Input
                    //
                    label="CVV"
                    name="card_cvv"
                    required={true}
                    type="number"
                  />
                </div>
              </GridSplit>
            </Fieldset>

            <Button
              //
              cssRaw={css.raw({
                alignSelf: 'start',
              })}
              type="submit"
              variants={{
                mode: 'primary',
                size: 'large',
              }}
            >
              <IconMoney20 />
              Submit donation
            </Button>
          </FlexStack>
        </form>
      </Show>
    </>
  );
};

// Export.
export default Form;
