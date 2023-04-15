export function modalView() {

    let main = document.querySelector("main");
    let target = document.querySelectorAll(".galeria img");

    target.forEach(e => {
        e.addEventListener("click", function () {

            let modalSection = document.createElement("section");
            modalSection.classList.add("modal");

            let modalContainer = document.createElement("div");
            modalContainer.classList.add("modal__container");

            let closeModal = document.createElement("span");
            closeModal.id = "close";
            closeModal.innerHTML = `X`;

            modalContainer.innerHTML = `<img src="${e.src}" alt="${e.alt}">`;

            modalSection.appendChild(modalContainer);
            modalSection.appendChild(closeModal);

            modalContainer.style.transform = "scale(0.0)";
            setTimeout(() => {
                modalContainer.style.transform = "scale(1.0)"
            }, 1);

            main.appendChild(modalSection);

            document.querySelector("#close").addEventListener("click", function () {
                main.removeChild(modalSection);
            })
        });
    });
}