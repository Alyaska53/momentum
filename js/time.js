// create objects with russian and english words;

const months = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  ru: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
}

const days = {
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
}

const greetingTranslation = {
  en: ['Good night', 'Good morning', 'Good afternoon', 'Good evening'],
  ru: ['Доброй ночи', 'Доброе утро', 'Добрый день', 'Добрый вечер']
}

// set variables

const fullTime = document.querySelector('.time');
const fullDate = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const guestName = document.querySelector('.name');
const language = document.querySelector('.language');

let pageLanguage = localStorage.getItem('language') || 'en';

let MONTHS = months.en;
let DAYS = days.en;
let GREETINGS = greetingTranslation.en;

// clock and date methods

let seconds;
let mins;
let hours;

function updateTime(time) {
  return (time < 10) ? '0' + time : time;
}

function setClockTime(presentTime, seconds, mins, hours) {
  const digitalSeconds = updateTime(seconds);
  const digitalMins = updateTime(mins);
  const digitalHours = updateTime(hours);

  const dayOfMonth = presentTime.getDate();
  const month = presentTime.getMonth();
  const day = presentTime.getDay();
  
  fullTime.innerText = digitalHours + ':' + digitalMins + ':' + digitalSeconds;
  
  if (pageLanguage === 'en') {
    fullDate.innerText = DAYS[day] + ', ' + MONTHS[month] + ' ' + dayOfMonth;
  } else {
    fullDate.innerText = DAYS[day] + ', ' + dayOfMonth + ' ' + MONTHS[month];
  }
}

function showTime() {
  const presentTime = new Date();

  seconds = presentTime.getSeconds();
  mins = presentTime.getMinutes();
  hours = presentTime.getHours();

  getLanguage();
  setClockTime(presentTime, seconds, mins, hours);
  setGreeting(hours);
}

showTime();
let showTimeInterval = setInterval(showTime, 1000);

// greeting methods

function getLanguage() {
  MONTHS = (pageLanguage === 'en') ? months.en : months.ru;
  DAYS = (pageLanguage === 'en') ? days.en : days.ru;
  GREETINGS = (pageLanguage === 'en') ? greetingTranslation.en : greetingTranslation.ru;
  guestName.placeholder = (pageLanguage === 'en') ? '[Enter name]' : '[Введите имя]';
}

function setGreeting(hours) {
  greeting.innerText = GREETINGS[Math.floor(hours / 6)];
}

function setLocalStorage() {
  localStorage.setItem('name', guestName.value);
}

function getLocalStorage() {
  if (localStorage.getItem('name')) {
    guestName.value = localStorage.getItem('name');
  }
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);