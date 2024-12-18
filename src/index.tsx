/* @refresh reload */

import { render } from 'solid-js/web';
import { ErrorBoundary } from 'solid-js';

// ===
// UI.
// ===

import ErrorPage from '~/components/ErrorPage';
import Root from '~/components/Root';

// =======
// Styles.
// =======

import '~/css/index.css';

// ========
// Kickoff.
// ========

// Get app.
const app = () => (
  <ErrorBoundary
    fallback={
      /* v8 ignore start */
      (error) => {
        // Log error.
        console.error(error);

        // Expose UI.
        return <ErrorPage />;
      }
      /* v8 ignore end */
    }
  >
    <Root />
  </ErrorBoundary>
);

// Render.
render(app, document.body);
