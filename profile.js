const prgressEL = document.querySelector('.progress')
const navbar = document.querySelector('nav')
const phoneTap = document.querySelector('.fa-phone')
const emailTap = document.querySelector('.fa-envelope')
const skillTap = document.querySelector('.skill')
// window.onscroll = () => slzk()
window.onscroll = () => scrollProgress()
phoneTap.addEventListener("click", tell)
emailTap.addEventListener("click", email)
skillTap.addEventListener("click", skill)

function scrollProgress() {
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollPercefntage = (scrollTop / pageHeight) * 100
    // prgressEL.style.visibility = 'visible';
    // prgressEL.style.width = scrollPercefntage + "%"
    // prgressEL.style.width = scrollY + "%"
    // console.log(scrollY);

    if (scrollPercefntage >= 10) {
        navbar.classList.add('activ')
    } else {
        navbar.classList.remove('activ')
    }
}

// function slzk() {
//     let top = scrollY
//     if (top >= 200) {
//         navbar.classList.add('activ')
//     } else {
//         navbar.classList.remove('activ')

//     }

//     console.log(top);
// }

function tell() {
    alert("เบอร์ 0820538481")
}
function email() {
    alert("email 644295034@parichat.ac.th")
}
function skill() {
    alert("ไม่มีอะไรครับ ทำไว้เชยๆ")
}