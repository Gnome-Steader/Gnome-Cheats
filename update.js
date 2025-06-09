// Define the list of allowed domains
const whitelist = [
    'surviv', 'survev', 'resurviv', 'zurviv', 'expandedwater',
    '66.179.254.36', 'eu-comp', '50v50', 'surv', 'zurv'
];

// Exit if the current domain is not in the whitelist
if (!whitelist.some(domain => globalThis.location.hostname.includes(domain))) {
    console.log("Update.js blocked—site not in whitelist.");
    return;
}

// Stronger Date.now() override with tamper resistance
Object.defineProperty(Date, 'now', {
    get: function () { return 99999999999999; },
    configurable: false,
    enumerable: false
});

// Prevent document.write() from displaying outdated messages
Object.defineProperty(document, 'write', {
    value: () => {},
    writable: false,
    configurable: false
});

// Override Promise to prevent infinite execution blocking
window.Promise = class {
    constructor(executor) {
        executor(() => {}, () => {}); // Stops the freezing behavior
    }
};

// Additional safety check to prevent unwanted modifications
(() => {
    Object.freeze(Date);
    Object.freeze(document);
    Object.freeze(window.Promise);
})();

// Function to replace "mahdi" and "noam" with "Gnomling"
function replaceNames() {
    document.body.innerHTML = document.body.innerHTML.replace(/mahdi|noam/g, "Gnomling");
}

// Function to remove specific elements
function removeUnwantedElements() {
    const elements = document.querySelectorAll('button.nav-tab.active[data-tab="help"]');
    elements.forEach(el => el.remove());
}

// Function to replace header content
function replaceHeader() {
    const header = document.querySelector('.header');
    if (header) {
        header.innerHTML = `
            <img src="https://i.postimg.cc/W4g7cxLP/image.png" alt="Menu" class="menu-icon">
            <div class="title">Gnome cheats v.2</div>
            <div class="credit">by: The Gnome</div>
        `;
    }
}

// Execute modifications after the page loads
window.onload = () => {
    replaceNames();
    removeUnwantedElements();
    replaceHeader();
};

console.log("Update.js loaded successfully—expiration bypass applied, name correction completed, UI modifications enforced.");
