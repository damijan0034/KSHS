 function toggleMenu() {
    let sideBar = document.getElementById("sidebar")
    let menuIcon = document.getElementById("logo")



    if(sideBar.style.left === '0px') {
        sideBar.style.left = '-560px'
    } else {
        sideBar.style.left = '0px'
    }


 }


 function toggleHome() {
 window.scrollTo({ top: 0, behavior: 'smooth'})

 }



 function toggleAbout() {
    let About = document.getElementById("About")


    About.scrollIntoView({behavior: 'smooth'})
 }