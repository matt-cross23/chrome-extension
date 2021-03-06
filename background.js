// background.js
// Script that is always running in background
// Do not put event listeners or code that depends on the page\

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
});

chrome.runtime.onInstalled.addListener(() => {
  // Mkae sure script is in background
  console.log("background script connected")

  // Old code goes into storage and grabs color
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
  
  // Get whole list of voices 
  chrome.tts.getVoices(function(availableVoices) {
    voices = availableVoices;
    console.log(voices)
  });
});


