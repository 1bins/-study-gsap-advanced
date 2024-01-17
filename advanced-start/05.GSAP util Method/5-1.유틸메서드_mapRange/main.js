const $ = node => document.querySelector(node);

let cursor = $('#cursor');
let intro = $('#intro');

let xTo = gsap.quickTo(cursor, 'x', {duration: 0.3, ease: "power3"}),
    yTo = gsap.quickTo(cursor, 'y', {duration: 0.3, ease: "power3"});

let widthToProgress = gsap.utils.mapRange(0, innerWidth, 0, 100)

window.addEventListener('resize', () => {
    widthToProgress = gsap.utils.mapRange(0, innerWidth, 0, 100)
})

intro.addEventListener('mousemove', ({ pageX: x, pageY: y }) => {
    // gsap.to(cursor, {
    //     x: x - (cursor.offsetWidth * 0.5),      // 대상의 넓이/높이 값 구하기 offsetWidth/offsetHeight
    //     y: y - (cursor.offsetHeight * 0.5),
    // })
    xTo(x - (cursor.offsetWidth * 0.5))
    yTo(y - (cursor.offsetHeight * 0.5))

    let value = widthToProgress(x);

    gsap.to('.left', {
        right: `${value}%`
    })

})

intro.addEventListener('mouseleave', () => {
    gsap.to('.left', {right: '50%'})
})