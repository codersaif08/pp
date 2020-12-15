// smooth scroll
$(function(){
    $('.menu-item a, .next-section a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
        return false
    });
});
// navigation
function openMenu() {
    document.getElementById('navbar').style.width ="100%";
}
function closeMenu() {
    document.getElementById('navbar').style.width ="0%";
}
// mixitup
var mixer =
 mixitup('.work-grid');

 // wow animation

 wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
     }
     
 )
  wow.init();