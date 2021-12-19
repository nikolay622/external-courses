/* eslint-disable no-param-reassign */
function createSlider(element, images) {
  let index = 0;
  let offsetWidth = element.offsetWidth;
  const items = [];

  const rootElement = document.createElement('div');
  rootElement.className = 'slider';

  const overlayElement = document.createElement('div');
  overlayElement.className = 'slider__overlay';
  rootElement.append(overlayElement);

  const contentElement = document.createElement('div');
  contentElement.className = 'slider__content';
  overlayElement.append(contentElement);

  const navElement = document.createElement('div');
  navElement.className = 'slider__nav';
  rootElement.append(navElement);

  const renderSlider = () => {
    element.append(rootElement);
  };

  for (let i = 0; i < images.length; i += 1) {
    const itemElement = document.createElement('div');
    itemElement.className = 'slider__item';
    itemElement.style.width = `${offsetWidth}px`;
    items.push(itemElement);
    const imageElement = document.createElement('img');
    imageElement.className = 'slider__image';
    imageElement.src = images[i];

    itemElement.append(imageElement);
    contentElement.append(itemElement);
  }
  renderSlider();

  const goToSlide = (slide) => {
    contentElement.style.transform = `translateX(-${offsetWidth * slide}px)`;
  };
  const prevElement = document.createElement('button');
  prevElement.className = 'slider__button';
  prevElement.innerHTML = 'Prev';
  prevElement.onclick = () => {
    index = index === 0 ? images.length - 1 : index - 1;
    goToSlide(index);
  };
  navElement.append(prevElement);

  const nextElement = document.createElement('button');
  nextElement.className = 'slider__button';
  nextElement.innerHTML = 'Next';
  nextElement.onclick = () => {
    index = index === images.length - 1 ? 0 : index + 1;
    goToSlide(index);
  };
  navElement.append(nextElement);

  window.onresize = () => {
    offsetWidth = element.offsetWidth;

    items.forEach((item) => {
      item.style.width = `${offsetWidth}px`;
    });
    goToSlide(index);
  };
}

createSlider(document.querySelector('.my-js-slider'), [
  'https://placeimg.com/640/480/any',
  'https://placeimg.com/640/280/cars',
  'https://placeimg.com/640/280/people',
]);
