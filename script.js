<script>
let musicEnabled = false;

function enableMusic() {
  const music = document.getElementById("music");
  music.volume = 0.7;

  music.play()
    .then(() => {
      musicEnabled = true;
      alert("Sound enabled 🎶");
    })
    .catch(() => {
      alert("Please tap again to allow sound 🎵");
    });
}

function startSurprise() {
  document.getElementById("questionBox").classList.remove("hidden");

  if (!musicEnabled) {
    alert("Please tap 'Enable sound' first 🎵");
  }
}

function yesClicked() {
  document.getElementById("questionBox").classList.add("hidden");
  document.getElementById("finalBox").classList.remove("hidden");
}

function noClicked() {
  alert("There is no such option 😌❤️");
}
</script>
