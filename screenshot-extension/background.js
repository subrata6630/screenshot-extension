chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.captureVisibleTab(null, { format: "png" }, (imageUri) => {
    const link = document.createElement("a");
    link.href = imageUri;
    link.download = `screenshot-${Date.now()}.png`;
    link.click();
  });
});
