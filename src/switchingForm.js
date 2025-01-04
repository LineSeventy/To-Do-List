import { titleLists } from "./index";

export const changeForm = () => {
   
    const btnAll = Array.from(titleLists.querySelectorAll("button"));


    btnAll.forEach(button => {
        button.addEventListener("click", () => {

            const formId = button.querySelector("h1").textContent;

            const forms = document.querySelectorAll("form");
            forms.forEach(form => form.style.display = "none");


            let form = document.getElementById(formId);


            form.style.display = "block";
            console.log("still here")
        });
    });
};

