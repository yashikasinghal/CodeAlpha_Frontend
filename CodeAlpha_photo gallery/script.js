const subFilters = document.getElementById("subFilters");
const filterMap = {
  nature: ["mountains", "forest", "birds", "animals"],
  vehicles: ["cars", "supercars", "bikes"],
  food: ["dessert", "streetfood"],
  sports: ["basketball", "tennis"]
};
function filterCategory(category, button){

  document.querySelectorAll(".main-filters button")
    .forEach(btn => btn.classList.remove("active"));

  button.classList.add("active");

  subFilters.innerHTML = "";

  if(category !== "all"){

    filterMap[category].forEach(sub => {

      const btn = document.createElement("button");

      btn.innerText =
        sub.charAt(0).toUpperCase() + sub.slice(1);

      btn.onclick = () => filterSub(sub, btn);

      subFilters.appendChild(btn);

    });
  }

  const images = document.querySelectorAll(".image");

  images.forEach(image => {

    if(category === "all"){
      image.style.display = "block";
    }
    else{
      image.style.display =
        image.classList.contains(category)
        ? "block"
        : "none";
    }

  });

}

function filterSub(subCategory, button){

  document.querySelectorAll(".sub-filters button")
    .forEach(btn => btn.classList.remove("active"));

  button.classList.add("active");

  const images = document.querySelectorAll(".image");

  images.forEach(image => {

    image.style.display =
      image.classList.contains(subCategory)
      ? "block"
      : "none";

  });

}
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

  const value = searchInput.value.toLowerCase();

  const images = document.querySelectorAll(".image");

  images.forEach(image => {

    const classes = image.className.toLowerCase();

    image.style.display =
      classes.includes(value)
      ? "block"
      : "none";

  });

});
const galleryImages = document.querySelectorAll(".image img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

galleryImages.forEach(img => {

  img.addEventListener("click", () => {

    lightbox.style.display = "flex";

    lightboxImg.src = img.src;

  });

});

document.querySelector(".close")
  .addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

  if(e.target !== lightboxImg){
    lightbox.style.display = "none";
  }

});