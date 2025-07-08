// Array of themes for body ID with corresponding background images
const themes = [
    { id: 'Site', image: 'url(assets/images/Site1.jpg)', color: 'rgba(30, 60, 90, 0.8)', label: 'Deep Blue' },
    { id: 'Mains', image: 'url(assets/images/Site1.jpg)', color: 'rgba(30, 60, 90, 0.8)', label: 'Deep Blue' },
    { id: 'Remotz', image: 'url(assets/images/Site2.jpg)', color: 'rgba(40, 80, 120, 0.8)', label: 'Ocean Blue' },
    { id: 'Tranz', image: 'url(assets/images/Site3.jpg)', color: 'rgba(50, 100, 150, 0.8)', label: 'Sky Blue' },
    { id: 'Trapz', image: 'url(assets/images/Site4.jpg)', color: 'rgba(60, 120, 180, 0.8)', label: 'Azure Blue' },
    { id: 'Chenj', image: 'url(assets/images/Site5.jpg)', color: 'rgba(70, 140, 210, 0.8)', label: 'Cerulean Blue' },
    { id: 'Paton', image: 'url(assets/images/Site6.jpg)', color: 'rgba(80, 160, 240, 0.8)', label: 'Electric Blue' },
    { id: 'Kepo', image: 'url(assets/images/Site7.jpg)', color: 'rgba(90, 180, 255, 0.8)', label: 'Neon Blue' },
    { id: 'Mai', image: 'url(assets/images/Site8.jpg)', color: 'rgba(100, 160, 230, 0.8)', label: 'Cyan Blue' },
    { id: 'Horror', image: 'url(assets/images/Site9.jpg)', color: 'rgba(110, 140, 200, 0.8)', label: 'Indigo Blue' },
    { id: 'More1', image: 'url(assets/images/Site10.jpg)', color: 'rgba(120, 130, 170, 0.8)', label: 'Stormy Blue' },
    { id: 'More2', image: 'url(assets/images/Site11.jpg)', color: 'rgba(130, 120, 150, 0.8)', label: 'Steel Blue' }
];
////////////////
// Function to change the body theme with smooth transitions
function changeTheme() {
    const body = document.body;

    // Reduce opacity for fade-out effect
    body.style.transition = 'opacity 0.5s ease-in-out';
    body.style.opacity = '0';

    // Get the current body ID and find the next theme
    let currentIndex = themes.findIndex(theme => theme.id === body.id);
    currentIndex = (currentIndex + 1) % themes.length; // Loop through themes

    // Update theme after fade-out
    setTimeout(() => {
        body.id = themes[currentIndex].id;
        navTheme(themes[currentIndex].image, themes[currentIndex].color);

        // Restore opacity for fade-in effect
        body.style.opacity = '1';
    }, 500); // Fade-out duration
}

// Function to change the Sidebar background
function navTheme(image, color) {
    const sidebar = document.getElementById('Sidebar');
    if (sidebar) {
        sidebar.style.transition = 'background-image 1s ease-in-out';
        sidebar.style.backgroundImage = `linear-gradient(${color}, ${color}), ${image}`;
    }

    // Smooth transition for body background
    document.body.style.transition = 'background-image 1s ease-in-out';
    document.body.style.backgroundImage = `linear-gradient(${color}, ${color}), ${image}`;

    // Change the top-strip background color
    const topStrip = document.querySelector('.top-strip');
    if (topStrip) {
        topStrip.style.transition = 'background-color 1s ease-in-out';
        topStrip.style.backgroundColor = color;
    }
}

// Automatically change the theme every 10 seconds
setInterval(changeTheme, 20000);
