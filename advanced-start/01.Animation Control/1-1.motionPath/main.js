const $ = (node) => document.querySelector(node);

const tiger = $('#tiger');
const button = $('#button');
const time = $('#time');
const progress = $('#progressSlider');

/**
 * *** getter/setter ***
 * 1) paused() => getter: pause일 경우 true, 아닐 경우 false를 반환
 *                setter: 안에 값(boolean) true면 멈춤/false면 안 멈춤
 * 2) reversed() same as paused()
 * 3) timeScale() => getter: 현재 몇 배속인지 return(getter)
 *    timeScale(2)   setter: 2배속 실행
 * 4) time() => getter: 애니메이션의 현재 시간
 *    time(2)   setter: 애니메이션의 2초부터 시작
 * 5) progress() => getter: 애니메이션의 현재 진행률(0 ~ 1 사이)
 *    progress(0.5) setter: 애니메이션 진행률의 0.5부터 시작
 */

const animation = gsap.to(tiger, {
    duration: 5,
    motionPath: {
        path: '#route',
        align: tiger    // 원시 좌표값 할당
    },
    onUpdate: update,   // 지속적 호출 -> 애니메이션이 재생될 때만
    onComplete: () => button.textContent = 'play'
});

function update(){
    time.textContent = animation.time().toFixed(2); // toFixed(number) number번째 소수점자리까지 표시
    progress.value = animation.progress();
}

progress.addEventListener('input', (e) => {  // input이 가지고 있는 메서드, input의 value가 변할때마다 실행
    animation.progress(e.target.value).pause();
    button.textContent = 'play';
});

const setButtonState = () => button.textContent = animation.paused() ? 'play' : 'pause';

button.addEventListener('click', () => {
    animation.paused(!animation.paused())
    if(animation.progress() === 1){
        animation.restart();
    }
    setButtonState();
});

const home = $("#home");
const mountain = $("#mountain");
const river = $("#river");
const company = $("#company");

svg.addEventListener('click', (e) => {
    const target = e.target.closest('g');
    const id = target.getAttribute('id');

    if(!target) return;
    if(!id) return;

    if(id === 'svg') return;

    animation.pause();
    button.textContent = 'play';

    let progress = 0;

    switch(id){
        case "home": progress = 0;
            break;
        case "mountain":
            progress = 0.21;
            break;
        case "river":
            progress = 0.45;
            break;
        case "company":
            progress = 1;
            break;            
        default:
            break;
    }

    gsap.to(animation, {progress: progress, duration: 1});
    setButtonState();
});