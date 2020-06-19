const template_note_card = document.createElement('template');
template_note_card.innerHTML = `
<style>
  .card {
    height: 200px;
    width: 200px;
    padding: 20px;
    box-shadow: 5px 5px 15px rgba(153, 155, 158, 0.85);
    border-radius: 8px;
    color: #000000;
  }
  .card-content {
    font-size: 13px;
    line-height: 24px;
    min-height: calc(100% - 38px);
  }
  .card-options {
    height: 38px;
  }

  .card-white {
    background-color: white;
  }

  .note-footer-icon {
    display: inline-block;
    width: 36px;
    height: 36px;
    background-size: cover;
  }
  .footer-icon-color {
    background-image: url(../img/icon_without_hover.svg);
  }
  .footer-icon-color:hover {
    background-image: url(../img/icon_with_hover.svg);
  }

  .footer-icon-trash {
    background-image: url(../img/trash.svg);
  }
  .footer-icon-trash:hover {
    background-image: url(../img/trash_with_hover.svg);
  }

  button {
    background-color: transparent;
    border: none;
  }
</style>

<div class="card">
  <div class="card-content">
    <p class="card-title"></p>
  </div>
  <div class="card-options" >
    <button class="card-options__color">
      <span class="note-footer-icon footer-icon-color"></span>
    </button>
    <button class="card-options__trash">
      <span class="note-footer-icon footer-icon-trash"></span>
    </button>
  </div>
</div>
`

class NoteCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template_note_card.content.cloneNode(true));
    this.shadowRoot.querySelector('.card-title').innerText = this.getAttribute('body');
    this.shadowRoot.querySelector('.card').classList.add("card-white");
  }

  connectedCallback() {
    this.addEventListener('click', e => {
      this.toggleCard();
    });
  }

  toggleCard() {
    console.log('click')
  }
}

window.customElements.define('note-card', NoteCard);