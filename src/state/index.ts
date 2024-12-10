import { signalAppId } from './signalAppId';
import { signalChatSidebarActive } from './signalChatSidebarActive';
import { signalConversationId } from './signalConversationId';
import { signalConversationTab } from './signalConversationTab';
import { signalGivingId } from './signalGivingId';
import { signalGivingTab } from './signalGivingTab';
import { signalMinistryTab } from './signalMinistryTab';
import { signalSoccerId } from './signalSoccerId';
import { signalSoccerTab } from './signalSoccerTab';

// =======
// Bundle.
// =======

const state = {
  signalAppId,
  signalChatSidebarActive,
  signalConversationId,
  signalConversationTab,
  signalGivingId,
  signalGivingTab,
  signalMinistryTab,
  signalSoccerId,
  signalSoccerTab,
};

// Export.
export { state };
