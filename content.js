// Content Script runs all the time, on every page

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch(request) {
            case true:
                activateDarkmode();
                break;
            case false:
                deactivateDarkmode();
        }
        sendResponse(request);
    }
)

function activateDarkmode() {
    const root = document.documentElement;
    root.classList.add('simple-dark-mode');
    root.style.backgroundColor = '#fff';
}

function deactivateDarkmode() {
    const root = document.documentElement;
    root.classList.remove('simple-dark-mode');
}
