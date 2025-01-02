import {titleLists} from "./index"
export const deleteTitle = () => {
    const deleteBtn = document.querySelector("#deleteTitle");
    deleteBtn.addEventListener("click" ,() => {{
        const titles = Array.from(titleLists.querySelectorAll(('li')));

        const checkTitle = titles.filter(item => item.querySelector('input[type="checkbox"]').checked)

        checkTitle.forEach(item => {
            item.remove();
        })
    }} )
}