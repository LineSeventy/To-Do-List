import {sidebarTitle} from "./sidebar"
import {main} from "./index"

export const newForm = () => {
  const formContainer = document.createElement("form");
  formContainer.id = sidebarTitle.value;

  const existingForms = main.querySelectorAll("form");
  existingForms.forEach(form => form.style.display = "none");

  main.appendChild(formContainer);
  
}