import {main} from "./index";
 export const priorityItem = () => {
    const prioritize = document.getElementById('priorityBtn');

    prioritize.addEventListener("click", () => {

      const items = Array.from(main.querySelectorAll('div'));

      const checkedItems = items.filter(item => item.querySelector('input[type="checkbox"]').checked);

      checkedItems.forEach(item => {
        item.style.backgroundColor = "yellow";

      });
    });
  };
