const $ = node => document.querySelector(node);

const planet = [
  'mercury',
  'venus',
  'earth',
  'mars',
  'jupiter',
  'saturn',
  'uranus',
  'neptune',
  'pluto'
]

// map  -> 배열의 능력 (새로운 배열을 반환)
// forEach -> 배열의 능력 (값을 반환하지 x)
// insertAdjacentHTML (dom 뿌려주는)
const list = planet.map(elem => {
  return /* html */`
    <div class="solar_system" data-planet-name="${elem}">
      <div class="planet ${elem}">
        <div class="overlay"></div>
        <h2>${elem}</h2>
      </div>
    </div>
  `
})

const space = $('.space');
list.forEach(elem => {
  space.insertAdjacentHTML('beforeend', elem)
})

const z = gsap.utils.distribute({
  base: -18400,
  amount: 18400, // -18400 ~ 0
  from: 'end'
})

gsap.set('.planet', {
  z: z,
  scaleX: .9,
  rotateX: 4,
})

let count = 0;
let trigger = false;

gsap.registerEffect({
  name: "planetEffect",
  effect: (target, { z }) => {
    gsap.to(target, {
      z: z,
      ease: 'power3.inOut',
      duration: 2,
      onComplete(){
        trigger = false;
      }
    })
  },
  defaults: {
    z: '+=2300'
  }
});

const rightBtn = $('.right');
rightBtn.addEventListener('click', () => {

  if(count > 7) return;

  if(!trigger){
    ++count
    gsap.effects.planetEffect('.planet')
    trigger = true;
  }
})

const leftBtn = $('.left');
leftBtn.addEventListener('click', () => {

  if(count < 1) return;

  if(!trigger){
    --count
    gsap.effects.planetEffect('.planet', {z: '-=2300'})
    trigger = true;
  }
})