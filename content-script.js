document.onmouseup = function() { 
  selectedText = window.getSelection().toString();
  console.log(selectedText);
  if (selectedText !== "") {
    const response = chrome.runtime.sendMessage({text: selectedText});
  }
};
