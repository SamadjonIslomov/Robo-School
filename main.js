const btn1 = document.querySelector(".btn_1");
const btn2 = document.querySelectorAll(".btn-paket");
const modal1 = document.querySelector(".modal");
const modal2 = document.querySelector(".modal-price");
const overlay = document.querySelector(".overlay");

function toggleModal(modal, isOpen) {
  const action = isOpen ? "add" : "remove";
  modal.classList[action]("open");
  overlay.classList[action]("open");
}

function handleFormSubmit(e, modal) {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const lastName = document.querySelector("#LastName").value;
  const telNumber = document.querySelector("#telNumber").value;
  console.log(
    "Ism:",
    name,
    "Familiya:",
    lastName,
    "Telefon raqami:",
    telNumber
  );
  toggleModal(modal, false);
}

btn1.addEventListener("click", () => toggleModal(modal1, true));
btn2.forEach((btn) =>
  btn.addEventListener("click", () => toggleModal(modal2, true))
);

[modal1, modal2].forEach((modal) => {
  modal.addEventListener("submit", (e) => handleFormSubmit(e, modal));
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    [modal1, modal2].forEach((modal) => toggleModal(modal, false));
  }
});

overlay.addEventListener("click", () => {
  [modal1, modal2].forEach((modal) => toggleModal(modal, false));
});

document.querySelector(".input-bottom.color").addEventListener("click", () => {
  document.querySelectorAll(".input").forEach((input) => {
    input.value = "";
  });
});
document.querySelector(".input-bottom.color").addEventListener("click", () => {
  document.querySelectorAll(".input-bottom").forEach((input) => {
    if (input.type !== "button") {
      input.value = "";
    }
  });
});
