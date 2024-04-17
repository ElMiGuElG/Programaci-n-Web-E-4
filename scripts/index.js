import { Utility } from './util/utility.js';
import { Content } from './content.js';

let body = document.body;
const util = new Utility();
const content = new Content();

util.css(body, {
  'margin': 0,
  'padding': 0,
  'box-sizing': 'border-box',
  'background-color': '#222',
  color: "#fff",
  'list-style': 'none'
});

let pageContent = content.generateContent();

body.appendChild(pageContent);