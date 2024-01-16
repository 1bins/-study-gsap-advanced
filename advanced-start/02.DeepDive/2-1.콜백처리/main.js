const $ = node => document.querySelector(node);


//  callback -> 나중에 일어나는 일 

const h1 = $('h1');

// onComplete
// onUpdate
// onStart
// onRepeat


let count = 0;
gsap.to('.orange', {
    duration: 1.5,
    y: 100,
    onComplete: complete,
    onCompleteParams: ['오렌지'],    // parameter는 배열로 전달한다 -> onComplete(params)를 전달할 경우 함수가 바로 실행이 되어버림
    onUpdate(){
        h1.textContent = '애니메이션 재생 중'
    },
    onStart(){

    },
    onRepeat(){
        ++count
        if(count > 5){console.log('다른 함수 실행하기')}
    }
})

function complete(color){
    console.log(this.targets())
    h1.textContent = `${color} 애니메이션 재생 끝`;
    gsap.to('.orange', {rotate: 360})
}