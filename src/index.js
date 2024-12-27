import "./style.css";
"use strict";

  const modalSystem = () => {
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
  };

  const list = document.querySelector("#list");
  const modal = document.getElementById('modal');


  const addItem = () => {
    const title = document.querySelector("#itemTitle");
    const desc = document.querySelector("#desc");
    const submit = document.getElementById("submitModal");
    const userTimeInput = document.getElementById("dueDate");
  
    const handleAdd = () => {
      const titleName = title.value;
      const descContent = desc.value;
      const userTime = userTimeInput.value;
  
      if (!titleName || !descContent || !userTime) {
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
  
      modal.style.display = "none";
      desc.value = "";
      title.value = "";
      userTimeInput.value = "";
    };
  

    submit.removeEventListener("click", handleAdd);
    submit.addEventListener("click", handleAdd);
  };
  
  const editItem = () => {
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
  
  
  const startCountdown = (userTime, timerDate) => {
    const dueDate = new Date(userTime);
  
    const timer = setInterval(() => {
      const now = new Date();
      const timeDifference = dueDate - now;
  
      if (timeDifference <= 0) {
        clearInterval(timer);
        timerDate.textContent = "Due date has passed";
        return;
      }
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      timerDate.textContent = `Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
  };
  
  const doneItem = () => {
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

  const deleteItem = () => {
    const deleteBtn = document.querySelector('#deleteBtn');

    deleteBtn.addEventListener("click", () => {

      const items = Array.from(list.querySelectorAll('li'));

      const checkedItems = items.filter(item => item.querySelector('input[type="checkbox"]').checked);

      checkedItems.forEach(item => {
        item.remove();
      });
    });
  };

  const priorityItem = () => {
    const prioritize = document.getElementById('priorityBtn');

    prioritize.addEventListener("click", () => {

      const items = Array.from(list.querySelectorAll('li'));

      const checkedItems = items.filter(item => item.querySelector('input[type="checkbox"]').checked);

      checkedItems.forEach(item => {
        item.style.backgroundColor = "yellow";

      });
    });
  };
  
  editItem();
  priorityItem();
  modalSystem();
  addItem();
  deleteItem();
  doneItem();

