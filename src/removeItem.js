import {main} from "./index";
export const deleteItem = () => {
    const deleteBtn = document.querySelector('#deleteBtn');

    deleteBtn.addEventListener("click", () => {

      const items = Array.from(main.querySelectorAll('li'));

      const checkedItems = items.filter(item => item.querySelector('input[type="checkbox"]').checked);

      checkedItems.forEach(item => {
        item.remove();
      });
    });
  };