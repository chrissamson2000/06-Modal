'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Function that will open the modal when clicked. (Removes the hidden CSS class)
const openModal = function() {
    console.log("Button clicked");
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// Function that will close the modal when clicked. (Adds the hideen CSS class)
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Looping through to open any of the 3 modals.
for (let i = 0; i < btnsOpenModal.length; i++) 
   btnsOpenModal[i].addEventListener('click', openModal);

// Adding the clickable X button to close the modal.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Using the escape key to close the modal.
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
