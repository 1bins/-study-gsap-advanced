const tl = gsap.timeline();

/**
 * immediateRender: true(default)
 * 이전 트윈의 값을 기억함 
 */

tl.from('.orange', {opacity: 0, y: 50})
  .from('.pink', {opacity: 0, y: -50})
  .from('.blue', {opacity: 0, scale: 1.2})
  .from('.orange', {opacity: 0, immediateRender: false})
  // 처음 실행된 트윈의 opacity 0을 기억해서, 오류가 나타남(글리치)
  // immediateRender를 false로 줌




GSDevTools.create()