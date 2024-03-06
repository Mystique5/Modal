'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//const btnsOpenModal = document.querySelector('.show-modal');// limitation of querySelector: if selector matches multiple elements then only the first one is selected.
const btnsOpenModal = document.querySelectorAll('.show-modal');
//console.log(btnsOpenModal);

const openModal = function () {
  //console.log('Button Clicked');
  modal.classList.remove('hidden'); //classList: property;it has it's own methods
  //remove method :- to remove a class , for multiple removal of classes ('class1', 'class2'...so on);
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}; // generic function to follow DRY(don't repeat yourself) principle.

for (let i = 0; i < btnsOpenModal.length; i++) {
  //console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
/*overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});*/
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
