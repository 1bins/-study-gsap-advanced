const $ = node => document.querySelector(node);

const tl = gsap.timeline(
    {
        defaults: {
            scale: 0,
            opacity: 0,
            duration: 1,
        }
    }
);

tl.from('.tiger[data-name="a0"]', {})
  .addPause()   // 재생이후 일시정지됨
  /**
   * .add('label1')을 추가하면 해당 영역의 책갈피를 넣는 것과 같다
   * => 호출: tl.play('label1')을 하면 add('label1')이후부터 재생된다
   * 4-2 참고
   */

  .from('.tiger[data-name="a1"]', {y: 100, rotation: 360})
  .addPause()

  .from('.tiger[data-name="a2"]', {y: -100, rotation: 360})
  .addPause()

  .from('.tiger[data-name="a3"]', {scale: 2, rotation: -360})



const prev = $('.prev');
const next = $('.next');

prev.addEventListener('click', () => {
    tl.reverse()
})

next.addEventListener('click', () => {
    tl.play()
})