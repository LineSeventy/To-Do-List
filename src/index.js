import "./style.css";
import {addItem} from "./addItem"
import {priorityItem} from "./priorityItem"
import {deleteItem} from "./removeItem"
import {doneItem} from "./completeItem"
import {editItem} from "./editItem"
import {sideBarAddItem} from "./sidebar"
import {deleteTitle} from "./deleteTitle"
import {selectAllTitle} from "./selectAllTitle"
"use strict";

export const main = document.querySelector("main");
export const modal = document.getElementById('modal');
export const sideBarModal = document.querySelector('#sideModal');
export const titleLists = document.querySelector("#titleList")
if(titleLists == null){
  console.log("Fucked")
}
const modalSystem = () => {
  const openModal = document.querySelector('.addBtn');
  const closeMainModal = document.getElementById('closeMainModal'); 
  const modal = document.getElementById('modal'); 

  const openPlusModal = document.querySelector('.sideBarAdd'); 
  const closeSideModal = document.getElementById('closeSideModal'); 
  


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
selectAllTitle();
deleteTitle();
sideBarAddItem();
  editItem();
  priorityItem();
  modalSystem();
  addItem();
  deleteItem();
  doneItem();

