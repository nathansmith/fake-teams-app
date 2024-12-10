import { createEffect, lazy, Show, Suspense } from 'solid-js';
import { state } from '~/state';
import Layout from '~/common/Layout';
import Loading from '~/common/Loading';
import type { Component } from 'solid-js';

// Lazy load.
const AppChat = lazy(() => import('./AppChat'));
const AppGiving = lazy(() => import('./AppGiving'));
const AppMinistry = lazy(() => import('./AppMinistry'));
const AppSoccer = lazy(() => import('./AppSoccer'));

// ==========
// Component.
// ==========

const Root: Component = () => {
  // ===========
  // Reactivity.
  // ===========

  createEffect((): void => {
    // Hide spinner.
    document.getElementById('LOADING_SPINNER')?.setAttribute('style', 'display:none');
  });

  // ==========
  // Expose UI.
  // ==========

  return (
    <Layout>
      <Show when={state.signalAppId.get() === 'chat'}>
        <Suspense fallback={<Loading />}>
          <AppChat />
        </Suspense>
      </Show>

      <Show when={state.signalAppId.get() === 'giving'}>
        <Suspense fallback={<Loading />}>
          <AppGiving />
        </Suspense>
      </Show>

      <Show when={state.signalAppId.get() === 'ministry'}>
        <Suspense fallback={<Loading />}>
          <AppMinistry />
        </Suspense>
      </Show>

      <Show when={state.signalAppId.get() === 'soccer'}>
        <Suspense fallback={<Loading />}>
          <AppSoccer />
        </Suspense>
      </Show>
    </Layout>
  );
};

// Export.
export default Root;
