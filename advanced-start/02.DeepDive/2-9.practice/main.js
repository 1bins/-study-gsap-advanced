gsap.set('.bg > div', {xPercent: -10, opacity: 0})

gsap.registerEffect({
    name: 'textEffect',
    extendTimeline: true,
    defaults: {
        y: 30,
        opacity: 0,
    },
    effect: (target, { y, opacity }) => {

        const { chars } = new SplitText(target, {type: 'chars'});

        // console.log(target[0].dataset.index) data-index값을 추출함
        const index = target[0].dataset.index;

        const tl = gsap.timeline();
        tl.from(chars, {y: y, opacity: opacity, stagger: 0.1})
          .to(`.bg > div:nth-child(${index})`, {xPercent: 0, opacity: 1}, 0)
          .to(chars, {delay: 1, opacity: opacity, stagger: 0.03})
          .to(`.bg > div:nth-child(${index})`, {delay: 1, xPercent: 10, opacity: 0}, '<')

        return tl;
    }
});

function textAnimation(){
    const animation = gsap.timeline();  // 콜백함수를 timeline안에 써도 되지만 가독성을 위해 eventCallback으로 처리한다

    animation.textEffect('.ex1')
             .textEffect('.ex2')
             .textEffect('.ex3')
             .textEffect('.ex4')
    
    animation.eventCallback('onUpdate', () => {
        if(animation.progress() === 1){
            animation.restart();
        }
    })
}

textAnimation()


// GSDevTools.create()