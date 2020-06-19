const template_form = document.createElement('template');

template_form.innerHTML = `
  <style>
    .form-note {
      height: 130px;
      width: 80%;
      max-width: 600px;
      padding: 20px;
      margin: 0 auto;
      box-shadow: 5px 5px 15px rgba(153, 155, 158, 0.85);
      border-radius: 8px;
      color: #000000;
    }
    .form-content {
      height: calc(100% - 38px);
    }
    .form-control {
      height: 38px;
      display: flex;
      justify-content: space-between;
    }
    .form-body {
      width: 100%;
      resize: none;
      border: 0px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      color: black;
    }

    .form-white {
      background-color: white;
    }

    .note-footer-icon {
      display: inline-block;
      height: 36px;
      width: 36px;
      background-size: cover;
    }
    .footer-icon-color {
      background-image: url(../img/icon_without_hover.svg);
    }
    .footer-icon-color:hover {
      background-image: url(../img/icon_with_hover.svg);
    }

    .form-control__keep-it {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
    }
    .form-btn  {
      height: 36px;
      background-color: transparent;
      border: none;
    }
  </style>

  <div class="form-note form-white">
    <div class="form-content">
      <textarea name="body" id="body" cols="30" rows="5" class="form-body" placeholder="Some great think!"></textarea>
    </div>
    <div class="form-control">
      <button class="form-btn form-control__color">
        <span class="note-footer-icon footer-icon-color"></span>
      </button>
      <button class="form-btn form-control__keep-it">
        Keep it!
      </button>
    </div>
  </div>
`;

class FormNote extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template_form.content.cloneNode(true));
  }

  connectedCallback() {
    console.log('connectedCallback');
  };

  disconnectedCallback() {
    console.log('disconnectedCallback');
  }

  attributeChangedCallback() {
    console.log('attributeChangedCallback');
  }
}

window.customElements.define('form-note', FormNote);