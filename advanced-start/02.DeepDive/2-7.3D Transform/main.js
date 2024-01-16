/**
 * transformPerspective
 * 부모에게perspective(css)를 설정할 경우: 부모 가운데에 소실점이 들어가기 때문에 아이템이 다른 모양으로 rotation함
 * gsap로 아이템에게 transformPerspective(js)를 설정할 경우: 각자 아이템의 소실점 값으로 rotation한다
 */

gsap.set('.box', {transformPerspective: 600})

gsap.to('.box', {
    rotationY: 360,
    duration: 8,
    ease: 'linear',
    transformOrigin: '50% 50% 400'
})





GSDevTools.create()