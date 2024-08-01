const starsContainer = document.getElementById("stars_container");
const starsList = document.querySelectorAll(".star");
const ratingValueSpan = document.querySelector("#rating_value");

function resetStars() {
  starsList.forEach((star) => {
    star.classList.remove("orange");
  });
}

function fillStars(starsCount) {
  resetStars();
  for (let i = 0; i < starsCount; i++) {
    starsList[i].classList.add("orange");
  }
}

starsContainer.addEventListener("click", (e) => {
  const elem = e.target;
  if (elem.tagName === "SPAN" && elem.hasAttribute("idx")) {
    const starsCount = parseInt(elem.getAttribute("idx"));
    fillStars(starsCount);
    ratingValueSpan.textContent = starsCount;
  }
});
starsContainer.addEventListener("mouseover", (e) => {
  const elem = e.target;
  if (elem.tagName === "SPAN" && elem.hasAttribute("idx")) {
    const starsCount = parseInt(elem.getAttribute("idx"));
    fillStars(starsCount);
  }
});
starsContainer.addEventListener("mouseleave", () => {
  const starsCount = parseInt(ratingValueSpan.textContent.trim());
  fillStars(starsCount);
});