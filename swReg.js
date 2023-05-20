// import { customers }  from "../appData.js"
navigator.serviceWorker.register("serviceworker.js");

window.addEventListener("DOMContentLoaded", async event => {
  if ('BeforeInstallPromptEvent' in window) {
    document.querySelector('#mobile-nav-toggle').style.display = 'bloc'
    showResult("⏳ BeforeInstallPromptEvent supported but not fired yet");
  } else {
    showResult("❌ BeforeInstallPromptEvent NOT supported");    
  }
  document.querySelector("#install").addEventListener("click", installApp);
});

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevents the default mini-infobar or install dialog from appearing on mobile
  e.preventDefault();
  // Save the event because you’ll need to trigger it later.
  deferredPrompt = e;
  // Show your customized install prompt for your PWA
  document.querySelector('#mobile-nav-toggle').style.display = 'none'
  document.querySelector("#install").style.display="block";  
  showResult("✅ BeforeInstallPromptEvent fired", true);
  
});

window.addEventListener('appinstalled', (e) => {
  showResult("✅ AppInstalled fired", true);
});

async function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    showResult("🆗 Installation Dialog opened");
    // Find out whether the user confirmed the installation or not
    const { outcome } = await deferredPrompt.userChoice;
    // The deferredPrompt can only be used once.
    deferredPrompt = null;
    // Act on the user's choice
    if (outcome === 'accepted') {
      showResult('😀 User accepted the install prompt.', true);
    } else if (outcome === 'dismissed') {
      showResult('😟 User dismissed the install prompt');
    }
    // We hide the install button
    document.querySelector("#install").style.display="none";
    document.querySelector('#mobile-nav-toggle').style.display = 'block'

  }
}

function showResult(text, append=false) {
  if (append) {
     // document.querySelector("output").innerHTML += "<br>" + text;
  } else {
   //  document.querySelector("output").innerHTML = text;    
  }
}