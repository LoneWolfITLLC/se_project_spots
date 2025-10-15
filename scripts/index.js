console.log("This is a test of index.js. Hello.");
const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

editProfileBtn.addEventListener("click", function (event) {
  event.preventDefault();
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function (event) {
  event.preventDefault();
  editProfileModal.classList.remove("modal_is-opened");
});

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

newPostBtn.addEventListener("click", function (event) {
  event.preventDefault();
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function (event) {
  event.preventDefault();
  newPostModal.classList.remove("modal_is-opened");
});
