import Content from './Content';
import Sidebar from './Sidebar';
import type { Component } from 'solid-js';

// ==========
// Component.
// ==========

const AppChat: Component = () => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <>
      <Sidebar />

      <Content />
    </>
  );
};

// Export.
export default AppChat;
