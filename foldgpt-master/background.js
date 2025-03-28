chrome.runtime.onInstalled.addListener(() => {
    chrome.action.onClicked.addListener((tab) => {
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: togglePopup
      });
    });
  });
  
  function togglePopup() {
    chrome.runtime.sendMessage({action: "togglePopup"});
  }