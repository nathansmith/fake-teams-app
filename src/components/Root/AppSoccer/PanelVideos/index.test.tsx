import { render } from 'solid-js/web';
import videoList from '~/data/fusion-08b/videoList.json';
import PanelVideos from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root/AppSoccer/PanelVideos', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy props.
    const props = {};

    // Component.
    const component = () => <PanelVideos {...props} />;

    // Render.
    render(component, document.body);

    // Get elements.
    const parent = document.querySelector('div') as HTMLElement;
    const iframeList = parent.querySelectorAll('iframe');

    // Filter list.
    const videoListFilter = videoList.filter(({ video }) => video);

    // Test assertions.
    expect(iframeList).toHaveLength(videoListFilter.length);
  });
});
