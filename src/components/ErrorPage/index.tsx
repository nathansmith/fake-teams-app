import { onMount } from 'solid-js';
import { css } from 'styled-system/css';
import { storage } from '~/utils';
import Button from '~/common/Button';
import FlexStack from '~/common/FlexStack';
import type { Component } from 'solid-js';

// ==========
// Component.
// ==========

const ErrorPage: Component = () => {
  // =============
  // Event: click.
  // =============

  const onClick = (): void => {
    // Refresh.
    globalThis.location.reload();
  };

  // ================
  // Component mount.
  // ================

  onMount((): void => {
    // Hide spinner.
    document.getElementById('LOADING_SPINNER')?.setAttribute('style', 'display:none');

    // Clear storage.
    storage.local.clear();
    storage.session.clear();
  });

  // ==========
  // Expose UI.
  // ==========

  return (
    <main
      class={css({
        color: '#000',
        backgroundColor: '{colors.neutral.100}',
        overflowX: 'hidden',
        overflowY: 'auto',
        scrollbarGutter: 'stable both-edges',

        width: '100%',
        height: '100%',

        position: 'fixed',
        top: '0',
        left: '0',

        // Hide other UI.
        '& ~ *': {
          display: 'none !important',
        },
      })}
    >
      <div
        class={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          padding: '{spacing.5}',
          minHeight: '100%',
        })}
      >
        <FlexStack>
          <p>Sorry, something went wrong.</p>

          <p>Try refreshing the page.</p>

          <p>
            <Button onClick={onClick}>Refresh</Button>
          </p>
        </FlexStack>
      </div>
    </main>
  );
};

// Export.
export default ErrorPage;
