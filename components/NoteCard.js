const template_note_card = document.createElement("template");
template_note_card.innerHTML = `
<link rel="stylesheet" href="./css/color_container.css" />
<link rel="stylesheet" href="./css/note.css" />
<div class="card">
  <div class="card-content">
    <p class="card-title"></p>
  </div>
  <div class="card-options" >
    <div class="note-footer">
      <div class="note-footer-icon-color">
        <span class="note-footer-icon footer-icon-color"></span>
        <div class="icon-color-dropdown-content">
          <button
            class="color-dropdown-content-circulo color-FFFFFF"
          ></button>
          <button
            class="color-dropdown-content-circulo color-F28B82"
          ></button>
          <button
            class="color-dropdown-content-circulo color-FBBC04"
          ></button>
          <button
            class="color-dropdown-content-circulo color-FFF475"
          ></button>
          <button
            class="color-dropdown-content-circulo color-CCFF90"
          ></button>
          <button
            class="color-dropdown-content-circulo color-A7FFEB"
          ></button>
          <button
            class="color-dropdown-content-circulo color-CBF0F8"
          ></button>
          <button
            class="color-dropdown-content-circulo color-AECBFA"
          ></button>
          <button
            class="color-dropdown-content-circulo color-D7AEFB"
          ></button>
          <button
            class="color-dropdown-content-circulo color-FDCFE8"
          ></button>
        </div>
      </div>
      <span  id="trash-button" class="note-footer-icon footer-icon-trash"></span>
      <span  id="back-button" class="note-footer-icon  footer-icon-back"></span>
    </div>
  </div>
</div>
`;

class NoteCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log("connectedCallback NOTE");
    this.shadowRoot.appendChild(template_note_card.content.cloneNode(true));
    this.shadowRoot.querySelector(".card-title").innerText = this.getAttribute(
      "body"
    );
    this.shadowRoot
      .querySelector(".card")
      .classList.add(this.getAttribute("active"));
    this.shadowRoot.querySelector(".card").classList.add("card-white");
    this.shadowRoot
      .getElementById("trash-button")
      .addEventListener("click", () => this.moveToTrash());
    this.shadowRoot
      .getElementById("back-button")
      .addEventListener("click", () => this.moveToMain());
  }

  disconnectedCallback() {
    console.log("disconnectedCallback NOTE");
  }

  attributeChangedCallback() {
    console.log("attributeChangedCallback NOTE");
  }

  toggleCard() {
    console.log("click");
  }

  colorNote() {
    console.log("note card", this);
  }

  moveToMain() {
    let mainSection = document.getElementById("list-actives");
    let note_card = this.createTemplateNote(true);
    mainSection.shadowRoot.getElementById("list-notes").prepend(note_card);
    this.remove();
    this.changeColor();
  }

  moveToTrash() {
    console.log(this.getAttribute("active"));
    if (this.getAttribute("active") === "active-note") {
      let trashSection = document.getElementById("list-inactives");
      let note_card = this.createTemplateNote(false);
      //let buttonBack = this.shadowRoot.getElementById("back-button");
      //let colorButton = this.shadowRoot.querySelector(".footer-icon-color");
      trashSection.shadowRoot.getElementById("list-notes").prepend(note_card);
      //buttonBack.style.display = "inline-block";
      //colorButton.style.display = "none";
      this.remove();
    } else {
      this.removePermamentOfLocalStorage();
      this.remove();
    }
  }

  removePermamentOfLocalStorage() {
    let notes = JSON.parse(localStorage.getItem("notes"));
    let index_note_to_modify = notes.findIndex(
      (note) => note.id === parseInt(this.getAttribute("id"))
    );
    notes.splice(index_note_to_modify, 1);
    this.saveNotesInLocalStorage(notes);
  }

  createTemplateNote(active) {
    let notes = JSON.parse(localStorage.getItem("notes"));
    let index_note_to_modify = notes.findIndex(
      (note) => note.id === parseInt(this.getAttribute("id"))
    );
    notes[index_note_to_modify].active = active;

    let note_card = document.createElement("note-card");
    note_card.setAttribute("id", notes[index_note_to_modify].id);
    note_card.setAttribute("body", notes[index_note_to_modify].body);
    note_card.setAttribute(
      "class-color",
      notes[index_note_to_modify].classColor
    );
    note_card.setAttribute(
      "active",
      notes[index_note_to_modify].active ? "active-note" : "inactive-note"
    );

    this.saveNotesInLocalStorage(notes);

    return note_card;
  }

  saveNotesInLocalStorage(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  changeColor() {
    let buttonsColor = this.shadowRoot.querySelectorAll(
      ".color-dropdown-content-circulo"
    );

    buttonsColor.forEach((e) => {
      e.addEventListener("click", () => {
        let classCirculo = e.classList;
        let color = classCirculo[1];
        let cardnote = e.parentNode.parentNode.parentNode.parentNode.parentNode;
        cardnote.setAttribute("class", "card " + color);
      });
    });
  }
}

window.customElements.define("note-card", NoteCard);
