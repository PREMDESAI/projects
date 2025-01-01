// contentScript.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'openSidebar') {
      let sidebar = document.querySelector('.sidebar');
      
      if (!sidebar) {
        // Create the sidebar element if it doesn't exist
        sidebar = document.createElement('div');
        sidebar.className = 'sidebar';
        document.body.appendChild(sidebar);
      }

      const style = document.createElement('style');
      style.textContent = `
        .sidebar {
          position: fixed;
          top: 0;
          right: -350px;
          width: 350px;
          height: 100%;
          transition: 0.3s ease;
          z-index: 10000;
        }
        .sidebar.open {
          right: 0;
        }
      `;
      document.head.append(style);

  
      // Add the 'open' class to trigger the sliding effect
      sidebar.classList.add('open');
    }
  });
  
  

function getTitles() {
    const links = document.querySelectorAll('a.flex.items-center.gap-2.p-2');
    const titles = Array.from(links).map(link => ({
      title: link.querySelector('div.relative.grow').textContent.trim(),
      url: link.href
    }));
  
    return titles;
  }
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getTitles') {
      sendResponse(getTitles());
    }
});