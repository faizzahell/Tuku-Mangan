
const right = document.querySelector('.col-right-sidebar')
const navbar = document.querySelector('.col-navbar')
const cover = document.querySelector('.screen-cover')

const sidebar_items = document.querySelectorAll('.sidebar-item')

function toggleNavbar() {
    navbar.classList.toggle('appear')
    cover.classList.toggle('d-none')
}

function toggleRightSidebar() {
    right.classList.toggle('appear')
    cover.classList.toggle('d-none')
}

cover.addEventListener('click', e => {
    cover.classList.add('d-none')
    right.classList.remove('appear')
    navbar.classList.remove('appear')
})

function toggleActive(e) {
    sidebar_items.forEach(function(v, k) {
        v.classList.remove('active')
    })
    e.closest('.sidebar-item').classList.add('active')
}

function increaseNumber(e) {
    let inp = e.closest('div').querySelector('.input-number')
    let current = inp.value

    inp.value = ++current
}

function decreaseNumber(e) {
    let inp = e.closest('div').querySelector('.input-number')
    let current = inp.value

    if (current !== "0") {
        inp.value = --current
    }
}
