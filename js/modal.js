const modal = document.querySelector('.search-model')
const searchIcon = document.querySelector('.icon_search')
const searchCloseSwitch = modal.querySelector('.search-close-switch')

const searchInput = document.getElementById('search-input')


searchIcon.addEventListener('click', () => {
    modal.style.display = 'block'
})

searchCloseSwitch.addEventListener('click', () => {
    modal.style.display = 'none'
})



searchInput.addEventListener('input', (e) => {
    const searchRes = e.target.value
    console.log(searchRes)
})

// add 