// import NoteCard from "NoteCard.js";

const template_form = document.createElement("template");

template_form.innerHTML = `
  <link rel="stylesheet" href="./css/color_container.css" />
  <link rel="stylesheet" href="./css/note.css" />
  <div class="form-note form-white">
    <div class="form-content">
      <textarea name="body" id="body" cols="30" rows="5" class="form-body" placeholder="Some great think!"></textarea>
    </div>
    <div class="form-control">
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
      </div>
      <button id="create-note" class="form-btn form-control__keep-it">
        Keep it!
      </button>
    </div>
  </div>
`;

class FormNote extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template_form.content.cloneNode(true));
    this.createNote();
  }

  connectedCallback() {
    console.log("connectedCallback");
  }

  disconnectedCallback() {
    console.log("disconnectedCallback");
  }

  attributeChangedCallback() {
    console.log("attributeChangedCallback");
  }

  createNote() {
    let button = this.shadowRoot.getElementById("create-note");
    let listComponent = document.getElementById("list-actives");
    button.addEventListener("click", (e) => {
      let listNotes = listComponent.shadowRoot.getElementById("list-notes");
      listNotes.prepend(this.createTemplateNote());
    });
  }

  createTemplateNote() {
    let notes = JSON.parse(localStorage.getItem("notes"));
    let array_ids = notes.map((note) => note.id);
    let max_id = Math.max(...array_ids);
    let body = this.shadowRoot.getElementById("body");
    let note_card = document.createElement("note-card");
    note_card.setAttribute("id", max_id + 1);
    note_card.setAttribute("body", body.value);
    note_card.setAttribute("class-color", "blue");
    note_card.setAttribute("active", "active-note");
    this.saveNoteInLocalStorage({body: body.value});
    return note_card;
  }

  saveNoteInLocalStorage({body}) {
    let notes = JSON.parse(localStorage.getItem("notes"));
    let array_ids = notes.map((note) => note.id);
    let max_id = Math.max(...array_ids);
    let note = new Note({
      id: max_id + 1,
      body: body
    });
    notes.unshift(note);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
}

window.customElements.define("form-note", FormNote);
