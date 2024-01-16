const { chars } = new SplitText('h1', {type: 'chars'});

const tl = gsap.timeline({
    repeat: -1
});
const disX = gsap.utils.distribute({
    base: -300,
    amount: 600, // -200 ~ 200
})

tl.from(chars, {
    y: gsap.utils.wrap([-10, 10]),
    opacity: 0,
    filter: 'blur(10px)',    // 최대10px까지 주는게 렉 안 걸림
    stagger: {
        each: 0.1,
        from: 'center'
    }
})
.to(chars, {
    delay: 1,
    x: disX,
    duration: 3,
    ease: 'power3.inOut'
})
.to(chars, {
    delay: -1,
    opacity: 0,
    filter: 'blur(10px)',
    stagger: {
        each: 0.1,
        from: 'edges'
    }
})