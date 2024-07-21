const $ = document

const chengeThemeIcon = $.querySelector('.chenge-theme .icon')
const showMenuBtn = $.querySelector('.show-menu')

chengeThemeIcon.addEventListener('click' , () =>{
    $.body.classList.toggle('dark-theme')
    if($.body.classList.contains('dark-theme')){
        chengeThemeIcon.src = './image/sun.png'
    }else{
        chengeThemeIcon.src = './image/moon.png'
    }
})
showMenuBtn.addEventListener('click', ()=>{
    let menu = $.querySelector('.menu')
    menu.classList.toggle('show')
    // if(menu.classList.contains('show')){
    //     menu.style.top = "100px"
    // }else{
    //     menu.style.top = "-200px"
    // }
})