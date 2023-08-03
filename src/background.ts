async function toggleSpeechToText(): Promise<void> {
 
  const [activeTab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  console.log(activeTab);
  const response = await chrome.tabs.sendMessage(activeTab.id!, {command: "toggleRecognition"});
  console.log(response)
  chrome.scripting.executeScript({
    target: { tabId: activeTab.id! },
    function: () => {
      const button = document.getElementById("speechToTextButton");
      const input = document.getElementById("display") as HTMLInputElement;
      if (button&&input) {
        button.style.display = "block";
        input.style.display = "block";

        input.focus();
        // input?.setAttribute('disabled', '')
      }
    }
  });
}

chrome.action.onClicked.addListener(() => {
  toggleSpeechToText();
});

// chrome.commands.onCommand.addListener((command: any) => {
//   if (command === "toggle_speech_to_text") {
//     toggleSpeechToText();
//   }
// });