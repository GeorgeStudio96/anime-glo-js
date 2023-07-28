const setBg = document.querySelectorAll('.set-bg')

for (let i = 0; i < setBg.length; i++) {
    const src = setBg[i].dataset.setbg
    setBg[i].style.backgroundImage = `url(${src})`
}