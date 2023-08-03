// const button: HTMLButtonElement = document.createElement("button");
// button.id = "speechToTextButton";
// button.textContent = "🎙️";
// button.style.position = "fixed";
// button.style.bottom = "20px";
// button.style.right = "20px";
// button.style.zIndex = "10000";
// button.style.background = "#000";
// button.style.color = "#fff";
// button.style.border = "none";
// button.style.borderRadius = "50%";
// button.style.width = "50px";
// button.style.height = "50px";
// button.style.fontSize = "24px";
// button.style.cursor = "pointer";
// button.style.display = "block"; // 默认隐藏
// document.body.appendChild(button);

// let activeElement: HTMLElement | null;

// // start or stop speech recognition
// button.addEventListener("mousedown", (event: MouseEvent) => {
//   activeElement = document.activeElement as HTMLElement;
// });

// button.addEventListener("click", (e: MouseEvent) => {
//   chrome.runtime.sendMessage({ command: "toggleRecognition" });

//   if (activeElement) activeElement.focus();
//   toggleRecognition();
// });

// function insertTextAtCursor(text: string) {
//   const el =(document.activeElement as HTMLInputElement | HTMLTextAreaElement | HTMLElement) ;

//   const tagName = el.tagName.toLowerCase();

//   if (tagName === "input" || tagName === "textarea") {
//     const start: any  = (el as HTMLInputElement | HTMLTextAreaElement).selectionStart;
//     const end : any = (el as HTMLInputElement | HTMLTextAreaElement).selectionEnd;
//     const value = (el as HTMLInputElement | HTMLTextAreaElement).value;

//     (el as HTMLInputElement | HTMLTextAreaElement).value = value.slice(0, start) + text + value.slice(end);
//     (el as HTMLInputElement | HTMLTextAreaElement).selectionStart = (el as HTMLInputElement | HTMLTextAreaElement).selectionEnd = start + text.length;
//   } else if (tagName === "div" && el.getAttribute("contenteditable") === "true") {
//     const selection:Selection|null= window.getSelection();
//     const range = selection?.getRangeAt(0);

//     if (selection && range) {
//       range.deleteContents();
//       const textNode = document.createTextNode(text);
//       range.insertNode(textNode);
//       range.setStartAfter(textNode);
//       range.setEndAfter(textNode);
//       selection.removeAllRanges();
//       selection.addRange(range);
//     }
//   }

//   // 确保触发网站自己的输入监听事件
//   const inputEvent = new Event("input", { bubbles: true, cancelable: true });
//   el.dispatchEvent(inputEvent);
//   const changeEvent = new Event("change", {
//     bubbles: true,
//     cancelable: true,
//   });
//   el.dispatchEvent(changeEvent);
// }

// if (!window.recognition) {
//   window.recognition = new webkitSpeechRecognition();
// }
// (recognition as SpeechRecognition).lang = "en-US";
// // recognition.lang = "zh-CN";
// (recognition as SpeechRecognition).interimResults = false;
// (recognition as SpeechRecognition).maxAlternatives = 1;
// (recognition as SpeechRecognition).continuous = true;

// (recognition as SpeechRecognition).onresult = (event) => {
//   console.log("识别结束");

//   const transcript = event.results[event.results.length - 1][0].transcript;
//   // 检查是否包含发送关键字
//   if (transcript.toLowerCase().includes("that's all.")) {
//     const el = document.activeElement as HTMLElement;
//     const e = new KeyboardEvent("keydown", {
//       keyCode: 13,
//       bubbles: true,
//       cancelable: true,
//     });

//     el.dispatchEvent(e);
//     toggleRecognition();

//     return;
//   }

//   insertTextAtCursor(transcript);
// };

// (recognition as SpeechRecognition).onend = () => {
//   console.log("结束了");
//   if (!(recognition as any).manualStop) {
//     setTimeout(() => {
//       (recognition as SpeechRecognition).start();
//       console.log("重启了");
//     }, 100);
//   }
// };

// chrome.runtime.onMessage.addListener((request) => {
//   if (request.command === "toggleRecognition") {
//     toggleRecognition();
//   }
// });

// function toggleRecognition() {
//   console.log("toggle");
//   if (!(recognition as any).manualStop) {
//     (recognition as SpeechRecognition).manualStop = true;
//     (recognition as SpeechRecognition).stop();
//     button.style.background = "#000";
//   } else {
//     (recognition as SpeechRecognition).manualStop = false;
//     (recognition as SpeechRecognition).start();
//     button.style.background = "#f00";
//   }
// }



