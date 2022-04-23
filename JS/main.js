const hamburg = document.querySelector(".hamburger")
const men = document.querySelector(".menu")
const listItem = document.querySelectorAll(".menu-button")

hamburg.addEventListener('click', () => {
    hamburg.classList.toggle('active')
    men.classList.toggle('active')
})


listItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburg.classList.remove('active')
        men.classList.remove('active')
    })
})
