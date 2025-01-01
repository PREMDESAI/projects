// App.tsx
import React from 'react';
import Sidebar from './components/Sidebar';
import { toggleSidebar } from './utils';

const App: React.FC = () => {
  const handleOpenSidebar = () => {
    if (chrome.tabs) {
      // Running as an extension
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id || 0, { action: 'openSidebar' });
      });
    } else {
      // Running as a regular web app
      toggleSidebar();
    } 
  };

  return (
    <div className='bg-red-500 h-screen' >
      <button onClick={handleOpenSidebar}>Open</button>
      <Sidebar />
    </div>
  );
};

export default App;
