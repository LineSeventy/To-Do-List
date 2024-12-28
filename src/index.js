import "./style.css";
import {addItem} from "./addItem"
import {priorityItem} from "./priorityItem"
import {deleteItem} from "./removeItem"
import {doneItem} from "./completeItem"
import {editItem} from "./editItem"
"use strict";

 export const list = document.querySelector("#list");
export const modal = document.getElementById('modal');

const modalSystem = () => {
  const openModal = document.querySelector('.addBtn');
  const closeMainModal = document.getElementById('closeMainModal'); 
  const modal = document.getElementById('modal'); 

  const openPlusModal = document.querySelector('.sideBarAdd'); 
  const closeSideModal = document.getElementById('closeSideModal'); 
  const sideBarModal = document.querySelector('#sideModal');


  openModal.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

 
  closeMainModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });


  openPlusModal.addEventListener('click', () => {
    sideBarModal.style.display = 'flex';
  });


  closeSideModal.addEventListener('click', () => {
    sideBarModal.style.display = 'none';
  });


  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
    if (event.target === sideBarModal) {
      sideBarModal.style.display = 'none';
    }
  });
};
  editItem();
  priorityItem();
  modalSystem();
  addItem();
  deleteItem();
  doneItem();

