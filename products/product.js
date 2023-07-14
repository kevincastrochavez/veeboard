import { loadHeader, getParam } from '../js/utilities.js';

loadHeader();

const partNumberParam = getParam('partNumber');
console.log(partNumberParam);
