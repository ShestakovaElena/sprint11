export class Popup {
  constructor(popup) {
    this.popup = popup;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.popup
      .querySelector('.popup__close')
      .addEventListener('click', this.close);
  }
  open() {
    this.popup.classList.add('popup_is-opened');
  }
  close() {
    this.popup.classList.remove('popup_is-opened');
    const arr = this.popup.querySelectorAll('.popup__error');
    arr.forEach((elem) => {elem.classList.remove('popup__error_active')});
  }
}