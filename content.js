
console.log('Chrome extension go?');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  alert("tab muted")
}
