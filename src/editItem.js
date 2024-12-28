import {startCountdown} from "./countdown";
import {modal, list} from "./index"
export const editItem = () => {
    const edit = document.getElementById("editBtn");
  
    edit.addEventListener("click", () => {
      const items = Array.from(list.querySelectorAll("li"));
  
      const checkedItems = items.filter((item) =>
        item.querySelector('input[type="checkbox"]').checked
      );
  
      if (checkedItems.length === 0) {
        alert("Please select an item to edit.");
        return;
      }
  
      if (checkedItems.length > 1) {
        alert("Please select only one item to edit.");
        return;
      }
  
      const itemToEdit = checkedItems[0];
      const titleElement = itemToEdit.querySelector("label");
      const descElement = itemToEdit.querySelector("p");
      const dueDateElement = itemToEdit.querySelector("h6");
  
      const title = document.querySelector("#itemTitle");
      const desc = document.querySelector("#desc");
      const userTimeInput = document.getElementById("dueDate");
  
      title.value = titleElement.textContent;
      desc.value = descElement.textContent;
      userTimeInput.value = dueDateElement.textContent;
  

      itemToEdit.remove();
  
      modal.style.display = "flex";
  
      const submit = document.getElementById("submitModal");
  
    const handleEdit = () => {
      const updatedTitle = title.value;
       const updatedDesc = desc.value;
        const updatedDueDate = userTimeInput.value;
  
        if (!updatedTitle || !updatedDesc || !updatedDueDate) {
          alert("Please fill in all fields.");
          return;
        }
  
        const check = document.createElement("input");
        const timerDate = document.createElement("h6");
        const item = document.createElement("label");
        const itemContainer = document.createElement("li");
        const descPara = document.createElement("p");
  
        descPara.textContent = updatedDesc;
        item.textContent = updatedTitle;
        check.type = "checkbox";
        timerDate.textContent = updatedDueDate;
  
        itemContainer.appendChild(check);
        itemContainer.appendChild(item);
        itemContainer.appendChild(descPara);
        itemContainer.appendChild(timerDate);
  
        list.appendChild(itemContainer);
        
        startCountdown(updatedDueDate, timerDate);
        modal.style.display = "none";
        title.value = "";
        desc.value = "";
        userTimeInput.value = "";
  

        submit.removeEventListener("click", handleEdit);
      };

      submit.removeEventListener("click", handleEdit);
      submit.addEventListener("click", handleEdit);
    });
  };
  