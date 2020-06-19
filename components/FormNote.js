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
      <button class="form-btn form-control__keep-it">
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
}

window.customElements.define("form-note", FormNote);
