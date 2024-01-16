// gsap.to('.tiger > div', {
//   y: 100,
//   stagger: {
//     each: 0.5,
//     repeat: -1,
//     yoyo: true,
//   },
// })

const l = 8 * 13;

for(let i = 0; i < l; i++){
  let template = /* html */`
    <div class="box" data-index="${i}"></div>
  `
  document.querySelector('.stage')?.insertAdjacentHTML('beforeend',template)

}


gsap.to('.box', {
  duration: 1,
  scale: 0.2,
  ease: 'power1.inOut',
  stagger: {
    each: 0.1,
    from: 'center',
    // axis: 'y',  // 축 기준
    grid: "auto", // [8, 13]
    repeat: -1,
    yoyo: true,
  }
})