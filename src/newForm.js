import {sidebarTitle} from "./sidebar"
import {main} from "./index"

export const newForm = () => {
    const formContainer = document.createElement("form");
    formContainer.id = sidebarTitle.value
   
    const firstOne = main.querySelector(":first-child");
    if (firstOne) {
        firstOne.style.display = "none";
      }
    main.appendChild(formContainer)
}