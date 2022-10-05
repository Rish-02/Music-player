var song = document.getElementById('song');
var icon = document.getElementById('icon');
var next = document.getElementById('next');

icon.onclick = function () {
  if (song.paused) {
    song.play();
    icon.src = 'doc/icon1.png';
  } else {
    song.pause();
    icon.src = 'doc/icon.png';
  }
};
var reset = true;
next.onclick = () => {
  if (reset) {
    song.pause();
    song.src = 'doc/Kesariya Tera Ishq Hai Piya.mp3';
    song.play();
    icon.src = 'doc/icon1.png';
    reset = false;
  } else {
    song.pause();
    song.src = 'doc/Baarish Mein Tum - Neha Kakkar.mp3';
    song.play();
    icon.src = 'doc/icon1.png';
    reset = true;
  }
};
