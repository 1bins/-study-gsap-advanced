gsap.registerPlugin(GSDevTools, SplitText);

gsap.set('.stage',{autoAlpha:1})  

/**
 * registerEffect
 * 동일한 효과를 저장하여 사용함
 */

gsap.registerEffect({
    name: 'textEffect',
    extendTimeline: true,
    defaults: {
        posY: -100, // y라는 명칭은 정해진게 아니라 내가 정하는 것. defaults에서 쓴 값은 전부 config로 떨어짐
        colors: ['red', 'orange']
    },
    effect: (target, config) => {
        const split = new SplitText(target, {type: 'chars'});

        const tl = gsap.timeline();
        tl.from(split.chars, {y: config.posY, opacity: 0, stagger: 0.05})
          .to(split.chars, {color: gsap.utils.wrap(config.colors)})

        return tl;
    }
})

const animation = gsap.timeline();

animation.textEffect('h1')
animation.textEffect('h2', {posY: gsap.utils.wrap([50, -50]), colors: ['blue', 'green']})

/**
 * extendTimeline을 사용하지 않았을 때 타임라인 적용하기
 */
// animation.add(gsap.effects.textEffect('h1'))
//          .add(gsap.effects.textEffect('h2', {posY: 100, colors: ['blue', 'green']})) // defaults의 y값을 변경함


GSDevTools.create()