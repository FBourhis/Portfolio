document.addEventListener('DOMContentLoaded', function () {
    // When the event DOMContentLoaded occurs, it is safe to access the DOM

    // When the user scrolls the page, execute myFunction 
    window.addEventListener('scroll', mySticky);

    // Get the navbar
    var navbar = document.getElementById("myNav");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. 
    // Remove "sticky" when you leave the scroll position

    function mySticky() {
        // position du curseur au scroll
        var posCurseur = this.pageYOffset;
        // je teste la différence de distance entre le scroll et nav
        if (sticky - posCurseur < 1) {
            navbar.style.position = "fixed";
            navbar.style.top = 0;

        }}

        /*Toggle between adding and removing the "responsive" class to topnav
        when the user clicks on the icon*/

        function myFunctionForResponsive() {
            navbar.classList.toggle('responsive');
        }
    })