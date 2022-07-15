const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name-text');
const popupName = document.querySelector('.popup__input_type_name');
const profileAbout = document.querySelector('.profile__about')
const popupAbout = document.querySelector('.popup__input_type_about');
const submitButton = document.querySelector('.popup__submit-button');

function openPopup() {
    popup.classList.add('popup_is-opened');
    popupName.value = profileName.textContent;
    popupAbout.value = profileAbout.textContent;
}

function closePopup() {
    popup.classList.remove('popup_is-opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileAbout.textContent = popupAbout.value;
    closePopup();
}

submitButton.addEventListener('click', formSubmitHandler);
popup.addEventListener('submit', formSubmitHandler);
