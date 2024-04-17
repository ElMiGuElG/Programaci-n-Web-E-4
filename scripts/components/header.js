import { Utility } from '../util/utility.js';

const util = new Utility();

const pokemonHeroImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'
const pokemonHeroAlt = 'logo pokemon'

export const setHeader = () => {
  const header = util.createElement('header');
  const heroImg = util.createElement('img');

  heroImg.setAttribute('src', pokemonHeroImg);
  heroImg.setAttribute('alt', pokemonHeroAlt);
  util.css(heroImg, {
    'margin-left': 'auto',
    'margin-right': 'auto',
    'width': '600px',
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'margin-bottom': '20px'
  });

  header.appendChild(heroImg);

  return header;
};