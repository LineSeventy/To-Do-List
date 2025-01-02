import {titleLists} from "./index"
export const selectAllTitle = () => {
    const selectBtn = document.querySelector("#selectTitle");
    selectBtn.addEventListener('click', () => {
        const checkboxes = Array.from(titleLists.querySelectorAll('input[type="checkbox"]'));

        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
        })
    })
}