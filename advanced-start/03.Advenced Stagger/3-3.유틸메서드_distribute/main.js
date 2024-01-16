// 값을 분배할 때
const value = gsap.utils.distribute({
    base: 0,        // 시작 값
    amount: 400,    // 값을 몇까지 설정할건지
    ease: 'power3',  // 값에 대한 분배를 가속도로 처리가능함
    // from: 'center'  // 값 분배를 center부터 줄 수 있음 => center값이 0
})

gsap.to('.bar', {
    height: value,
    duration: 2,
    stagger: {
        each: 0.1,
        // ease: 'power3'
    },
})

GSDevTools.create()