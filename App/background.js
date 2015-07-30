chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create(
    'inbox.html',
    {
      id: 'inboxWindow',
      frame: {color: '#4285f4'},
      innerBounds: {width: 1280, height: 700, minWidth: 720, minHeight: 350}
    }
  );
});
