const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box"); //all notes

//When open the closed browser, check local storage and update the website
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

//Saving Input
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML); //"notes" stores what is in the notes Container
}

//Adding Input Box
createBtn.addEventListener("click", ()=>{ //click on button
    let inputBox = document.createElement("p"); //creates a p element
    let img = document.createElement("img"); //creates an img
    inputBox.className = "input-box"; //add the input box class name
    inputBox.setAttribute("contenteditable", "true"); //attributes for the input box
    img.src = "images/delete.png"; //assigns the img
    notesContainer.appendChild(inputBox).appendChild(img); //displays in notes-container
})

//Delete Note Box
notesContainer.addEventListener("click", function(e){
    if (e.target.tagName === "IMG"){ //if click on notes Container is an img
        e.target.parentElement.remove(); //delete the inputBox
        updateStorage();
    }
    else if(e.target.tagName === "P"){ //when inputing new -> store
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

//New Line Fnc
document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})