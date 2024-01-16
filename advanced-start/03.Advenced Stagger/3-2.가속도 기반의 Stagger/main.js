gsap.from('.stage > div', {
    duration: 2,
    opacity: 0,
    scale: 0,
    stagger: {
        each: .2,
        ease: 'power3',
        from: 'center'
    }
})