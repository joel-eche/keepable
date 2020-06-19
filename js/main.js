function clearActiveNotes() {
  let notes_section = document.getElementById("notes-section");
  let new_list_actives = document.createElement("div");
  new_list_actives.setAttribute("id", "list-actives")
  new_list_actives.setAttribute("filter", "active")
  notes_section.removeChild(document.getElementById("list-actives"));
  notes_section.appendChild(new_list_actives);
}

function clearInactiveNotes() {
  let notes_section = document.getElementById("trash-section");
  let new_list_inactives = document.createElement("div");
  new_list_inactives.setAttribute("id", "list-inactives")
  new_list_inactives.setAttribute("filter", "inactive")
  notes_section.removeChild(document.getElementById("list-inactives"));
  notes_section.appendChild(new_list_inactives);
}