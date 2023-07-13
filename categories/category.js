import { loadHeader } from '../js/utilities.js';

loadHeader();

const searchInput = document.getElementById('searchInput');
const searchIcon = document.getElementById('searchIcon');

searchIcon.addEventListener('click', () => {
  if (searchInput.value.trim() !== '') {
    // TODO: Include logic for search
    console.log('Something');
  }
});
