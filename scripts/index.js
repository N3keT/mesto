const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

function openPopup() {
    popup.classList.add('popup_is-opened');
}

function closePopup() {
    popup.classList.remove('popup_is-opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

const profileName = document.querySelector('.profile__name-text');
const popupName = document.querySelector('.popup__name');
popupName.value = profileName.textContent;

const profileAbout = document.querySelector('.profile__about')
const popupAbout = document.querySelector('.popup__about');
popupAbout.value = profileAbout.textContent;

const submitButton = document.querySelector('.popup__submit-button');

function submit() {
    profileName.textContent = popupName.value;
    profileAbout.textContent = popupAbout.value;
    closePopup();
}

submitButton.addEventListener('click', submit);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileAbout.textContent = popupAbout.value;
}

popup.addEventListener('submit', submit);

const like = document.querySelectorAll('.elements__like');

for (let i = 0; i < like.length; i += 1) {
    function likeActive() {
        like[i].classList.toggle('elements__like_active');
    }
    like[i].addEventListener('click', likeActive);
}
