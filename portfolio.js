// ------------------------------------
// PORTFOLIO PAGE script
// ------------------------------------

// Get viewport height and width dependent on CSS compat
const docElement =
  document.compatMode === "CSS1Compat"
    ? document.documentElement
    : document.body;
const viewportHeight = docElement.clientHeight;
const viewportWidth = docElement.clientWidth;

// Define games in the list here to auto-populate page
const games = [
  {
    name: "DEADWOOD DUEL",
    platform: "Stencyl",
    images: ["images/games/dd/dd01.png", "images/games/dd/dd02.png"],
    video: ["images/games/dd/dd_gameplay.webm"],
    blurbLines: [
      "A reflex shooter set in the Old West.",
      "Choose your difficulty, watch the clock, and be quick - or be dead.",
      "I created every part of the game: design, gameplay, and 100% of the assets (art, animation, sound and music).",
    ],
    linkURLs: ["https://itch.io/", "data/downloads/placeholder_download.zip"],
    linkTexts: ["Play on itch.io", "Download Windows executable"],
  },
  {
    name: "Mr. Placeholder",
    platform: "PlaceHeld",
    images: ["images/index_placeholder.jpg", "images/index_placeholder2.jpg"],
    video: [],
    blurbLines: ["I am a placeholder.", "That's right - I hold a place!"],
    linkURLs: [
      "https://www.google.ca/",
      "https://www.rockpapershotgun.com/",
      "images/logo.png",
    ],
    linkTexts: ["Go to Google", "Go to RPS", "Go to local image"],
  },
];

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
    }, 1000);
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
  console.log(card.id);
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
  let gameCard = document.createElement("div");
  gameCard.id = i; // Number each card with its index in the list
  gameCard.classList.add("card");
  gameCard.classList.add("anim1");
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
    video = `<video width="640" height="480" class="hide-vid" loop autoplay>
    <source src="${games[i].video[0]}" type="video/webm">
  </video>`;
  } else {
    video = "";
  }
  gameCard.innerHTML = `<div class="card-inner">
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

  gameCard.addEventListener("mouseenter", cardMouseEnter);
  gameCard.addEventListener("mouseleave", cardMouseLeave);

  gamesList.appendChild(gameCard);
}
