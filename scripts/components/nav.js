import { Utility } from '../util/utility.js';

const util = new Utility();

export const setNav = () => {
    const nav = util.createElement('nav');
    util.css(nav, {
        'background-color': '#333',
        'padding': '20px 0'
    });

    const ul = util.createElement('ul');
    util.css(ul, {
        'list-style-type': 'none',
        'margin': '0',
        'padding': '0',
        'text-align': 'center',
    });

    const fireLi = util.createElement('li');
    util.css(fireLi, {
        'display': 'inline-block',
        'margin-right': '150px',
        'font-size': '50px',
        'font-family': "'Montserrat', 'sans-serif'"
    });

    const waterLi = util.createElement('li');
    util.css(waterLi, {
        'display': 'inline-block',
        'margin-right': '150px',
        'font-size': '50px',
        'font-family': "'Montserrat', 'sans-serif'"
    });

    const plantLi = util.createElement('li');
    util.css(plantLi, {
        'display': 'inline-block',
        'font-size': '50px',
        'font-family': "'Montserrat', 'sans-serif'"
    });

    const fireA = util.createElement('a');
    util.css(fireA, {
        color: '#EC7063',
        'text-decoration': 'none',
        'font-weight': 'bold',
        'cursor': 'pointer'
    });
    fireA.innerHTML = 'Fuego';
    fireA.addEventListener('click', () => { util.changeCurrentPokemon(1) }, false);

    const waterA = util.createElement('a');
    util.css(waterA, {
        color: '#5DADE2',
        'text-decoration': 'none',
        'font-weight': 'bold',
        'cursor': 'pointer'
    });
    waterA.innerHTML = 'Agua';
    waterA.addEventListener('click', () => { util.changeCurrentPokemon(2) }, false);

    const plantA = util.createElement('a');
    util.css(plantA, {
        color: '#2ECC71',
        'text-decoration': 'none',
        'font-weight': 'bold',
        'cursor': 'pointer'
    });
    plantA.innerHTML = 'Planta';
    plantA.addEventListener('click', () => { util.changeCurrentPokemon(0) }, false);

    fireLi.appendChild(fireA);
    waterLi.appendChild(waterA);
    plantLi.appendChild(plantA);

    ul.appendChild(fireLi);
    ul.appendChild(waterLi);
    ul.appendChild(plantLi);

    nav.appendChild(ul);

    return nav;
}