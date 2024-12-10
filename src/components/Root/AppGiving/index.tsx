import { css } from 'styled-system/css';
import { getRandomId } from '~/utils';
import { state } from '~/state';
import { IconClover20, IconHome20, IconMoney20 } from '~/icons';
import { Show } from 'solid-js';
import Header from '~/common/Header';
import PanelDonation from './PanelDonation';
import PanelHistory from './PanelHistory';
import PanelHome from './PanelHome';
import PanelNonprofits from './PanelNonprofits';
import Tab from '~/common/Tab';
import TabList from '~/common/TabList';
import TabPanel from '~/common/TabPanel';
import TabPanelGroup from '~/common/TabPanelGroup';
import type { Component } from 'solid-js';

// ==========
// Component.
// ==========

const AppGiving: Component = () => {
  // ==========
  // Constants.
  // ==========

  const tabListId = getRandomId();

  // ==================
  // Event: tab change.
  // ==================

  const onChangeTab = (index: number): void => {
    // Update.
    state.signalGivingTab.set(index);
  };

  // ==========
  // Expose UI.
  // ==========

  return (
    <section
      class={css({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
      })}
    >
      <Header>
        <h2
          class={css({
            paddingTop: '{spacing.5}',
            paddingBottom: '{spacing.5}',
          })}
        >
          Giving App
        </h2>

        {/*
        ==================
        DONATION VIEW: NO.
        ==================
        */}
        <Show when={!state.signalGivingId.get()}>
          <TabList
            //
            activeIndex={state.signalGivingTab.get()}
            id={tabListId}
            isResponsive={true}
            onChange={onChangeTab}
          >
            <Tab
              //
              icon={<IconHome20 />}
              text="Home"
            />

            <Tab
              //
              icon={<IconClover20 />}
              text="Nonprofits"
            />

            <Tab
              //
              icon={<IconMoney20 />}
              text="History"
            />
          </TabList>
        </Show>
      </Header>

      {/*
      ==================
      DONATION VIEW: NO.
      ==================
      */}
      <Show when={!state.signalGivingId.get()}>
        <TabPanelGroup id={tabListId}>
          <TabPanel isScroll={true}>
            <PanelHome />
          </TabPanel>

          <TabPanel isScroll={true}>
            <PanelNonprofits />
          </TabPanel>

          <TabPanel isScroll={true}>
            <PanelHistory />
          </TabPanel>
        </TabPanelGroup>
      </Show>

      {/*
      ===================
      DONATION VIEW: YES.
      ===================
      */}
      <Show when={state.signalGivingId.get()}>
        <PanelDonation />
      </Show>
    </section>
  );
};

// Export.
export default AppGiving;
