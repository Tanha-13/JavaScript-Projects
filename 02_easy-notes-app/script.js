const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll('.input-box');


createBtn.addEventListener('click', ()=>{
    const inputBox = document.createElement('p');
    let img = document.createElement("img");
    inputBox.setAttribute("contenteditable", "true");
    inputBox.classList.add('input-box');
    img.src = "./images/delete.png";
    
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener('click', (e) => {
    console.log(e.target.parentElement);
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
    }
})