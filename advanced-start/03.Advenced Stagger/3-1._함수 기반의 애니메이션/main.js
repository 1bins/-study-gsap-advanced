/*
gsap.to('.box', {
    x: custom,
    y: custom,
    rotation: (i, t) => {
        return i * 30;
    },
    stagger: 0.1
})

function custom (i, t, arr){    //index, target(item), arrayy (gsap 기본값)
    // if (i % 2 != 0) {
    //     return 100
    // }
    if(t.classList.contains('orange')){
        return 0
    }
    return i * 30
}
*/

gsap.to('.blue, .pink', {
    rotation: customRotation,
    repeat: -1,
    duration: 2,
    ease: 'none',
    stagger: 0.1
})

function customRotation(i, t){
    if(t.classList.contains('blue')){
        return 360
    }
    return -360
}