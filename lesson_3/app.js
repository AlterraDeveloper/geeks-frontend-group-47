const appContainer = document.querySelector(".container");
const starsContainer = document.querySelector(".stars");

// <i class="fa-solid fa-star active"></i>
function Star(index, isActive) {
  const icon = document.createElement("i");
  icon.classList.add("fa-solid");
  icon.classList.add("fa-star");
  if (isActive) icon.classList.add("active");
  icon.setAttribute("data-index", index);
  return icon;
}

function Rating(activeStars) {
  starsContainer.innerHTML = "";
  const MaxLimit = 5;
  for (let i = 0; i < MaxLimit; i++) {
    const isStarActive = activeStars > i;
    const star = Star(i + 1, isStarActive);
    starsContainer.append(star);
  }
}

Rating(0);

appContainer.onclick = function (event) {
  // anonymous function
  // const starIndex = event.target.getAttribute("data-index");
  const starIndex = Number(event.target.dataset.index ?? 0);
  Rating(starIndex);
  if(starIndex === 5) fireConfetti();
};

// event propagation - распространение событий

function fireConfetti() {
  confetti({
    particleCount: 200,
    angle: 60,
    spread: 80,
    origin: { x: 0 },
    gravity: 0.4
  });

  confetti({
    particleCount: 200,
    angle: 120,
    spread: 80,
    origin: { x: 1 },
    gravity: 0.4
  });
}
