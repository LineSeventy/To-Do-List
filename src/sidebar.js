
import {sideBarModal} from "./index"
import {newForm} from "./newForm"
import {changeForm} from "./switchingForm"
export const sidebarTitle = document.getElementById("sideTitleInput")

export const sideBarAddItem = () =>{
    const sideBarSubmitBtn = document.querySelector("#sidedBarSubmit");
    const titleList = document.querySelector("#titleList");

    sideBarSubmitBtn.addEventListener("click", () => {
        let titleValue = sidebarTitle.value
        let titleName = titleValue || "default";

        if (!titleName) {
            titleName = "default"; 
        }
        const title = document.createElement("h1");
        const button = document.createElement("button")
        const container = document.createElement("li")
        const check = document.createElement("input")
        
        check.setAttribute("type", "checkbox");
        title.textContent = titleName;
        
        button.appendChild(title);
        button.appendChild(check);
        container.appendChild(button)
        titleList.appendChild(container);
        
        sideBarModal.style.display = 'none';
        
        newForm(titleName);
        changeForm();
    })
}

