import { createSignal } from 'solid-js';

// =======
// Signal.
// =======

const defaultValue = false;

const [get, set] = createSignal<boolean>(defaultValue);

// =======
// Bundle.
// =======

const signalChatSidebarActive = { get, set };

// Export.
export { signalChatSidebarActive };
