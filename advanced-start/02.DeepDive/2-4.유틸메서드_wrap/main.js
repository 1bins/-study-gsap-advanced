gsap.to('.stage', {autoAlpha: 1})

const { wrap } = gsap.utils; // 구조분해할당

const split = new SplitText('h1', {type: 'chars'});
/**
 * splitText없이 하는 방법
 */
// const split2 = document.querySelectorAll('h1 span');
// const newArray = [...split2];

const tl = gsap.timeline();

tl.from(split.chars, {
    y: wrap([100, -100]),   // 구조분해할당을 통해 gsap.utils.wrap을 wrap으로 바꿈
    opacity: 0,
    stagger: {
        each: 0.02,
        from: 'random' // end, edges, center, random
    }
})
  .to(split.chars, {
    x: 10,
    color: gsap.utils.wrap(['red', 'blue']),
    stagger: 0.02
})


GSDevTools.create()