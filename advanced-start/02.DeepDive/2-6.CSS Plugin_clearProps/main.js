const $ = node => document.querySelector(node);
const $_ = node => document.querySelectorAll(node);

// const boxes = [...$_('.box')];
const boxes = gsap.utils.toArray('.box');
boxes.forEach(elem => {
    elem.addEventListener('click', () => {
        gsap.to(elem, {     // elem대신 this를 사용하려면 화살표 함수를 일반함수로 변경
            backgroundColor: 'gray',
            width: '300px'
        })
    })
})

$('#reset').addEventListener('click', () => {
    gsap.set('.box', {clearProps: 'width, backgroundColor'}) // 항목이 많을 경우 'all'만 입력하면 된다.
})