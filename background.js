chrome.action.onClicked.addListener(() => {
    const wikiURL = "https://en.wikipedia.org/wiki/Special:Random";
    chrome.tabs.create({ url: wikiURL });
});