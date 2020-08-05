export class Card {
  constructor(popupImage, bigImage) {
    this.myCard = document.createElement("div");
    this.popupImage = popupImage;
    this.bigImage = bigImage;
  }
  like(elem) {
    elem.classList.toggle("place-card__like-icon_liked");
  }
  remove() {
    this.myCard.remove();
  }
  create(title, image) {
    this.myCard.classList.add("place-card");
    this.myCard.insertAdjacentHTML(
    "beforeend",
    `<div class="place-card__image" style="background-image: url(${image})">
    <button class="place-card__delete-icon"></button>
    </div>
    <div class="place-card__description">
      <h3 class="place-card__name">${title}</h3>
      <button class="place-card__like-icon"></button>
    </div>`
  );
  this.setEvent();
  return this.myCard;
  }
  
  setEvent() {
    const likeButton = this.myCard.querySelector(".place-card__like-icon");
    const removeButton = this.myCard.querySelector(".place-card__delete-icon");
      
    likeButton.addEventListener("click", (event) => {
      this.like(event.target);
    });
    removeButton.addEventListener("click", (event) => {
      this.remove(event.target.closest(".place-card"));
    });
    this.myCard.addEventListener("click", (event) => {
      if (event.target.classList.contains('place-card__image')) {
        this.popupImage.open();
        this.bigImage.setAttribute('src', event.target.style.backgroundImage.slice(5, -2));
      }
    });
  }
}