import { createSignal } from 'solid-js';
import { storage } from '~/utils';
import { signalSoccerTab } from '../signalSoccerTab';

// =======
// Signal.
// =======

const key = 'state/signalSoccerId';

const defaultValue = storage.local.get(key) || 'fusion-08b';

const [get, _set] = createSignal<string>(defaultValue);

// =======
// Setter.
// =======

const set = (value: string): void => {
  // Update.
  signalSoccerTab.set(0);

  // New value: YES.
  if (get() !== value) {
    // Update.
    _set(value);

    // Cache.
    storage.local.set(key, value);
  }
};

// =======
// Bundle.
// =======

const signalSoccerId = { get, set };

// Export.
export { signalSoccerId };
