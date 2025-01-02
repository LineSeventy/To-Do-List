
import {sideBarModal} from "./index"
import {newForm} from "./newForm"
export const sidebarTitle = document.getElementById("sideTitleInput")
export const sideBarAddItem = () =>{
    const sideBarSubmitBtn = document.querySelector("#sidedBarSubmit");
    const titleList = document.querySelector("#titleList");

    sideBarSubmitBtn.addEventListener("click", () => {{
        
        let titleName = sidebarTitle.value;

        const title = document.createElement("h1");
        const button = document.createElement("button")
        const container = document.createElement("div")
        title.textContent = titleName;
        button.appendChild(title);
        container.appendChild(button)
        titleList.appendChild(container);
        sideBarModal.style.display = 'none';
        newForm();
    }})
}

