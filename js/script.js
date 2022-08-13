const getBrowser = () => {
  if (navigator.userAgent.indexOf('Chrome') !== -1) {
    if ((navigator.userAgent.indexOf('Opera') && navigator.userAgent.indexOf('OPR')) !== -1) {
      return 'opera';
    }

    if (navigator.userAgent.indexOf('YaBrowser') !== -1) {
      return 'yabrowser';
    }

    return 'chrome';
  }

  if (navigator.userAgent.indexOf('Firefox') !== -1) {
    return 'firefox';
  }

  if (navigator.userAgent.indexOf('Safari') !== -1) {
    return 'safari';
  }

  return null;
};

const browser = getBrowser();


const imgByBrowser = browser === 'firefox' || browser === 'opera' || browser === 'yabrowser'
  ? 'img/icons/arrow-up.png'
  : browser === 'chrome'
    ? 'img/icons/arrow-down.png' 
    : '';

const pictureClassByBrowser = browser === 'firefox' || browser === 'opera' || browser === 'yabrowser'
  ? 'main__picture--up'
  : browser === 'chrome'
    ? 'main__picture--down' 
    : '';


const sections = document.querySelectorAll('section');

sections.forEach(section => {
  const button = section.querySelector('.button');
  const picture = section.querySelector('.main__picture');
  const img = picture?.querySelector('.main__icon');

  button?.addEventListener('click', () => {
    img.src = imgByBrowser;
    picture.classList.add(pictureClassByBrowser);
    picture.style.display = 'block';  
  });
});
