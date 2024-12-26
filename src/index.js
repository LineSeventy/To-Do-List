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
  
    submit.addEventListener("click", () => {
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
  
      descPara.textContent = `${descContent}`;
      item.textContent = `${titleName}`;
      check.type = "checkbox";
  

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

  priorityItem();
  modalSystem();
  addItem();
  deleteItem();
  doneItem();

