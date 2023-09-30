import imgsDb from "../database/imgsDb.js";

function showImages(result) {
  imgsDb.map((e, i) => {
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    let rndNumber = getRandomInt(-7, 7);
    let img = document.createElement("img");
    img.className = "gallery-img";

    img.id = i;
    img.src = e.src;
    img.alt = e.alt;
    img.height = e.height ? e.height : "300";
    img.style.transform = `rotate(${rndNumber}deg)`;

    imgContainer.appendChild(img);

    setTimeout(function () {
      galeria.appendChild(imgContainer);
    }, i * 1000);
  });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export default showImages;
