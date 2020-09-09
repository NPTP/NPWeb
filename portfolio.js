// ------------------------------------
// PORTFOLIO PAGE script
// Uses the "games" array from portfolioGames.js
// ------------------------------------

// Time between images in portfolio item auto-slideshow
const SLIDESHOW_TIMEOUT_VAL = 2000;

// Get viewport height and width dependent on CSS compat
const docElement =
  document.compatMode === "CSS1Compat"
    ? document.documentElement
    : document.body;
const viewportHeight = docElement.clientHeight;
const viewportWidth = docElement.clientWidth;

let displaying = false;

function displayImages(images) {
  let showIndex = 0;
  for (let i = 0; i < images.length; i++) {
    if (images[i].className === "show-img") {
      images[i].className = "hide-img";
      if (i == images.length - 1) {
        showIndex = 0;
      } else {
        showIndex = i + 1;
      }
      break;
    }
  }
  images[showIndex].className = "show-img";
  if (displaying) {
    call = setTimeout(function () {
      displayImages(images);
    }, SLIDESHOW_TIMEOUT_VAL);
  }
}

function displayAnimation(card) {
  let images = card.querySelectorAll("img");
  for (let i = 0; i < images.length; i++) {
    images[i].className = "hide-img";
  }
  let video = card.querySelectorAll("video");
  video[0].className = "show-vid";
  video[0].play();
}

function hideAnimation(card) {
  let video = card.querySelectorAll("video");
  video[0].className = "hide-vid";
  let images = card.querySelectorAll("img");
  images[0].className = "show-img";
}

function pauseAnimation(card) {
  let video = card.querySelectorAll("video");
  video[0].pause();
}

function cardMouseEnter(e) {
  const card = e.target;
  if (games[card.id].video.length === 0) {
    displaying = true;
    let images = card.querySelectorAll("img");
    displayImages(images);
  } else {
    displayAnimation(card);
  }
}

function cardMouseLeave(e) {
  const card = e.target;
  if (games[card.id].video.length === 0) {
    displaying = false;
    clearTimeout(call);
  } else {
    pauseAnimation(card);
  }
}

gamesList = document.getElementById("games");
for (let i = 0; i < games.length; i++) {
  let card = document.createElement("div");
  card.id = i; // Number each card with its index in the list
  if (i === 0) {
    card.classList.add("card");
    card.classList.add("card0-anim");
  } else {
    card.classList.add("hide-card");
  }
  let blurb = "";
  for (let j = 0; j < games[i].blurbLines.length; j++) {
    blurb = blurb + games[i].blurbLines[j];
    if (j < games[i].blurbLines.length - 1) {
      blurb = blurb + "</br></br>";
    }
  }
  let links = "";
  for (let k = 0; k < games[i].linkURLs.length; k++) {
    links =
      links +
      `<a href="${games[i].linkURLs[k]}" target="_blank" class="vwtext-24">${games[i].linkTexts[k]}</a>`;
    if (k < games[i].linkURLs.length - 1) {
      links = links + "</br>";
    }
  }
  let images = "";
  for (let l = 0; l < games[i].images.length; l++) {
    if (l === 0) {
      images = images + `<img class="show-img" src="${games[i].images[l]}" />`;
    } else {
      images = images + `<img class="hide-img" src="${games[i].images[l]}" />`;
    }
  }
  let video = "";
  if (games[i].video.length > 0) {
    video = `<video width="640" height="480" class="hide-vid" muted loop autoplay>
    <source src="${games[i].video[0]}" type="video/webm">
  </video>`;
  } else {
    video = "";
  }
  card.innerHTML = `<div class="card-inner">
    <div class="card-row1">
      <div class="card-row1-left">
        <span class="bold vwtext-36">${games[i].name}</br>
      </div>
      <div class="card-row1-right">
        <span class="italic vwtext-24"> Platform: ${games[i].platform}</br>
      </div>
    </div>

    <div class="card-row2">
      <div class="card-row2-left">
        ${images}
        ${video}
      </div>
      <div class="card-row2-right">
        <div class="card-row2-right-top">
          <span class="vwtext-20">${blurb}</span>
        </div>
        <div class="card-row2-right-bottom">
          ${links}
        </div>
      </div>
    </div>
  </div>`;

  card.addEventListener("mouseenter", cardMouseEnter);
  card.addEventListener("mouseleave", cardMouseLeave);

  gamesList.appendChild(card);
}

// Listen for scroll events
document.addEventListener("scroll", appear);

// Make hidden divs change class when SCROLLED into view
function appear() {
  for (let i = 1; i < games.length; i++) {
    const card = document.getElementById(i.toString());
    // console.log(card);
    const top = card.getBoundingClientRect().top;
    // console.log(viewportHeight);
    // if (top + viewportHeight / 6 <= viewportHeight) {
    if (top <= viewportHeight) {
      card.classList.remove("hide-card");
      card.classList.add("card");
      card.classList.add("card-appear");
      if (i === games.length - 1) {
        document.removeEventListener("scroll", appear);
        // console.log("Removed event listener");
      }
    }
  }
}

// Call to make hidden elements appear if they're ALREADY in view.
// The first card has a class set above such that it will always appear
// automatically regardless of this call.
appear();
