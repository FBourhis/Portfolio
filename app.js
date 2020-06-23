document.addEventListener('DOMContentLoaded', function () {

    // When the user scrolls the page, execute myFunction 
    window.addEventListener('scroll', mySticky);

    // Get the navbar
    var navbar = document.getElementById("myNav");

    function mySticky() {
    
        // make the menu sticky if the user scrolled
        if (window.scrollY > navbar.offsetTop) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        } 
    
    }

})