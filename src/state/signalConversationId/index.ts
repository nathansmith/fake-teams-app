import { createSignal } from 'solid-js';
import { storage } from '~/utils';
import { signalConversationTab } from '../signalConversationTab';

// =======
// Signal.
// =======

const key = 'state/signalConversationId';

const defaultValue = storage.local.get(key) || 'intro';

const [get, _set] = createSignal<string>(defaultValue);

// =======
// Setter.
// =======

const set = (value: string): void => {
  // Update.
  signalConversationTab.set(0);

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

const signalConversationId = { get, set };

// Export.
export { signalConversationId };
