import {list} from "./index";
 export const priorityItem = () => {
    const prioritize = document.getElementById('priorityBtn');

    prioritize.addEventListener("click", () => {

      const items = Array.from(list.querySelectorAll('li'));

      const checkedItems = items.filter(item => item.querySelector('input[type="checkbox"]').checked);

      checkedItems.forEach(item => {
        item.style.backgroundColor = "yellow";

      });
    });
  };
