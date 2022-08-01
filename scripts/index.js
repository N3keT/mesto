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
    listCards: '.elements__list',
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
    fotoPopupClose: '#closeFoto',
    addForm: '#addForm'
}

const editButton = document.querySelector(selectors.editButton);
const closeButton = document.querySelector(selectors.closeButton);
const profilePopup = document.querySelector(selectors.profilePopup);
const profileName = document.querySelector(selectors.profileName);
const popupName = document.querySelector(selectors.popupName);
const profileAbout = document.querySelector(selectors.profileAbout)
const popupAbout = document.querySelector(selectors.popupAbout);
const submitButton = document.querySelector(selectors.submitButton);
const listCards = document.querySelector(selectors.listCards);
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
const fotoPopupClose = document.querySelector(selectors.fotoPopupClose);
const addForm = document.querySelector(selectors.addForm);

function createElement(name) {
    const element = templateElement.cloneNode(true);
    const elementPlaceName = element.querySelector(selectors.elementPlaceName);
    const elementDel = element.querySelector(selectors.elementDel);
    const elementLike = element.querySelector(selectors.elementLike);
    const elementFoto = element.querySelector(selectors.elementFoto);
    listCards.prepend(element);
    elementPlaceName.textContent = name.name;
    elementFoto.src = name.link;
    elementFoto.setAttribute('alt', `${elementPlaceName.textContent}`);
    elementDel.addEventListener('click', function(){
        element.remove();
    })
    elementLike.addEventListener('click', function(){
        elementLike.classList.toggle(selectors.elementLikeActive);
    })
    elementFoto.addEventListener('click', function() {
        openPopup(fotoPopup);
        fotoPopupName.textContent = name.name;
        fotoPopupImg.src = name.link;
    });

    return
}

function renderElement(name) {
    createElement(name);
}

initialCards.forEach(createElement);

function openPopup(popup) {
    popup.classList.add(selectors.popupIsOpened);
}

function closePopup(popup) {
    popup.classList.remove(selectors.popupIsOpened);
}

function formProfileSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileAbout.textContent = popupAbout.value;
    closePopup(profilePopup);
}

function formAddSubmit(name) {
    name.preventDefault();
    name.name = addPopupName.value;
    name.link = addPopupLink.value;
    renderElement(name);
    closePopup(addPopup);
}

editButton.addEventListener('click', function() {
    openPopup(profilePopup);
    popupName.value = profileName.textContent;
    popupAbout.value = profileAbout.textContent;
});

closeButton.addEventListener('click', function() {
    closePopup(profilePopup);
});

submitButton.addEventListener('click', formProfileSubmit);
profilePopup.addEventListener('submit', formProfileSubmit);

addButton.addEventListener('click', function() {
    openPopup(addPopup);
});

closeAdd.addEventListener('click', function() {
    closePopup(addPopup);
    addForm.reset();
});

addPopupSubmit.addEventListener('click', formAddSubmit);
addPopup.addEventListener('submit', formAddSubmit);


fotoPopupClose.addEventListener('click', function() {
    closePopup(fotoPopup);
});
