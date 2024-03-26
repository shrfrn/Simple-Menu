'use strict'

function onLoad() {
	const elMain = document.querySelector('main')
	const elLinks = document.querySelectorAll('nav a')

	elLinks.forEach((elLink, idx) =>
		elLink.addEventListener('mouseenter', () => {
			elMain.dataset.activeIndex = idx
		})
	)
}

function onNavigate(ev) {
	ev.preventDefault()
    const elLinks = document.querySelectorAll('nav a')
    elLinks.forEach((elLink, idx) => {
        elLink.style.animationName = 'fadeOutLeftBig'
        elLink.style.animationDuration = '2s'
    })
    // window.location = ev.target.href
    setTimeout(() => window.location = ev.target.href, 1000)
}
