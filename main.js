// Select the menu icon and navbar elements from the DOM
let menuIcon = document.querySelector('#menu-icon'); // Get the menu icon by its ID
let navbar = document.querySelector('.navbar'); // Get the navbar by its class

// Add a click event listener to the menu icon
menuIcon.onclick = () => {
    // Toggle the 'fa-xmark' class on the menu icon for changing its appearance
    menuIcon.classList.toggle('fa-xmark');
    // Toggle the 'active' class on the navbar to show/hide it
    navbar.classList.toggle('active');
}
