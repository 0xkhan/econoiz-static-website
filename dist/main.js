/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!*******************!*\
  !*** ./main.scss ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
// Transparency tabs selectors
const tabs = document.querySelectorAll('.transparency__tab');
const tabsContainer = document.querySelector('.transparency__tab-container');
const tabsContent = document.querySelectorAll('.transparency__content');

// Modal selectors
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

// Transparency Component
// Implementing tab components
tabsContainer.addEventListener('click', function(event) {
    // Select tabs
    const clicked = event.target.closest('.transparency__tab');

    if (!clicked) return;

    // Activate tab
    tabs.forEach((tab) => {
        tab.classList.remove('transparency__tab--active');
        clicked.classList.add('transparency__tab--active');
    });

    // Activate content area
    tabsContent.forEach((tabContent) => {
        tabContent.classList.remove('transparency__content--active');
        document.querySelector(`.transparency__content--${clicked.dataset.tab}`).classList.add('transparency__content--active');
    });
});

// Implementing collapsible components
const collapseItems = document.querySelectorAll('.collapsible');

for (let i = 0; i < collapseItems.length; i++) {
    collapseItems[i].addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('collapsible--active');
    });
}

// Modal Component
// Select all open Modal buttons
openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

// Select all close-modal buttons
closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

// Close the modal when clicked on overlay (outside the modal)
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal__active');
    modals.forEach((modal) => {
        closeModal(modal);
    });
});

// Opens the modal
function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('modal__active');
    overlay.classList.add('overlay__active');
}

// Closes the modal
function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('modal__active');
    overlay.classList.remove('overlay__active');
}

})();

/******/ })()
;
//# sourceMappingURL=main.js.map