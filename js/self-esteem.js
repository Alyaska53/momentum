console.log('Самооценка 145 баллов');
console.log('Комментарии по выполнению ТЗ:');
console.log('1. Часы и календарь +15');
console.log('   [+] время выводится в 24-часовом формате, например: 21:01:00 +5');
console.log('   [+] время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается) +5');
console.log('   [+] выводится день недели, число, месяц +5');
console.log('2. Приветствие +10');
console.log('   [+] текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь) +5');
console.log('   [+] при изменении времени суток, если в это время приложение открыто, меняется текст приветствия');
console.log('   [+] пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется, данные о нём хранятся в local storage +5');
console.log('3. Смена фонового изображения +20');
console.log('   [+] ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20) +5');
console.log('   [+] изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана.');
console.log('   [+] изображения перелистываются последовательно +5');
console.log('   [+] изображения перелистываются по кругу +5');
console.log('   [+] при смене слайдов важно обеспечить плавную смену фоновых изображений +5');
console.log('4. Виджет погоды +15');
console.log('   [+] город по умолчанию - Минск, пока пользователь не ввёл другой город');
console.log('   [+] при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage +5');
console.log('   [+] для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API');
console.log('   [+] данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел +5');
console.log('   [+] выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов) +5');
console.log('5. Виджет цитата дня +10');
console.log('   [+] при загрузке страницы приложения отображается рандомная цитата и её автор +5');
console.log('   [+] при перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +5');
console.log('6. Аудиоплеер +15');
console.log('   [+] при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause +3');
console.log('   [+] при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play +3');
console.log('   [+] треки можно пролистывать кнопками Play-next и Play-prev');
console.log('   [+] треки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev) +3');
console.log('   [+] трек, который в данный момент проигрывается, в блоке Play-list выделяется стилем +3');
console.log('   [+] после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый. +3');
console.log('7. Продвинутый аудиоплеер (реализуется без использования библиотек) +20');
console.log('   [+] добавлен прогресс-бар в котором отображается прогресс проигрывания +3');
console.log('   [+] при перемещении ползунка прогресс-бара меняется текущее время воспроизведения трека +3');
console.log('   [+] над прогресс-баром отображается название трека +3');
console.log('   [+] отображается текущее и общее время воспроизведения трека +3');
console.log('   [+] есть кнопка звука при клике по которой можно включить/отключить звук +2');
console.log('   [+] добавлен регулятор громкости, при перемещении ползунка регулятора громкости меняется громкость проигрывания звука +3');
console.log('   [+] можно запустить и остановить проигрывания трека кликом по кнопке Play/Pause рядом с ним в плейлисте +3');
console.log('8. Перевод приложения на два языка (en/ru) +15');
console.log('   [+] переводится язык и меняется формат отображения даты +3');
console.log('   [+] переводится приветствие и placeholder +3');
console.log('   [+] переводится прогноз погоды в т.ч описание погоды (OpenWeatherMap API предоставляет такую возможность) и город по умолчанию +3');
console.log('   [+] переводится цитата дня +3');
console.log('   [+] переводятся настройки приложения. При переключении языка приложения в настройках, язык настроек тоже меняется +3');
console.log('   [+] не переводятся данные, которые вводит пользователь: имя, город, тег для получения фонового изображения от API');
console.log('9. Получение фонового изображения от API +10');
console.log('   [+] в качестве источника изображений может использоваться Unsplash API +5');
console.log('   [+] в качестве источника изображений может использоваться Flickr API +5');
console.log('10. Настройки приложения +20');
console.log('   [+] в настройках приложения можно указать язык приложения (en/ru) +3');
console.log('   [+] в настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API +3');
console.log('   [-] если источником получения фото указан API, в настройках приложения можно указать тег/теги, для которых API будет присылает фото +3');
console.log('   [+] в настройках приложения можно скрыть/отобразить любой из блоков, которые находятся на странице: время, дата, приветствие, цитата дня, прогноз погоды, аудиоплеер, список дел/список ссылок/ваш собственный дополнительный функционал +3');
console.log('   [+] скрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их');
console.log('   [+-] настройки приложения сохраняются при перезагрузке страницы +2 (feedback: не все настройки сохраняются, только язык и источник изображений');
console.log('11. Дполнительный функционал +10');
console.log('   [+] Дполнительный функционал + 10');
console.log('================================================');
console.log('От себя хочу добавить:');
console.log('В работе не успел реализовать ссылки на GitHub и RSS в footer, чтобы не нарушался макет и адаптивность.');
console.log('Хоть в ТЗ эти пункты указаны, но оценка по ним не предусмотрена, поэтому прошу это учесть :)');
console.log('Загрузка изображений с Api могут занять время (2-7 секунд). Пока не знаю, как ускорить этот процесс... Прошу к этому не прдиратьсяи набраться терпения :)');
console.log('Всего хорошего вам! Буду благодарен вам за обратную связь при проверке :)');