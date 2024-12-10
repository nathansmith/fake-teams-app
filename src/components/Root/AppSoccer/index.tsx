import { css } from 'styled-system/css';
import { getRandomId } from '~/utils';
import { state } from '~/state';
import {
  IconCalendar20,
  IconHatGraduation,
  IconHome20,
  IconPeople20,
  IconVideoClip20,
} from '~/icons';
import Header from '~/common/Header';
import PanelHome from './PanelHome';
import PanelRecruiting from './PanelRecruiting';
import PanelRoster from './PanelRoster';
import PanelSchedule from './PanelSchedule';
import PanelVideos from './PanelVideos';
import SelectTeam from './SelectTeam';
import Tab from '~/common/Tab';
import TabList from '~/common/TabList';
import TabPanel from '~/common/TabPanel';
import TabPanelGroup from '~/common/TabPanelGroup';
import type { Component } from 'solid-js';

// ==========
// Component.
// ==========

const AppSoccer: Component = () => {
  // ==========
  // Constants.
  // ==========

  const tabListId = getRandomId();

  // ==================
  // Event: tab change.
  // ==================

  const onChangeTab = (index: number): void => {
    // Update.
    state.signalSoccerTab.set(index);
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
        <SelectTeam />

        <TabList
          //
          activeIndex={state.signalSoccerTab.get()}
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
            text="Schedule"
          />

          <Tab
            //
            icon={<IconVideoClip20 />}
            text="Videos"
          />

          <Tab
            //
            icon={<IconPeople20 />}
            text="Roster"
          />

          <Tab
            //
            icon={<IconHatGraduation />}
            text="Recruiting"
          />
        </TabList>
      </Header>

      <TabPanelGroup id={tabListId}>
        <TabPanel isScroll={true}>
          <PanelHome />
        </TabPanel>

        <TabPanel isScroll={true}>
          <PanelSchedule />
        </TabPanel>

        <TabPanel isScroll={true}>
          <PanelVideos />
        </TabPanel>

        <TabPanel isScroll={true}>
          <PanelRoster />
        </TabPanel>

        <TabPanel isScroll={true}>
          <PanelRecruiting />
        </TabPanel>
      </TabPanelGroup>
    </section>
  );
};

// Export.
export default AppSoccer;
