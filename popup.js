// Popup Script runs whenever extension is opened

const darkmodeSwitch = document.querySelector('input[type=checkbox]');

darkmodeSwitch.addEventListener('change', (ev) => {
    let darkmodeStatus = darkmodeSwitch.checked;
    chrome.tabs.query({active: true, currentWindow: true,}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, darkmodeStatus, function(response) {
            if (response !== darkmodeStatus) {
                darkmodeSwitch.checked = response;
            }
        });
    });
});
