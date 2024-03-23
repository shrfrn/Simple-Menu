'use strict'

function onLoad() {
    const elMain = document.querySelector('main')
    const elLinks = document.querySelectorAll('nav a')

    elLinks.forEach((elLink, idx) => elLink.addEventListener('mouseenter', () => {
        elMain.dataset.activeIndex = idx
    }))
}