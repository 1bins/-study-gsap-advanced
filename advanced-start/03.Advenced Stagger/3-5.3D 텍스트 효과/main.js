const tl = gsap.timeline();

const duration = .5;
const pause = .5;
const stagger = duration + pause;

const numberOfTargets = gsap.utils.toArray('.utils >div').length;
const delay = stagger * (numberOfTargets - 1) + pause; // 다른 stagger들이 진행되는 동안 기다리는 시간


gsap.set('.utils > div', {transformOrigin: '50% 50% -50'})
tl.from('.utils > div', {
    rotationX: -90,
    y: 50,
    opacity: 0,
    duration: duration,
    stagger: {
        each: stagger,
        repeat: -1,
        repeatDelay: delay,
    },
})
.to('.utils > div', {
    rotationX: 90,
    y: -50,
    opacity: 0,
    duration: duration,
    stagger: {
        each: stagger,
        repeat: -1,
        repeatDelay: delay,
    },
}, stagger)

// GSDevTools.create()