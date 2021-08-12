let tl = new TimelineMax();

tl.staggerFrom(".navbar > div",
    2, {
        opacity: 0,
        y: 60,
        ease: Expo.easeInOut,
        delay: 0,
    });


tl.staggerFrom(
    ".site-menu > div",
    1, {
        opacity: 0,
        x: -60,
        ease: Power2.easeOut,
        delay: -1,
    },
    0.2
);

tl.staggerFrom(
    ".content > div",
    1, {
        opacity: 0,
        x: -10000,
        ease: Power2.easeOut,
        delay: -1,
    },
    0.2
);

tl.staggerFrom(
    ".mkt > img",
    1, {
        opacity: 0,
        y: 1000,
        ease: Power2.easeOut,
        delay: -1,
    },
    0.2
);

let text1 = document.getElementById('l1');
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    text1.style.marginLeft = value * 1 + 'px';
})
new Glider(document.querySelector('.glider'), {
    slidesToScroll: 1,
    slidesToShow: 4,
    draggable: true,
    loop: true,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});
new Glider(document.querySelector('.glider1'), {
    slidesToScroll: 1,
    slidesToShow: 4,
    draggable: true,
    arrows: {
        prev: '.back',
        next: '.next'
    }
});