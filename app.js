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
        // cursor position
        var posCurseur = this.pageYOffset;
        // distance beetween scroll and nav
        if (sticky - posCurseur < 50) {
            navbar.style.position = "sticky";
            navbar.style.backgroundColor = "rgb(37, 36, 36)";
            navbar.style.top = 0;
            navbar.style.opacity = 1;

        }}

        /*Toggle between adding and removing the "responsive" class to topnav
        when the user clicks on the icon*/

        function myFunctionForResponsive() {
            navbar.classList.toggle('responsive');
        }
    })