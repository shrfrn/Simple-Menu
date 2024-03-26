'use strict'

function onLoad() {
	const elMain = document.querySelector('main')
	const elLinks = document.querySelectorAll('nav a')
	elLinks.forEach(elLink => elLink.addEventListener('mouseenter', ev => shuffleText(ev)))
	addEventListener('mousemove', throttle((ev) => {
		const chars = 'abcdefghijklmnopqrstuvwxyz0123456789@%$&_'
		var txt = ''

		for (var i = 0; i < 22000; i++) {
			txt += chars.at(getRandomInt(0, chars.length))
		}
		// elMain.dataset.bgText = txt
		document.querySelector('.bg-text').innerText = txt
	}, 30))
}

function shuffleText({ target: elLink }) {
	if (elLink.dataset.isAnimating === 'true') return
	else elLink.dataset.isAnimating = 'true'

	const chars = 'abcdefghijklmnopqrstuvwxyz0123456789+!@%#$*&(_)+='
	const originalText = elLink.innerText

	var iterationCount = 0

	const id = setInterval(() => {
		var shuffledText = ''

		for (var i = 0; i < originalText.length; i++) {
			if (i <= Math.floor(iterationCount / 3)) {
				shuffledText += originalText.at(i)
			} else {
				shuffledText += chars.at(getRandomInt(0, chars.length))
			}
		}

		elLink.innerText = shuffledText
		iterationCount++

		if (iterationCount === originalText.length * 3) {
			clearInterval(id)
			elLink.dataset.isAnimating = 'false'
		}
	}, 60)
}

function getRandomInt(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) // The maximum is exclusive and the minimum is inclusive
}

function throttle(func, limit) {
	var inThrottle
    
	return (...args) => {
        if(inThrottle) return
        
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
	}
}
