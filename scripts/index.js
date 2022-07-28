const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const selectors = {
    editButton: '.profile__edit-button',
    closeButton: '.popup__close',
    profilePopup: '#profile',
    profileName: '.profile__name-text',
    popupName: '#name',
    profileAbout: '.profile__about',
    popupAbout: '#about',
    submitButton: '.popup__submit-button',
    list: '.elements__list',
    templateElement: '#element',
    elementPlaceName: '.element__place-name',
    elementDel: '.element__delete',
    elementLike: '.element__like',
    elementLikeActive: 'element__like_type_active',
    elementFoto: '.element__foto',
    popupIsOpened: 'popup_is-opened',
    addPopup: '#add',
    addButton: '.profile__add-button',
    closeAdd: '#close',
    addPopupName: '#foto',
    addPopupLink: '#link',
    addPopupSubmit: '#submit',
    fotoPopup: '#openFoto',
    fotoPopupName: '.popup__foto-name',
    fotoPopupImg: '.popup__foto',
    fotoPopupClose: '#closeFoto'
}

const editButton = document.querySelector(selectors.editButton);
const closeButton = document.querySelector(selectors.closeButton);
const profilePopup = document.querySelector(selectors.profilePopup);
const profileName = document.querySelector(selectors.profileName);
const popupName = document.querySelector(selectors.popupName);
const profileAbout = document.querySelector(selectors.profileAbout)
const popupAbout = document.querySelector(selectors.popupAbout);
const submitButton = document.querySelector(selectors.submitButton);
const list = document.querySelector(selectors.list);
const templateElement = document.querySelector(selectors.templateElement).content.children[0];
const addPopup = document.querySelector(selectors.addPopup);
const addButton = document.querySelector(selectors.addButton);
const closeAdd = document.querySelector(selectors.closeAdd);
const addPopupName = document.querySelector(selectors.addPopupName);
const addPopupLink = document.querySelector(selectors.addPopupLink);
const addPopupSubmit = document.querySelector(selectors.addPopupSubmit);
const fotoPopup = document.querySelector(selectors.fotoPopup);
const fotoPopupName = document.querySelector(selectors.fotoPopupName);
const fotoPopupImg = document.querySelector(selectors.fotoPopupImg);
const fotoPopupClose =document.querySelector(selectors.fotoPopupClose);

function createElement(name) {
    const element = templateElement.cloneNode(true);
    const elementPlaceName = element.querySelector(selectors.elementPlaceName);
    const elementDel = element.querySelector(selectors.elementDel);
    const elementLike = element.querySelector(selectors.elementLike);
    const elementFoto = element.querySelector(selectors.elementFoto);
    list.append(element);
    elementPlaceName.textContent = name.name;
    elementFoto.src = name.link;
    elementDel.addEventListener('click', function(){
        element.remove();
    })
    elementLike.addEventListener('click', function(){
        elementLike.classList.toggle(selectors.elementLikeActive);
    })
    function openFotoPopup() {
        fotoPopup.classList.add(selectors.popupIsOpened);
        fotoPopupName.textContent = name.name;
        fotoPopupImg.src = name.link;
    }
    elementFoto.addEventListener('click', openFotoPopup);
}

initialCards.forEach(createElement);

function openProfilePopup() {
    profilePopup.classList.add(selectors.popupIsOpened);
    popupName.value = profileName.textContent;
    popupAbout.value = profileAbout.textContent;
}

function closeProfilePopup() {
    profilePopup.classList.remove(selectors.popupIsOpened);
}

editButton.addEventListener('click', openProfilePopup);
closeButton.addEventListener('click', closeProfilePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileAbout.textContent = popupAbout.value;
    closeProfilePopup();
}

submitButton.addEventListener('click', formSubmitHandler);
profilePopup.addEventListener('submit', formSubmitHandler);

function openAddPopup() {
    addPopup.classList.add(selectors.popupIsOpened);
    addPopupName.value = '';
    addPopupLink.value = '';
}

function closeAddPopup() {
    addPopup.classList.remove(selectors.popupIsOpened);
}

addButton.addEventListener('click', openAddPopup);
closeAdd.addEventListener('click', closeAddPopup);

function formSubmit(evt) {
    evt.preventDefault();
    const element = templateElement.cloneNode(true);
    const elementPlaceName = element.querySelector(selectors.elementPlaceName);
    const elementDel = element.querySelector(selectors.elementDel);
    const elementLike = element.querySelector(selectors.elementLike);
    const elementFoto = element.querySelector(selectors.elementFoto);
    list.prepend(element);
    elementPlaceName.textContent = addPopupName.value;
    elementFoto.src = addPopupLink.value;
    elementDel.addEventListener('click', function(){
        element.remove();
    })
    elementLike.addEventListener('click', function(){
        elementLike.classList.toggle(selectors.elementLikeActive);
    })
    closeAddPopup();
    function openFotoPopup() {
        fotoPopup.classList.add(selectors.popupIsOpened);
        fotoPopupName.textContent = elementPlaceName.textContent;
        fotoPopupImg.src = elementFoto.src;
    }
    elementFoto.addEventListener('click', openFotoPopup);
}

addPopupSubmit.addEventListener('click', formSubmit);
addPopup.addEventListener('submit', formSubmit);

function closeFotoPopup() {
    fotoPopup.classList.remove(selectors.popupIsOpened);
}

fotoPopupClose.addEventListener('click', closeFotoPopup);
