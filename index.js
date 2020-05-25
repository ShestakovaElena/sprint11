
const errorMessages = {
  valueMissing: 'Это обязательное поле',
  tooShort: 'Должно быть от 2 до 30 символов',
  typeMismatch: 'Здесь должна быть ссылка'
};

const placesList = document.querySelector('.places-list');

const popupCard = document.querySelector('.popup-card');
const popupEdit = document.querySelector('.popup-edit');
const popupImage = document.querySelector('.popup_type_image');
const bigImage = document.querySelector('.popup__big-image');

const userInfoButton = document.querySelector('.user-info__button');
const editButton = document.querySelector(".user-info__edit-button");
const closePopupCard = document.querySelector('.popup__close_card');

const formCard = document.forms.new;
const formEdit = document.forms.edit;

const userInfoName = document.querySelector('.user-info__name');
const userInfoJob = document.querySelector('.user-info__job');
const userAvatar = document.querySelector('.user-info__photo');

  
 
const api = new Api({
  baseUrl: 'https://praktikum.tk/cohort10',
  headers: {
    authorization: '61dff0e9-081b-4393-a8e1-3a5f0db6b56c',
    'Content-Type': 'application/json'
  }
});
    
const newUserCard = () => new Card(popupImageOpen, bigImage);

const popupCardOpen = new Popup(popupCard);
const popupProfileOpen = new Popup(popupEdit);
const popupImageOpen = new Popup(popupImage);

const cardList = new CardList(placesList, api, newUserCard);
const info = new UserInfo(formEdit, userInfoName, userInfoJob, userAvatar, popupProfileOpen);
const validatorProfile = new FormValidator(formEdit, errorMessages);
const validatorCard = new FormValidator(formCard, errorMessages);

closePopupCard.addEventListener('click', (event) => {
  popupProfileOpen.close();
  formCard.reset();
});

formCard.addEventListener('submit', (event) => {
  event.preventDefault(event);
  cardList.addCard(formCard.name.value, formCard.link.value,);
  popupCardOpen.close();
  formCard.reset();
});

api.getUserData()
  .then(function (result) {
    userInfoName.textContent = result.name;
    userInfoJob.textContent = result.about;
    userAvatar.setAttribute('style', `background-image: url('${result.avatar}')`);
})
  .catch(function (err) {
    console.log(err);
});

userInfoButton.addEventListener('click', popupCardOpen.open);

editButton.addEventListener('click', popupProfileOpen.open);


editButton.addEventListener('click', info.setUserInfo);

formEdit.addEventListener('submit', (event) => {
  event.preventDefault(event);
  validatorProfile.setEventListeners();
  const userName = event.target.querySelector('#nameValidation');
  const userData = event.target.querySelector('#jobValidation');
  api.sendUserData(userName.value, userData.value)
  .then(() => {
    info.updateUserInfo(event);
    popupProfileOpen.close(popupProfileOpen);
  })
  .catch(err => {
    console.log(`Ошибка: ${err}`);
  })
})

cardList.render();
validatorProfile.setEventListeners();
validatorCard.setEventListeners();


