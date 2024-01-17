// gsap.registerPlugin(textPlugin);

// gsap.to('.big',{
//     duration: 1,
//     text: {
//         value: 'WONBIN',
//         // delimiter: " ",  // 끊어서 쓰기
//         // padSpace: true
//     },
//     repeat: 1,
//     yoyo: true,
//     repeatDelay: 1
// })

gsap.to('.cursor', {
    opacity: 0,
    repeat: -1,
    yoyo: true,
    duration: 0,
    repeatDelay: .4
})

const text = ['html', 'css', 'javascript', 'react', 'gsap'];

function typing(arr){
    const tl = gsap.timeline()
    .to('.big', {
        duration: arr[0] === 'javascript' ? .6 : .3,
        text: arr[0],
        repeat: 1,
        yoyo: true,
        repeatDelay: 1,
    })

    arr.push(arr.shift())

    gsap.delayedCall(3, typing, [arr])
}

typing(text);