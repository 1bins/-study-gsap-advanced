/**
 * 1) stagger에게 callBack을 전달
 * 2) this.targets()[0]으로 각 item을 잡음
 */ 

// gsap.to('.tiger > div', {
//   y: 100,
//   stagger: {
//     each: 0.2,
//     repeat: 1,
//     yoyo: true,
//     onComplete(){
//       gsap.to(this.targets()[0], {
//         rotation: 360
//       })
//     },
//   }
// })

// const { chars, lines, words } = new SplitText('.word > div');
// const tl = gsap.timeline();

// tl.from(chars, {
//   opacity: 0,
//   duration: 2,
//   stagger: {
//     each: 0.1,
//     from: 'random',
//     ease: 'power1',
//     onComplete(){
//       gsap.to(this.targets()[0],{
//         delay: 0.5,
//         duration: 0,
//         color: '#51ff00'
//       })
//     },
//   }
// })
// .to(lines, {
//   delay: 1,
//   duration: .3,
//   keyframes: {
//     "0%": {opacity: 1},
//     "20%": {opacity: 0},
//     "50%": {opacity: 1},
//     "70%": {opacity: 0},
//     "100%": {opacity: 1},
//   },
//   stagger: {
//     each: 0.2,
//     from: 'random'
//   }
// })



const l = 8 * 13;

for(let i = 0; i < l; i++){
  let template = /* html */`
    <div class="box"></div>
  `
  document.querySelector('.stage')?.insertAdjacentHTML('beforeend',template)

}

const tween = gsap.to('.box', {
  scale: .3,
  stagger: {
    each: .5,
    onStart(){
      // console.log('start')
      const target = this.targets()[0];
      if(target.dataset.stop === 'stop'){
        /**
         * 움찔 거리는 것을 예방하기 위해
         * this.startTime() 시작시간 값을 얻어서 멈추는 시간을 넣어줌
         */
        console.log(this)
        tween.pause(this.startTime())
      }
    },
  }
})

const stage = document.querySelector('.stage');

stage.addEventListener('click', (e) => {
  if(e.target.classList.contains('box')){
    gsap.to(e.target, {
      backgroundColor: 'red',
      attr: { // 속성 자체를 건듦
        // x: 100, // svg에 사용가능
        'data-stop': 'stop', // data값 지정
        // 'aria-label': 'button' // 접근성
      }
    })
  }
})