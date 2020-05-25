export class FormValidator {
  constructor(form, arr) {
    this.form = form;
    this.arr = arr;
  }
    checkInputValidity(input, errorMessage) {
      if (input.validity.valueMissing) {
        errorMessage.classList.add('popup__error_active');
        errorMessage.textContent = this.arr.valueMissing;
        return;
      }
      if (input.validity.tooShort || input.validity.tooLong) {
        errorMessage.classList.add('popup__error_active');
        errorMessage.textContent = this.arr.tooShort;
        return;
      }
          
      if (input.validity.typeMismatch) {
        errorMessage.classList.add('popup__error_active');
        errorMessage.textContent = this.arr.typeMismatch;
        return;
      }

      errorMessage.textContent = "";
    }
    setSubmitButtonState(form, button) {
      if (!form.checkValidity()) {
        button.setAttribute('disabled', true);
        return;
      }
      button.classList.add('popup__button_active');
      button.removeAttribute('disabled', true);
    }
    setEventListeners() {
      this.button = this.form.querySelector('button[type="submit"]');
      this.form.addEventListener('input', (event) => {
        this.checkInputValidity(event.target, event.target.nextElementSibling);
        this.setSubmitButtonState(this.form, this.button);     
      });
      this.setSubmitButtonState(this.form, this.button);
    }
}