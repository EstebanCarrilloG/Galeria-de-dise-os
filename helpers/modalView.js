export function modalView() {
  let main = document.querySelector("main");

  main.addEventListener("click", function (e) {
    if (e.target.className === "close") {
      main.removeChild(modal);
    }

    if (e.target.className === "gallery-img") {
      e = e.target;
      console.log(true);
      let modalSection = document.createElement("section");
      modalSection.classList.add("modal");
      modalSection.id = "modal";

      let modalContainer = document.createElement("div");
      modalContainer.classList.add("modal__container");

      let closeModal = document.createElement("span");
      closeModal.className = "close";
      closeModal.id = "close";
      closeModal.innerHTML = `X`;

      modalContainer.innerHTML = `<img src="${e.src}" alt="${e.alt}">`;

      modalSection.appendChild(modalContainer);
      modalSection.appendChild(closeModal);

      modalContainer.style.transform = "scale(0.0)";
      setTimeout(() => {
        modalContainer.style.transform = "scale(1.0)";
      }, 1);

      main.appendChild(modalSection);
    }
  });
}
