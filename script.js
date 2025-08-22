const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

// Browser close when u start again it will look first on local Storage if u have written anything it will give u again
function showNotes(){
    noteContainer.innerHTML = localStorage.getItem("notes")
}

showNotes();

//store local
function updateStorage(){
    localStorage.setItem("notes",noteContainer.innerHTML);
}

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src ="images/delete.jpg";
    noteContainer.appendChild(inputBox).appendChild(img);
});

//delete
noteContainer.addEventListener("click",(e)=>{
   if(e.target.tagName ==="IMG"){
    e.target.parentElement.remove();
    updateStorage();
  }else if(e.target.tagName === "P"){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(note=>{
        note.onkeyup = function(){
            updateStorage();
        }
        //handle enter key
        note.onkeydown = function (event) {
          if (event.key === "Enter") {
            document.execCommand("insertLineBreak");
            event.preventDefault();
          }
        }
    })
  }
});
