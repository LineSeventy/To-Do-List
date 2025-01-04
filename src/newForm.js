
import {main} from "./index"

export const newForm = (formId) => {

  let formContainer = document.getElementById(formId);

  if (!formContainer) {
      formContainer = document.createElement("form");
      formContainer.id = formId;
      main.appendChild(formContainer);
  } else {
      formContainer.innerHTML = '';
  }

 
  const existingForms = main.querySelectorAll("form");
  existingForms.forEach(form => form.style.display = "none");

 
  formContainer.style.display = "block";
};