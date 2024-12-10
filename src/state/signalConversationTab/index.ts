import { createSignal } from 'solid-js';
import { storage } from '~/utils';

// =======
// Signal.
// =======

const key = 'state/signalConversationTab';

const defaultValue = storage.local.get(key) || 0;

const [get, _set] = createSignal<number>(defaultValue);

// =======
// Setter.
// =======

const set = (value: number): void => {
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

const signalConversationTab = { get, set };

// Export.
export { signalConversationTab };
