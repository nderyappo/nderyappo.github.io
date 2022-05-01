let isLightThemeToggled = true;

themeButton.addEventListener('click', () => {
    if (isLightThemeToggled) {
        toggleDarkTheme();
        isLightThemeToggled = false;
    } else {
        toggleLightTheme();
        isLightThemeToggled = true;
    }
})

function toggleLightTheme() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = "black";

    themeButton.src = "light_off.png";

    toggleLinkStyle();
}

function toggleDarkTheme() {
    document.body.style.backgroundColor = 'rgb(40, 42, 46)';
    document.body.style.color = "rgb(240, 240, 235)";

    themeButton.src = "light_on.png";

    toggleLinkStyle();
}

function toggleLinkStyle() {
    for (const a of document.getElementsByTagName('a')) {
        a.classList.toggle("light");
        a.classList.toggle("dark");
    }
}