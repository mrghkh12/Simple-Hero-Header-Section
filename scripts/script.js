const $ = document

const chengeThemeIcon = $.querySelector('.chenge-theme .icon')

chengeThemeIcon.addEventListener('click' , () =>{
    $.body.classList.toggle('dark-theme')
    if($.body.classList.contains('dark-theme')){
        chengeThemeIcon.src = './image/sun.png'
    }else{
        chengeThemeIcon.src = './image/moon.png'
    }
})