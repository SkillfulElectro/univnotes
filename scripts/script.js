// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.menu')) {
        var dropdowns = document.getElementsByClassName("dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display == 'block') {
                openDropdown.style.display = 'none';
                document.body.style.overflow = 'auto'; // Enable scrolling
            }
        }
    }
}

// Open the dropdown menu when the menu icon is clicked
document.querySelector('.menu').onclick = function() {
    var dropdown = document.querySelector('.dropdown');
    if (dropdown.style.display == 'block') {
        dropdown.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling
    } else {
        dropdown.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Disable scrolling
    }
}
