import { css } from 'styled-system/css';
import { getRandomId } from '~/utils';
import { state } from '~/state';
import { IconCalendar20, IconHome20, IconMap20, IconVideoClip20 } from '~/icons';
import Header from '~/common/Header';
import PanelEvents from './PanelEvents';
import PanelHome from './PanelHome';
import PanelLocations from './PanelLocations';
import PanelVideos from './PanelVideos';
import Tab from '~/common/Tab';
import TabList from '~/common/TabList';
import TabPanel from '~/common/TabPanel';
import TabPanelGroup from '~/common/TabPanelGroup';
import type { Component } from 'solid-js';

// ==========
// Component.
// ==========

const AppMinistry: Component = () => {
  // ==========
  // Constants.
  // ==========

  const tabListId = getRandomId();

  // ==================
  // Event: tab change.
  // ==================

  const onChangeTab = (index: number): void => {
    // Update.
    state.signalMinistryTab.set(index);
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
          Ministry App
        </h2>

        <TabList
          //
          activeIndex={state.signalMinistryTab.get()}
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
            icon={<IconCalendar20 />}
            text="Events"
          />

          <Tab
            //
            icon={<IconMap20 />}
            text="Locations"
          />

          <Tab
            //
            icon={<IconVideoClip20 />}
            text="Videos"
          />
        </TabList>
      </Header>

      <TabPanelGroup id={tabListId}>
        <TabPanel isScroll={true}>
          <PanelHome />
        </TabPanel>

        <TabPanel isScroll={true}>
          <PanelEvents />
        </TabPanel>

        <TabPanel isScroll={true}>
          <PanelLocations />
        </TabPanel>

        <TabPanel isScroll={true}>
          <PanelVideos />
        </TabPanel>
      </TabPanelGroup>
    </section>
  );
};

// Export.
export default AppMinistry;
