console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  let msg = {
    txt: 'hello',
    id: tab.id
  };

  chrome.tabs.sendMessage(tab.id, msg);
  chrome.tabs.update(tab.id, {"muted": true});
}
