import { Utility } from './util/utility.js';
import { setHeader } from './components/header.js';
import { setNav } from './components/nav.js';
import { setInfo } from './components/info.js';

const util = new Utility();

class Content {
  
  generateContent = () => {
    const section = util.createElement('section');

    const header = setHeader();
    const nav = setNav();
    const info = setInfo(1);

    section.appendChild(header);
    section.appendChild(nav);
    section.appendChild(info);

    return section;
  }
}
export { Content }