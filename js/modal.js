const modalBtn = document.querySelector(".modal__button"),
  courseBtn = document.querySelector(".course__button"),
  modal = document.querySelector(".modal");

modalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

courseBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});
modal.addEventListener("click", (event) => {
  const modalContent = event.target.closest(".modal__inner");
  if (!modalContent) {
    modal.style.display = "";
  }
});
