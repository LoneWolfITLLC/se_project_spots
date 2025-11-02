const initialCards = [
  {
    name: "Val Thorens",
    link: "images/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant Terrace",
    link: "images/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "images/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "images/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "images/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "images/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileNameInput = document.querySelector("#profile-name-input");
const editProfileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const editProfileForm = editProfileModal.querySelector(".modal__form");
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostImageLinkInput = document.querySelector("#image-link-input");
const newPostCaptionInput = document.querySelector("#caption-input");
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

function closeModalWithAnimation(modal) {
  if (!modal || modal.classList.contains("modal--closing")) return;
  modal.querySelectorAll(".modal__container").forEach((container) => {
    container.classList.add("modal__container--closing");
  });
  modal.classList.add("modal--closing");
  modal.addEventListener(
    "animationend",
    () => {
      modal.classList.remove("modal--closing");
      modal.querySelectorAll(".modal__container").forEach((container) => {
        container.classList.remove("modal__container--closing");
      });
      modal.classList.remove("modal_is-opened");
    },
    { once: true }
  );
}

function openModalWithAnimation(modal) {
  modal.classList.add("modal_is-opened");
  modal.querySelectorAll(".modal__container").forEach((container) => {
    container.classList.add("modal__container--opening");
  });
  modal.addEventListener(
    "animationend",
    () => {
      modal.querySelectorAll(".modal__container").forEach((container) => {
        container.classList.remove("modal__container--opening");
      });
    },
    { once: true }
  );
}

editProfileBtn.addEventListener("click", function (event) {
  event.preventDefault();
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModalWithAnimation(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", function (event) {
  event.preventDefault();
  closeModalWithAnimation(editProfileModal);
});

newPostBtn.addEventListener("click", function (event) {
  event.preventDefault();
  openModalWithAnimation(newPostModal);
});

newPostCloseBtn.addEventListener("click", function (event) {
  event.preventDefault();
  closeModalWithAnimation(newPostModal);
});

function handleEditProfileSubmit(event) {
  event.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModalWithAnimation(editProfileModal);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleNewPostSubmit(event) {
  event.preventDefault();
  console.log("New Post Image Link: " + newPostImageLinkInput.value);
  console.log("New Post Caption: " + newPostCaptionInput.value);
  closeModalWithAnimation(newPostModal);
}

newPostForm.addEventListener("submit", handleNewPostSubmit);

initialCards.forEach(function (item) {
  console.log(item.name);
  console.log(item.link);
});
