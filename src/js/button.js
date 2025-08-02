function playAudio() {
  var audio = document.getElementById("myAudio");
  if (audio.paused) {
    audio.play();
  }
}

function startBirthdaySurprise() {
  const startOverlay = document.getElementById("startOverlay");
  startOverlay.classList.add("hidden");

  playAudio();

  startSlideTransitions();

  const firstSlide = document.querySelector(".first--slide");
  firstSlide.classList.add("started");
}
