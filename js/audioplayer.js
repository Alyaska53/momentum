import playListEN from './playlist.js';

// set variables

const audio = document.querySelector('.audio');
const playBtn = document.querySelector('.play');
const nextBtn = document.querySelector('.play-next');
const prevBtn = document.querySelector('.play-prev');
const playListContainer = document.querySelector('.play-list');
const trackName = document.querySelector('.track-name');
const presentTrackTime = document.querySelector('.present-track-time');
const totalTrackTime = document.querySelector('.total-track-time');
const trackTimeline = document.querySelector('.timeline');
const trackProgress = document.querySelector('.progress');
const playlistBtn = document.querySelector('.playlist-btn');
const volumeBtn = document.querySelector('.volume-btn');
const volumeLine = document.querySelector('.volume-line');
const volumeProgress = document.querySelector('.volume-progress');

for (let i = 0; i < playListEN.length; i++) { // create playlist
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.innerText = playListEN[i].title;
  playListContainer.append(li);
}

const playListItems = document.querySelectorAll('.play-item');

audio.volume = 0.75;
let isPlay = false;
let playNum = 0;
let newVolume = audio.volume;
let lastVolume = audio.volume;

// audio player functions

function playAudio() {
  if (!isPlay) {
    audio.play();
    isPlay = true;
    playListItems[playNum].classList.add('item-active');
    setTrackName();
    updateProgressLine();
  } else {
    pauseAudio()
  } 
}

function toggleBtn() {
  playBtn.classList.toggle('pause');
  playAudio();
}

function setTrackName() {
  trackName.innerText = playListEN[playNum].title;
  totalTrackTime.innerText = playListEN[playNum].duration;
}

function switchTrack() {
  if (isPlay) {
    audio.pause();
    isPlay = false;
    playBtn.classList.remove('pause');
    playAudio();
    playBtn.classList.add('pause');
  } else {
    playAudio();
    playBtn.classList.add('pause');
  }

  playListItems[playNum].classList.add('item-active');
}

function updateTrackSrc() {
  audio.src = playListEN[playNum].src;
  audio.currentTime = 0;
}

function playNext() {
  playListItems[playNum].classList.remove('item-active');
  (playNum === playListEN.length - 1) ? playNum = 0 : playNum++;
  updateTrackSrc();
  switchTrack();
}

function playPrev() {
  playListItems[playNum].classList.remove('item-active');
  (playNum === 0) ? playNum = playListEN.length - 1 : playNum--;
  updateTrackSrc();
  switchTrack();
}

playBtn.addEventListener('click', toggleBtn);
nextBtn.addEventListener('click', playNext);
prevBtn.addEventListener('click', playPrev);
audio.addEventListener('ended', playNext);

function pauseAudio() {
  audio.pause();
  isPlay = false;
  playListItems[playNum].classList.remove('item-active');
}

for (let i = 0; i < playListItems.length; i++) {
  playListItems[i].addEventListener('click', () => {
    if (!isPlay) {
      playNum = i;
      updateTrackSrc();
      toggleBtn();
    } else {
      if (playListItems[i].classList.contains('item-active')) {
        pauseAudio();
        playBtn.classList.remove('pause');
      } else {
        pauseAudio();
        playNum = i;
        updateTrackSrc();
        playAudio();
      }
    }
  });
}

// create advanced audio player

function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;

  return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
}

function updateProgressLine() {
  setInterval(() => {
    trackProgress.style.width = audio.currentTime / audio.duration * 100 + "%";
    presentTrackTime.textContent = getTimeCodeFromNum(audio.currentTime);
  }, 500);
}

trackTimeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(trackTimeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

volumeBtn.addEventListener('click', () => { 
  if (audio.volume < 0.01) {
    volumeBtn.classList.remove('mute');
    audio.volume = lastVolume;
    volumeProgress.style.width = audio.volume * 100 + '%';
  } else {
    lastVolume = audio.volume;
    audio.volume = 0;
    volumeBtn.classList.add('mute');
    volumeProgress.style.width = audio.volume * 100 + '%';
  } 
});

volumeLine.addEventListener('click', e => {
  const volumeLineWidth = window.getComputedStyle(volumeLine).width;
  lastVolume = audio.volume;
  newVolume = e.offsetX / parseInt(volumeLineWidth);
  audio.volume = newVolume;
  volumeProgress.style.width = newVolume * 100 + '%';

  if (audio.volume == 0.00) {
    volumeBtn.classList.add('mute');
  } else {
    volumeBtn.classList.remove('mute');
  }
}, false);

playlistBtn.addEventListener('click', () => { 
  playListContainer.classList.toggle('play-list-visible');
});

// start the audio player on page load

setTrackName();
updateTrackSrc();
updateProgressLine();