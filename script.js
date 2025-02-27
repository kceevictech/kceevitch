var btn = document.querySelector('.btn');
var menu = document.querySelector('.menu');

btn.addEventListener('click', function() {
    menu.classList.toggle('active');
});

var navlinks = document.querySelectorAll('.menu li a');
navlinks.forEach(function(navlink) {
    navlink.addEventListener('click', function() {
        menu.classList.remove('active');
    });
});
