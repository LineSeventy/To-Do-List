import {list} from "./index";
export const doneItem = () => {
    const done = document.querySelector('#done');

    done.addEventListener("click", () => {

      const items = Array.from(list.querySelectorAll('li'));

      const checkedItems = items.filter(item => item.querySelector('input[type="checkbox"]').checked);

      checkedItems.forEach(item => {
        item.style.fontStyle = "italic";
        item.style.color = "blue";
      });
    });
  };