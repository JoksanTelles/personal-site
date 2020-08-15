// Change theme color
// DOM elements

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;


//Apply the cached theme on reload
darkButton.onclick = () => {
	body.classList.replace('light', 'dark');
};

lightButton.onclick = () => {
	body.classList.replace('dark', 'light');
};