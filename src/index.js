import "./style.css";
"use strict";

const openModal = document.querySelector('.addBtn');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');


openModal.addEventListener('click', () => {
  modal.style.display = 'flex'; 
});


closeModal.addEventListener('click', () => {
  modal.style.display = 'none'; 
});


window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none'; 
  }
});