const toggle_switch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggle_icon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const text_box = document.getElementById('text-box');

// Toggle image colors
function image_mode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Dark and Light Toggle
function toggle_Dark_Light_Mode(is_dark) {
    nav.style.backgroundColor = is_dark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    text_box.style.backgroundColor = is_dark ? 'rgb(255 255 255 / 50%)': 'rgb(0 0 0 / 50%)';
    toggle_icon.children[0].textContent = is_dark ? 'Dark Mode' : 'Light Mode';
    is_dark ? toggle_icon.children[1].classList.replace('fa-sun', 'fa-moon') : toggle_icon.children[1].classList.replace('fa-moon', 'fa-sun');
    is_dark ? image_mode('dark') : image_mode('light');
}

// Switch Theme Dynamically
function switch_theme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggle_Dark_Light_Mode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggle_Dark_Light_Mode(false);
    };
};

// Event Listener
toggle_switch.addEventListener('change', switch_theme);

// Check Local Storage For Theme 
const current_theme = localStorage.getItem('theme');
if (current_theme) {
    document.documentElement.setAttribute('data-theme', current_theme);
    if (current_theme === 'dark') {
        toggle_switch.checked = true;
        toggle_Dark_Light_Mode(true);
    }
};