const btn1 = document.querySelector(".btn_1");
const btn2 = document.querySelectorAll(".btn-paket");
const modal1 = document.querySelector(".modal");
const modal1Form = document.querySelector(".zapisat-kurs-form");
const modal2 = document.querySelector(".modal-price");
const overlay = document.querySelector(".overlay");
const zayavkaBtn = document.querySelector(".input-bottom.color");

function toggleModal(modal, isOpen) {
  const action = isOpen ? "add" : "remove";
  modal.classList[action]("open");
  overlay.classList[action]("open");
}
btn1.addEventListener("click", () => toggleModal(modal1, true));
btn2.forEach((btn) =>
  btn.addEventListener("click", () => toggleModal(modal2, true))
);
modal1Form.addEventListener("submit", (e) => {
  e.preventDefault();
  toggleModal(modal1, false);
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleModal(modal1, false);
    toggleModal(modal2, false);
  }
});
overlay.addEventListener("click", () => {
  toggleModal(modal1, false);
  toggleModal(modal2, false);
});
zayavkaBtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".input-bottom");
  inputs.forEach((input) => {
    input.value = "";
  });
});
