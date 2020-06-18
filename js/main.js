const linkNotesSection = document.getElementById("show-notes");
const linkTrashSection = document.getElementById("show-trash");
const notesSection = document.getElementById("notes-section");
const trashSection = document.getElementById("trash-section");

function toggleOptions() {
  linkNotesSection.addEventListener("click", (e) => {
    notesSection.style.display = "block";
    e.target.classList.add("active");
    linkTrashSection.classList.remove("active");
    trashSection.style.display = "none";
  });

  linkTrashSection.addEventListener("click", (e) => {
    notesSection.style.display = "none";
    trashSection.style.display = "block";
    e.target.classList.add("active");
    linkNotesSection.classList.remove("active");
  });
}

toggleOptions();
