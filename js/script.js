// typed.js
var typed = new Typed('#element', {
    strings: ['Full Stack Developer', 'Python Developer', 'Content Writer', 'Subtitle Writer', 'Virtual Assistant'],
    typeSpeed: 50,loop: true, loopCount: Infinity});

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// scroll sections
let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 100
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                // active navbar links
                // links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']')
            })

            // active  sections for Animation on scroll
            sec.classList.add('show-animate')
        }
        else {
            sec.classList.remove('show-animate')
        }
    });

    // sticky header
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)

    // remove toggle icon & navbar when click navbar links
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')

    // Animation footer on scroll
    let footer = document.querySelector('footer')
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
}
