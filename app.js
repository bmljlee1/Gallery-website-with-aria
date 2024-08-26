let images = [
  {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Landscape with blue sky and mountains in background",
  },
  {
    url: "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Landscape with blue sky, forest and mountains in background.",
  },
  {
    url: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Landscape with reddish sky and green fields/hills.",
  },
  {
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Landscape with mountains in the background surrounding a lake. A cabin can be seen on the water",
  },
  {
    url: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Landscape at sunset showing a path surrounded by purple flowers leading to a large lake. Mountains can be seen far away in the distance",
  },
];

const thumbnailContainer = document.getElementById("thumbnailContainer");
const displayImage = document.getElementById("displayImage");
const displayImageContainer = document.getElementById("displayImageContainer");

let currentIndex = 0;

function createThumbnails() {
  images.forEach(function (image, index) {
    let imageElement = document.createElement("img");

    imageElement.src = image.url;
    imageElement.alt = image.alt;
    imageElement.setAttribute("role", "button");
    imageElement.setAttribute(
      "aria-label",
      `view larger verson of ${image.alt}`
    );

    imageElement.setAttribute("tabindex", 0);

    imageElement.addEventListener("click", function () {
      console.log(`clicked on ${image.alt}`);
      createBigImage(image);
      currentIndex = index;
    });

    imageElement.addEventListener("keydown", function () {
      if (event.key === "Enter");
      createBigImage(image);
      currentIndex = index;
    });

    // function userInteraction() {
    //   console.log(`clicked on ${image.alt}`);
    //   createBigImage(image);
    // }

    // imageElement.addEventListener("click", userInteraction());

    thumbnailContainer.appendChild(imageElement);
  });
}

function createBigImage(imageParams) {
  displayImage.innerHTML = "";

  const bigImageElement = document.createElement("img");

  bigImageElement.src = imageParams.url;
  bigImageElement.alt = imageParams.alt;
  bigImageElement.setAttribute("role", "img");
  bigImageElement.setAttribute("aria-live", "polite");

  // this is creating the back arrow
  const backArrow = document.createElement("span");
  backArrow.textContent = "<";
  backArrow.classList.add("arrow", "back");
  backArrow.setAttribute("role", "button");
  backArrow.setAttribute("aria-label", "show previous image");
  backArrow.addEventListener("click", showPreviousImage);

  // thisi s creating the forwards arrow

  const forwardArrow = document.createElement("span");
  forwardArrow.textContent = ">";
  forwardArrow.classList.add("arrow", "next");
  forwardArrow.setAttribute("role", "button");
  forwardArrow.setAttribute("aria-label", "show next image");
  forwardArrow.addEventListener("click", showNextImage);

  // appends the images and arrows to DOM
  displayImage.appendChild(bigImageElement);
  displayImage.appendChild(backArrow);
  displayImage.appendChild(forwardArrow);

  bigImageElement.focus();
}

function showPreviousImage() {
  if (currentIndex === 0) {
    currentIndex = images.length - 1; // Wrap to the last image
  } else {
    currentIndex = currentIndex - 1; // Move to the previous image
  }
  createBigImage(images[currentIndex]);
}

function showNextImage() {
  if (currentIndex === images.length - 1) {
    currentIndex = 0; // Wrap to the first image
  } else {
    currentIndex = currentIndex + 1; // Move to the next image
  }
  createBigImage(images[currentIndex]);
}

createThumbnails();
createBigImage(images[0]);
