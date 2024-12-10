import { createSignal } from 'solid-js';
import { signalChatSidebarActive } from '../signalChatSidebarActive';
import { storage } from '~/utils';

// =======
// Signal.
// =======

const key = 'state/signalAppId';

const defaultValue = storage.local.get(key) || 'chat';

const [get, _set] = createSignal<string>(defaultValue);

// =======
// Setter.
// =======

const set = (value: string): void => {
  // New value: YES.
  if (get() !== value) {
    // Update.
    _set(value);

    // Is chat: NO.
    if (value !== 'chat') {
      // Update.
      signalChatSidebarActive.set(false);
    }

    // Cache.
    storage.local.set(key, value);
  }

  // Is chat: YES.
  if (value === 'chat') {
    // Update.
    signalChatSidebarActive.set(!signalChatSidebarActive.get());
  }
};

// =======
// Bundle.
// =======

const signalAppId = { get, set };

// Export.
export { signalAppId };
