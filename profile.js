const prgressEL = document.querySelector('.progress')
const navbar = document.querySelector('nav')
window.onscroll = () => slzk()
// window.onscroll = () => scrollProgress()

// function scrollProgress() {
//     const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
//     const scrollTop = document.documentElement.scrollTop
//     const scrollPercefntage = (scrollTop / pageHeight) * 100
//     // prgressEL.style.visibility = 'visible';
//     // prgressEL.style.width = scrollPercefntage + "%"
//     // prgressEL.style.width = scrollY + "%"
//     // console.log(scrollY);

//     if (scrollPercefntage >= 10) {
//         navbar.classList.add('activ')
//     } else {
//         navbar.classList.remove('activ')
//     }
// }

function slzk() {
    var top = scrollY
    console.log(top);
    if (top >= 500) {
        navbar.classList.add('activ')
    } else {
        navbar.classList.remove('activ')

    }
}
const work = () => {
    alert("มีแต่การบ้าน")
}
const skill = () => {
    alert("ไม่มี")
}

const phone = () => {
    alert("เบอร์ 082053XXXX")
}
const email = () => {
    alert("Email : 644295034@parichat.skru.ac.th")
}