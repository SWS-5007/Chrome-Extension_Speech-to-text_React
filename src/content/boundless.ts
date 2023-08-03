import find from 'lodash/find'
// import { saveToken } from '@/modules/token'
// import { saveTargetOrgUrl, saveTargetOrgId } from '@/modules/storage'
// import { retrieveSAMLUserOrganizations } from '@/modules/api'
import { IChromeSpeechRecognition } from './chrome_speech_recognition_interface';
import { IWindow } from './window';

interface PostMessageResponse {
  from: string
  key: string
  value: {
    meraki_id: string
    organization_url: string
  }
}

/*
 * Performs the check on the Boundless Dashboard that the extension is installed.
 *
 * The Boundless Dashboard emits an event as a "call" to check if the extension is installed
 * and if the extension is installed, it emits a "response" event.   Upon receiving this
 * response, the Boundless dashboard then proceeds with the redirection process to log the
 * user in via SAML.
 *
 * Additionally, the Boundless dashboard supplies the initialization information to the
 * extension that it'll need to start the desired redirections once the user arrives on the
 * Meraki dashboard.
 *
 * This function collects the Meraki organization id as meraki_id and the organization
 * dashboard URL as organization_url and saves those in local storage, so that it can
 * redirect to the proper location after login
 */
window.addEventListener(
  'message',
  async (event: MessageEvent<PostMessageResponse>) => {}
  
)

declare global {
    interface Window {
        SpeechRecognition: any; // or specific type if available
        webkitSpeechRecognition: any; // or specific type if available
    }
  }

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
recognition.continuous = true;

recognition.onresult = (event:any) => {
    console.log("识别结束");

    const transcript = event.results[event.results.length - 1][0].transcript;
    if (transcript.toLowerCase().includes("that's all.")) {
        const el = document.activeElement;
        const e = new KeyboardEvent("keydown", {
            keyCode: 13,
            bubbles: true,
            cancelable: true,
        });

        el!.dispatchEvent(e);
        toggleRecognition();

        return;
    }

    insertTextAtCursor(transcript);
};

recognition.onend = () => {
    console.log("finished");
    if (!recognition.manualStop) {
        setTimeout(() => {
            recognition.start();
            console.log("restart");
        }, 100);
    }
};

const button = document.createElement("button");
button.id = "speechToTextButton";
button.textContent = "🎙️";
button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "20px";
button.style.zIndex = "50000";
button.style.background = "#000";
button.style.color = "#fff";
button.style.border = "none";
button.style.borderRadius = "50%";
button.style.width = "50px";
button.style.height = "50px";
button.style.fontSize = "24px";
button.style.cursor = "pointer";
button.style.display = "none"; 
document.body.appendChild(button);
const input = document.createElement("input");
input.id = "display";
input.textContent = "record";
input.style.position = "fixed";
input.style.bottom = "15px";
input.style.left = "100px";
input.style.zIndex = "10000";
input.style.backgroundColor="#837c7c";
input.style.borderColor = "black";
input.style.borderRadius = "10px";
input.style.width = "70%";
input.style.height = "50px";
input.style.fontSize = "24px";
input.style.cursor = "pointer";
input.style.display = "none";

document.body.appendChild(input);

let activeElement: any;
// start or stop speech recognition
button.addEventListener("mousedown", (event) => {
    // Save the current active element during the mousedown phase
    activeElement = document.activeElement;
});
button.addEventListener("click", (e) => {
    // chrome.runtime.sendMessage({ command: "toggleRecognition" });
    // e.preventDefault();
    if (activeElement) activeElement.focus();
    toggleRecognition();
});

function insertTextAtCursor(text: string) {
    const el:any = document.activeElement;
    const tagName = el.tagName.toLowerCase();

    if (tagName === "input" || tagName === "textarea") {
        const start = el.selectionStart;
        const end = el.selectionEnd;
        const value = el.value;

        el.value = value.slice(0, start) + text + value.slice(end);
        el.selectionStart = el.selectionEnd = start + text.length;
    } else if (
        tagName === "div" &&
        el.getAttribute("contenteditable") === "true"
    ) {
        const selection = window.getSelection();
        const range = selection!.getRangeAt(0);

        range.deleteContents();
        const textNode = document.createTextNode(text);
        range.insertNode(textNode);
        range.setStartAfter(textNode);
        range.setEndAfter(textNode);
        selection!.removeAllRanges();
        selection!.addRange(range);
    }
    // Make sure to trigger the site's own input listener event
    const inputEvent = new Event("input", { bubbles: true, cancelable: true });
    el.dispatchEvent(inputEvent);
    const changeEvent = new Event("change", {
        bubbles: true,
        cancelable: true,
    });
    el.dispatchEvent(changeEvent);
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
         if (request.command === "toggleRecognition"){
            toggleRecognition();
            sendResponse({command: "ok"});
        }
        
    }
  );
function toggleRecognition() {
   
    if (!recognition.manualStop) {
        recognition.manualStop = true;
        recognition.stop();
        button.style.background = "#000";
    } else {
        recognition.manualStop = false;
        recognition.start();
        button.style.background = "#f00";
    }
}

