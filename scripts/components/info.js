import { Utility } from '../util/utility.js';

const util = new Utility();

const pokeProps = [
  {
    id: 'Bulbasaur N.º 0001',
    src: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png',
    alt: 'Bulbasaur',
    caption: 'Tras nacer, crece alimentándose durante un tiempo de los nutrientes que contiene el bulbo de su lomo. '
  },
  {
    id: 'Charmander N.º 0004',
    src: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png',
    alt: 'Charmander',
    caption: 'La llama de su cola indica su fuerza vital. Si está débil, la llama arderá más tenue. '
  },
  {
    id: 'Squirtle N.º 0007',
    src: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png',
    alt: 'Squirtle',
    caption: 'Tras nacer, se le hincha el lomo y se le forma un caparazón. Escupe poderosa espuma por la boca.'
  }
];

export const setInfo = (type = 0) => {

  if (type < 0 || type > 2) type = 0;

  const section = util.createElement('section');
  util.css(section, {
    'display': 'flex',
    'justify-content': 'center',
    'gap': '16px'
  });
  section.setAttribute('id', 'info');

  const div = util.createElement('div');

  const image = util.createElement('img');
  image.setAttribute('src', pokeProps[type].src);
  image.setAttribute('alt', pokeProps[type].alt);

  div.appendChild(image);

  const article = util.createElement('article');
  util.css(article, {
    'background-color': '#607D8B',
    'border-radius': '10px',
    'box-shadow': '0px 0px 10px rgba(0, 0, 0, 0.5)',
    'padding': '20px',
    'max-width': '400px',
    'text-align': 'center',
    'font-family': "'Montserrat', 'sans-serif'",
    'margin': '20px 0 0 10px',
    'align-content': 'center'
  });

  const title = util.createElement('h3');
  util.css(title, {
    'margin-bottom': '15px',
    'font-weight': 'bold',
    'font-size': '25px'
  });
  title.innerHTML = pokeProps[type].id;

  const caption = util.createElement('p');
  util.css(caption, {
    'font-size': '20px'
  });
  caption.innerHTML = pokeProps[type].caption;

  article.appendChild(title);
  article.appendChild(caption);

  section.appendChild(div);
  section.appendChild(article);

  return section;
}