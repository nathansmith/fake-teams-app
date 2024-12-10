import { render } from 'solid-js/web';
import videoList from '~/data/ministry/videoList.json';
import PanelVideos from './';

// ====================
// Describe `fileName`.
// ====================

describe('components/Root/AppMinistry/PanelVideos', (): void => {
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

    // Test assertions.
    expect(iframeList).toHaveLength(videoList.length);
  });
});
