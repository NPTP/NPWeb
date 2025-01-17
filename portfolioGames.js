// PORTFOLIO Games List
//
// Contains all games/projects information used by portfolio.js to populate the
// portfolio page.
//
// Add and edit items as necessary. If a video is defined for any game, it will
// be shown instead of the given images.

const games = [
  {
    name: "LAYA'S HORIZON",
    platform: "Unity, C#, FMOD",
    images: [
      "images/games/laya/laya01.png",
      "images/games/laya/laya02.png",
      "images/games/laya/laya03.png"
    ],
    video: ["images/games/laya/laya-video.mp4"],
    blurbLines: [
      '"Master the art of flying. Dive off mountains, weave across forests and glide over rivers to unlock new abilities as you explore a vast, peaceful world."',
      "An open-world game running on your phone created by Snowman, where I worked for 2 years until the completion of the game, creating the game's LOD system, implementing complex audio, and other systems. I even recorded the Snowman staff for NPC character voices, and voiced one myself!",
      "Released through the Netflix games platform."
    ],
    linkURLs: ["https://apps.apple.com/ca/app/layas-horizon/id1615116545",
      "https://play.google.com/store/apps/details?id=com.netflix.NGP.SorasHorizon&hl=en_US",
    ],
    linkTexts: ["Laya's Horizon on the App Store", "Laya's Horizon on the Google Play Store"],
  },
  {
    name: "INHERITORS",
    platform: "Unity, C#",
    images: [
      "images/games/inheritors/inheritors01.png",
      "images/games/inheritors/inheritors02.png"
    ],
    video: ["images/games/inheritors/inheritors-video.mp4"],
    blurbLines: [
      'Inheritors is a brief look at the "uncontacted" Akuntsu tribe in the southern Brazilian Amazon, what it means to give up heritage, and what their story means for similar tribes in the Amazon.',
      "The game features persistent terrain/environment manipulation, and recording & playback of past player actions, as you lay down a short heritage of your own.",
      "Submitted to the Games For Change Festival 2021."
    ],
    linkURLs: ["https://nickperrin.itch.io/inheritors"
    ],
    linkTexts: ["Play on itch.io", "Source on GitHub"],
  },
  {
    name: "GET HOME",
    platform: "Unity, C#",
    images: [
      "images/games/gethome/gethome01.png",
      "images/games/gethome/gethome02.png"
    ],
    video: ["images/games/gethome/gethome-video.mp4"],
    blurbLines: [
      "Get Home was built with a team under the Red Cassette Studios banner.",
      "A puzzle game set in deep space, where you must enlist the aid of repair bots and a gravity manipulator device to uncover the mystery of the reactor and the missing crew.",
      "Get Home features full 3D gravity flipping mechanics, and the ability to control asymmetrical repair bots to overcome puzzles.",
      "Submitted to the Independent Games Festival 2021."
    ],
    linkURLs: [
      "https://red-cassette.itch.io/get-home"
    ],
    linkTexts: ["Play on itch.io", "Source on GitHub"],
  },
  {
    name: "RAYLTIME",
    platform: "C++ with Eigen & SDL2",
    images: [
      "images/games/rayltime/rt01.png",
      "images/games/rayltime/rt02.png",
      "images/games/rayltime/rt03.png",
      "images/games/rayltime/rt04.png",
    ],
    video: ["images/games/rayltime/rt_video.webm"],
    blurbLines: [
      "A simple interactive ray tracer running on the CPU and built on top of the Eigen linear algebra library.",
      'RaylTime allows you to move around raytraced scenes in real-time, and features a text-based "level editing" system allowing you to quickly make new scenes which you can move around in.',
      "RaylTime employs a number of raytracing optimizations including bounding volume hierarchies and phong exponentiation thresholding to keep things running in real time.",
    ],
    linkURLs: [
      "data/downloads/RaylTime_Winx86-64.zip",
      "https://github.com/NPTP/RaylTime",
    ],
    linkTexts: ["Download for Windows", "Source on GitHub"],
  },
  {
    name: "DEADWOOD DUEL",
    platform: "Stencyl",
    images: [
      "images/games/dd/dd01.png",
      "images/games/dd/dd02.png",
      "images/games/dd/dd03.png",
      "images/games/dd/dd04.png",
    ],
    video: [],
    blurbLines: [
      "A reflex shooter set in the Old West.",
      "Choose your difficulty, watch the clock, and be quick - or be dead.",
      "I created every part of the game: design, gameplay, and 100% of the assets (art, animation, sound and music).",
    ],
    linkURLs: ["https://nickperrin.itch.io/deadwoodduel"],
    linkTexts: ["Play on itch.io"],
  },
  {
    name: "GAME JAMS",
    platform: "HTML5 / Javascript",
    images: [
      "images/games/gj/gj01.png",
      "images/games/gj/gj02.png",
      "images/games/gj/gj03.png",
      "images/games/gj/gj04.png",
      "images/games/gj/gj05.jpg",
    ],
    video: [],
    blurbLines: [
      `For several game jams in Toronto, I've worked with a team consisting of a designer, an artist and a programmer, all of whom have experience either in AAA or indie game production. They're a truly talented bunch and it's been a privilege to do these jams with them under the banner of "ButterBrains."`,
      "We put our heads together and designed the games as a group. Additionally, I did all sound and music, and some level design.",
    ],
    linkURLs: [
      "https://butterbrains.itch.io/relapse",
      "https://butterbrains.itch.io/jelly-jelly",
      "https://butterbrains.itch.io/battlebeans",
      "https://globalgamejam.org/2016/games/combust-move",
    ],
    linkTexts: [
      "Play (R)elapse on itch.io",
      "Play Jelly-Jelly on itch.io",
      "Play BattleBeans (2-player) on itch.io",
      "Play Combust-a-Move (2-player) on GGJ",
    ],
  }
];
