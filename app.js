let images = [
  {
    url: "https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Rabbit wearing yellow sunglasses",
  },
  {
    url: "https://images.unsplash.com/photo-1496843916299-590492c751f4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A pineapple wearing sunglasses",
  },
  {
    url: "https://images.unsplash.com/photo-1697659625406-3006ec879fe1?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "sunglasses by the pool",
  },
  {
    url: "https://images.pexels.com/photos/5732458/pexels-photo-5732458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Dog in sunglasses",
  },
  {
    url: "https://images.pexels.com/photos/17317199/pexels-photo-17317199/free-photo-of-cat-in-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "cat in sunglasses",
  },
];

const thumbnailContainer = document.getElementById("thumbnailContainer");
const displayImage = document.getElementById("displayImage");

function createThumbnails() {
  images.forEach(function (image) {
    let imageElement = document.createElement("img");

    imageElement.src = image.url;
    imageElement.alt = image.alt;

    imageElement.setAttribute("tabindex", 0);

    imageElement.addEventListener("click", function () {
      console.log(`clicked on ${image.alt}`);
      createBigImage(image);
    });

    thumbnailContainer.appendChild(imageElement);
  });
}
createThumbnails();

function createBigImage(imageParams) {
  displayImage.innerHTML = "";

  const bigImageElement = document.createElement("img");

  bigImageElement.src = imageParams.url;
  bigImageElement.alt = imageParams.alt;
  displayImage.appendChild(bigImageElement);
}
