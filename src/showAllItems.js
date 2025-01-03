import {main} from "./index"
export const showAll = () => {
    const showAllBtn = document.querySelector("#showAll");
    showAllBtn.addEventListener("click", () => {
        const allForms = main.querySelectorAll("form");
        const allFormShow = document.createElement("form")
        allForms.forEach(form => {
            Array.from(form.children).forEach(div => allFormShow.appendChild(div));
        })

        allForms.forEach(form => form.style.display = "none");
        main.appendChild(allFormShow);
    })
}