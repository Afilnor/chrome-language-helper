chrome.runtime.onMessage.addListener((request) => {
  const url = `https://www.mijnwoordenboek.nl/ww.php?woord=${encodeURIComponent(request.text)}`;
  chrome.tabs.create({url});
  sendResponse({status: "ok"});
});
