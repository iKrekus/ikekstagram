const PICTURES_COUNT = 10;

const Sort = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISSCUSSED: 'filter-discussed',
};

const sortBar = document.querySelector('.img-filters');

const sortInit = () => {
  sortBar.classList.remove('hidden');
};
// сортировка
// По умолчанию — фотографии в изначальном порядке с сервера.
// Случайные — 10 случайных, не повторяющихся фотографий.
// Обсуждаемые — фотографии, отсортированные в порядке убывания количества комментариев.