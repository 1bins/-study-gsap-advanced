const $ = node => document.querySelector(node);

gsap.to('svg',{autoAlpha:1})

const animation = gsap.timeline();
const pixelPerSecond = 200;

animation.to('#star', {duration: 1, x: 1150})
         .to('#circle', {duration: 2, x: 1150})
         .to('#square', {duration: 1, x: 1150})

const children = animation.getChildren(); // timeline의 모든 tween을 배열로 가져옴
const childrenList = children.length;

// for (let i = 0; i < childrenList; i++){
//     gsap.set(`#tween${i}`, {x: children[i].startTime() * pixelPerSecond})
//     gsap.set(`#rect${i}`, {width: children[i].duration() * pixelPerSecond})
// }
children.forEach((elem, idx) => {
    gsap.set(`#tween${idx}`, {x: elem.startTime() * pixelPerSecond})
    gsap.set(`#rect${idx}`, {width: elem.duration() * pixelPerSecond})
})

const time = $('#time');
const maxX = animation.duration() * pixelPerSecond;

function handleMoveHead(){
    time.textContent = animation.time().toFixed(1)
    gsap.set('#playhead', {x: animation.progress() * maxX})
}
/**
 * 타임라인에 콜백함수 넣는 방법
 */
animation.eventCallback('onUpdate', handleMoveHead)

/**
 * Draggable 플러그인
 */
const dragger = Draggable.create('#playhead', {
    type: 'x',
    cursor: 'pointer',
    trigger: '#timeline',
    bounds: {minX: 0, maxX: maxX},
    onDrag(e){
        animation.pause();
        animation.progress(this.x / maxX)
    }
})

$('#play').addEventListener('click', () => animation.play())
$('#pause').addEventListener('click', () => animation.pause())
$('#reverse').addEventListener('click', () => animation.reverse())