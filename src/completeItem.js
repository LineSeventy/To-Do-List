import {main} from "./index";
export const doneItem = () => {
    const done = document.querySelector('#done');

    done.addEventListener("click", () => {

      const items = Array.from(main.querySelectorAll(''));

      const checkedItems = items.filter(item => item.querySelector('input[type="checkbox"]').checked);

      checkedItems.forEach(item => {
        main.style.fontStyle = "italic";
        main.style.color = "blue";
      });
    });
  };