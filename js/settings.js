// const state = {
//   language: 'en',
//   photoSource: 'github',
//   blocks: ['time', 'date','greeting', 'quote', 'weather', 'audio']
// }

const settingsBtn = document.querySelector('.settings-btn');
const settings = document.querySelector('.settings-container');
const closeBtn = document.querySelector('.close-btn');
const visible = document.querySelectorAll('.visible-btn');
const english = document.querySelector('.english');
const russian = document.querySelector('.russian');
const sourcesItems = document.querySelectorAll('.source-item');
const playerContainer = document.querySelector('.player');
const weatherContainer = document.querySelector('.weather');
const greetingContainer = document.querySelector('.greeting-container');
const quoteContainer  = document.querySelector('.quote-container');
const playerSettingsText = document.querySelector('.audioplayer-visible');
const weatherSettingsText = document.querySelector('.weather-visible');
const timeSettingsText = document.querySelector('.time-visible');
const dateSettingsText = document.querySelector('.date-visible');
const greetingSettingsText = document.querySelector('.greeting-visible');
const quoteSettingsText = document.querySelector('.quote-visible');
const imageSourceText = document.querySelector('.image-source-text');

const sourcesNames = ['GitHub', 'Unsplash', 'Flickr'];
const elementsForRemoving = [playerContainer, weatherContainer, fullTime, fullDate, greetingContainer, quoteContainer];

sourcesNames.forEach((el, index) => {
  if (el === sourceImages) {
    sourcesItems[index].classList.add('source-active');
  }
});

function showSettings() {
  event.stopPropagation();
  settings.classList.toggle('settings-visible');
}

document.addEventListener("click", () => {
  if (!settings.contains(event.target) && settings.classList.contains('settings-visible')) showSettings()
})

settingsBtn.addEventListener('click', () => {
  showSettings();
});

closeBtn.addEventListener('click', () => {
  settings.classList.toggle('settings-visible');
});

if (pageLanguage === 'en') {
  english.classList.add('active-language');
  russian.classList.remove('active-language');
} else {
  russian.classList.add('active-language');
  english.classList.remove('active-language');
}

function changeSettingsLanguage() {
  if (pageLanguage === 'en') {
    playerSettingsText.innerText = 'Audio player';
    weatherSettingsText.innerText = 'Weather';
    timeSettingsText.innerText = 'Time';
    dateSettingsText.innerText = 'Date';
    greetingSettingsText.innerText = 'Greeting';
    quoteSettingsText.innerText = 'Quote';
    imageSourceText.innerText = 'Image source';
  } else {
    playerSettingsText.innerText = 'Аудиоплеер';
    weatherSettingsText.innerText = 'Погода';
    timeSettingsText.innerText = 'Время';
    dateSettingsText.innerText = 'Дата';
    greetingSettingsText.innerText = 'Приветствие';
    quoteSettingsText.innerText = 'Цитата';
    imageSourceText.innerText = 'Источник изображений';
  }
}

function changeLanguage() {
  clearInterval(showTimeInterval);
  pageLanguage = (pageLanguage === 'en') ? 'ru' : 'en';
  showTime();
  showTimeInterval = setInterval(showTime, 1000);
  getWeather();
  localStorage.setItem('language', pageLanguage);
  getQuotes();
  changeSettingsLanguage()
}

english.addEventListener('click', () => {
  changeLanguage();
  
  if (pageLanguage === 'en') {
    english.classList.add('active-language');
    russian.classList.remove('active-language');
  } else {
    russian.classList.add('active-language');
    english.classList.remove('active-language');
  }
});

russian.addEventListener('click', () => {
  changeLanguage();

  if (pageLanguage === 'en') {
    english.classList.add('active-language');
    russian.classList.remove('active-language');
  } else {
    russian.classList.add('active-language');
    english.classList.remove('active-language');
  }
});

for (let i = 0; i < sourcesItems.length; i++) {
  sourcesItems[i].addEventListener('click', () => {
    if (!sourcesItems[i].classList.contains('source-active')) {
      sourcesItems.forEach(el => el.classList.remove('source-active'));
      sourcesItems[i].classList.add('source-active');
      sourceImages = sourcesNames[i];
      localStorage.setItem('sourceImages', sourceImages);
      getSourceImages();
    }
  });
}

function removeElementCompletely(element) {
  element.classList.toggle('remove-element-height');
}

for (let i = 0; i < visible.length; i++) {
  visible[i].addEventListener('click', () => {
    if (i === visible.length - 1) {
      if (!elementsForRemoving[i].classList.contains('remove-element')) {
        visible[i].classList.toggle('visible-off');
        elementsForRemoving[i].classList.toggle('remove-element');
        setTimeout(() => elementsForRemoving[i].classList.toggle('remove-element-width'), 500);
      } else {
        visible[i].classList.toggle('visible-off');
        elementsForRemoving[i].classList.toggle('remove-element-width');
        setTimeout(() => elementsForRemoving[i].classList.toggle('remove-element'), 500);
      }
    } else {
      if (!elementsForRemoving[i].classList.contains('remove-element')) {
        visible[i].classList.toggle('visible-off');
        elementsForRemoving[i].classList.toggle('remove-element');
        setTimeout(removeElementCompletely, 500, elementsForRemoving[i]);
      } else {
        visible[i].classList.toggle('visible-off');
        elementsForRemoving[i].classList.toggle('remove-element-height');
        setTimeout(() => elementsForRemoving[i].classList.toggle('remove-element'), 500);
      }
    }
  }); 
}

changeSettingsLanguage();