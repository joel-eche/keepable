const linkNotesSection = document.getElementById("show-notes");
const linkTrashSection = document.getElementById("show-trash");
const notesSection = document.getElementById("notes-section");
const trashSection = document.getElementById("trash-section");

function toggleOptions() {
  linkNotesSection.addEventListener("click", (e) => {
    let emptyNotes = document.getElementById("empty-notes");
    let inactiveNotes = filterNotes(true);

    if (inactiveNotes.length === 0) {
      emptyNotes.style.display = "flex";
    } else {
      emptyNotes.style.display = "none";
    }
    notesSection.style.display = "block";
    e.target.classList.add("active");
    linkTrashSection.classList.remove("active");
    trashSection.style.display = "none";
  });

  linkTrashSection.addEventListener("click", (e) => {
    let emptyTrash = document.getElementById("empty-trash");
    let inactiveNotes = filterNotes(false);

    if (inactiveNotes.length === 0) {
      emptyTrash.style.display = "flex";
    } else {
      emptyTrash.style.display = "none";
    }
    notesSection.style.display = "none";
    trashSection.style.display = "block";
    e.target.classList.add("active");
    linkNotesSection.classList.remove("active");
  });
}

function filterNotes(active) {
  let notes = JSON.parse(localStorage.getItem("notes"));
  if (active) {
    return notes.filter((note) => note.active === true);
  }
  return notes.filter((note) => note.active === false);
}

toggleOptions();
