const menuContainer = document.querySelector('.js--menu');
const menuButton = document.querySelector('.js--menu-button');
const menuVector = document.querySelector('.js--menu-vector');

function createItem(name, href) {
  const itemEl = document.createElement('div');
  itemEl.className = 'context-menu__item';

  const linkEl = document.createElement('a');
  linkEl.className = 'context-menu__link';
  linkEl.href = href;
  linkEl.textContent = name;
  itemEl.append(linkEl);

  return itemEl;
}

menuButton.onclick = () => {
  const contextMenu = document.querySelector('.js--context-menu');

  menuVector.classList.toggle('rotate');

  if (contextMenu) {
    menuContainer.removeChild(contextMenu);
  } else {
    const rootEl = document.createElement('div');

    rootEl.className = 'js--context-menu context-menu';

    rootEl.append(createItem('account', '#'));
    rootEl.append(createItem('orders', '#'));
    rootEl.append(createItem('log out', '#'));

    menuContainer.append(rootEl);
  }
};
