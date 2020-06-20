const template_notes = document.createElement("template");

const templateEmpty = `
  <div id="list-notes">
    
  </div>
`;

const templateNotes = `
  <style>
    #list-notes {
      display: grid;
      grid-gap: 1em;
      grid-template-columns: 1fr;
      justify-items:center;
      width: 100%;
      margin-top: 60px;
    }

    @media (min-width: 568px){
      #list-notes {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (min-width: 768px){
      #list-notes {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }

    @media (min-width: 992px){
      #list-notes {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  </style>

  <div id="list-notes">
  </div>
`;

class ListNotes extends HTMLElement {
  constructor() {
    super();
    let notes = this.filterNotes();
    if (this.getAttribute("filter") === "active") {
      let emptyNotes = document.getElementById("empty-notes");
      if (notes.length === 0) {
        emptyNotes.style.display = "flex";
      } else {
        emptyNotes.style.display = "none";
      }
    } else {
      let emptyTrash = document.getElementById("empty-trash");
      if (notes.length === 0) {
        emptyTrash.style.display = "flex";
      } else {
        emptyTrash.style.display = "none";
      }
    }
    template_notes.innerHTML = templateNotes;
    console.log("constructor");
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template_notes.content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    console.log("disconnectedCallback");
  }

  attributeChangedCallback() {
    console.log("attributeChangedCallback");
  }

  filterNotes() {
    let notes = JSON.parse(localStorage.getItem("notes"));
    if (this.getAttribute("filter") === "active") {
      return notes.filter((note) => note.active === true);
    }
    return notes.filter((note) => note.active === false);
  }

  render() {
    let notes = this.filterNotes();

    notes.forEach((note) => {
      let note_card = document.createElement("note-card");
      note_card.setAttribute("id", note.id);
      note_card.setAttribute("body", note.body);
      note_card.setAttribute("class-color", note.classColor);
      note_card.setAttribute(
        "active",
        note.active ? "active-note" : "inactive-note"
      );
      this.shadowRoot.getElementById("list-notes").appendChild(note_card);
    });
  }
}

window.customElements.define("list-notes", ListNotes);
