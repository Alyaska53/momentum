const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

let randomNum = getRandomNum(1, 20);
let sourceImages = localStorage.getItem('sourceImages') || 'GitHub';

function getRandomNum(min, max) {
  let rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}

function getTimeOfDay(hours) {
  const timesOfDay = ['night', 'morning', 'afternoon', 'evening'];
  return timesOfDay[Math.floor(hours / 6)];
}

function setBg() {
  let timeOfDay = getTimeOfDay(hours);
  let stringRandomNum = updateTime(randomNum);

  const img = new Image();
  img.src = `https://raw.githubusercontent.com/Alyaska53/stage1-tasks/assets/images/${timeOfDay}/${stringRandomNum}.jpg`
  img.onload = () => {      
    body.style.backgroundImage = `url(${img.src})`;
  };
}

function getSlideNext() {
  if (randomNum === 20) {
    randomNum = 1;
  } else {
    randomNum++;
  }

  getSourceImages();
}

function getSlidePrev() {
  if (randomNum === 1) {
    randomNum = 20;
  } else {
    randomNum--;
  }

  getSourceImages();
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

function setBgFromApi(imageSrc) {
  const img = new Image();
  img.src = imageSrc;

  img.onload = () => {      
    body.style.backgroundImage = `url(${img.src})`;
  };
}

async function getLinkToImageFromUnsplash() {
  let timeOfDay = getTimeOfDay(hours);
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=PMryUa6ZkUPEss2pHAgUVrrnyQBWeMCBw8aJ_5a6Nl4`;
  const res = await fetch(url);
  const data = await res.json();

  let imageSrc = data.urls.regular;
  setBgFromApi(imageSrc);
}

async function getLinkToImageFromFlickr() {
  let timeOfDay = getTimeOfDay(hours);
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c9b186c6f5afeab4415ac91d88e8e771&tags=${timeOfDay}&extras=url_h&per_page=30&format=json&nojsoncallback=1`;
  const res = await fetch(url);
  const data = await res.json();
  
  let imageArray = data.photos.photo.filter(el => el.width_h >= 1600);

  getRandomNum();
  let imageSrc = imageArray[randomNum].url_h;
  setBgFromApi(imageSrc);
}

function getSourceImages() {
  if (sourceImages === 'GitHub') {
    setBg();
  } else if (sourceImages === 'Unsplash') {
    getLinkToImageFromUnsplash();
  } else {
    getLinkToImageFromFlickr();
  }
}

getSourceImages();