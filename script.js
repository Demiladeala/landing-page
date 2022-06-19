window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.scrollButton');
    scroll.classList.toggle("active", window.scrollY > 50);
})

function scrollUp(){
    window.scrollTo({
        behavior:"smooth",
        top: 0
    });
};
