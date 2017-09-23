window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    var splash = document.getElementById('splash');
    
    if ( window.pageYOffset > (splash.clientHeight - navbar.clientHeight)) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
}