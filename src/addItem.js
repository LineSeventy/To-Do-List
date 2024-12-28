import {startCountdown} from "./countdown";
import {modal, list} from "./index"
export const addItem = () => {
    const title = document.querySelector("#itemTitle");
    const desc = document.querySelector("#desc");
    const submit = document.getElementById("submitModal");
    const userTimeInput = document.getElementById("dueDate");
  
    const handleAdd = () => {
      const titleName = title.value;
      const descContent = desc.value;
      const userTime = userTimeInput.value;
    
      if (!titleName || !descContent) {
        alert("Please fill in all fields.");
        return;
      }
  
      const check = document.createElement("input");
      const timerDate = document.createElement("h6");
      const item = document.createElement("label");
      const itemContainer = document.createElement("li");
      const descPara = document.createElement("p");
  
      descPara.textContent = descContent;
      item.textContent = titleName;
      check.type = "checkbox";
      timerDate.textContent = userTime;
  
      itemContainer.appendChild(check);
      itemContainer.appendChild(item);
      itemContainer.appendChild(descPara);
      itemContainer.appendChild(timerDate);
  
      list.appendChild(itemContainer);
  
      startCountdown(userTime, timerDate);
  
      modal.style.display = "none";
      desc.value = "";
      title.value = "";
      userTimeInput.value = "";
    };
  
    
  
      submit.removeEventListener("click", handleAdd);
      submit.addEventListener("click", handleAdd);
    };


    