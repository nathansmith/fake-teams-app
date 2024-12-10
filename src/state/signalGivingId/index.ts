import { createSignal } from 'solid-js';
import { storage } from '~/utils';

// =======
// Signal.
// =======

const key = 'state/signalGivingId';

const defaultValue = storage.local.get(key) || '';

const [get, _set] = createSignal<string>(defaultValue);

// =======
// Setter.
// =======

const set = (value: string): void => {
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

const signalGivingId = { get, set };

// Export.
export { signalGivingId };
