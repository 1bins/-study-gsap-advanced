const $ = (node) => (node = document.querySelector(node));

const map = $('.map');
const current = $('.current');
const mart = $('.mart');
const medi = $('.medi');

let isScale = false;

const handleCurrent = () => {
    isScale = true;
    const tl = gsap.timeline();
    tl.to(map, {
        scale: 2,
        x: 200,
        y: -200,
        duration: 2,
        ease: 'power3.inOut'
    })
      .to('#here', {y: -10, repeat: -1, yoyo: true})
}

/**
 * SVG 선 길이 재는 방법
 * 선택자.getTotalLength()
 * CSS에 stroke-dasharray: value; stroke-dashoffset: value; 를 넣으면 선이 안 보임
 */

const drawRoute = (target, pathLength) => {
    const tl = gsap.timeline({
        defaults: {
            duration: 2
        }
    });
    tl.set(`${target} .pick`, {opacity: 0})
      .to(map, {scale: 1, x: 0, y: 0, duration: isScale ? 2 : 0})
      .set(`${target} .pick`, {opacity: 1})
      .fromTo(`${target} .path`, {strokeDashoffset: pathLength}, {strokeDashoffset: 0})
      .to(`${target} .pick`, {
        motionPath: {
            path: `${target} .path`,
            align: `${target} .path`,
            alignOrigin: [0.5, 0.5] // path의 정가운데로 위치함
        }
      }, '<')
    
    isScale = false;
}

const handleMart = () => drawRoute('#emart', 496)
const handleMedi = () => drawRoute('#medi', 604)

current.addEventListener('click', handleCurrent);
mart.addEventListener('click', handleMart);
medi.addEventListener('click', handleMedi);
