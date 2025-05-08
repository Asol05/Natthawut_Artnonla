let item = document.querySelectorAll('.item')
let city = document.querySelectorAll('.city')
let content = document.getElementById('content')


function item1(){
    item[0].style.backgroundImage = 'url(picture/city/shutterstock_575711801.jpg)'
    item[0].style.backgroundSize = 'cover'
    city[0].innerHTML = "NEW YORK"
    city[0].style.opacity = '1'
    content.innerHTML = ""
}
function item2(){
    item[0].style.backgroundImage = 'url(picture/city/london-cityscape-UKESSAY1222-3c3b4b23062f410080b77839b31243a6.jpg)'
    item[0].style.backgroundSize = 'cover'
    city[0].innerHTML = "LONDON"
    city[0].style.opacity = '1'
    content.innerHTML = ""
}
function item3(){
    item[0].style.backgroundImage = 'url(picture/city/chureito-pagoda-fuji-GettyImages-901228728-1024x600.jpg)'
    item[0].style.backgroundSize = 'cover'
    city[0].innerHTML = "TOKYO"
    city[0].style.opacity = '1'
    content.innerHTML = ""
}
function item4(){
    item[0].style.backgroundImage = 'url(picture/city/China-Briefing-Shanghai-Industry-Economics-and-Policy.jpg)'
    item[0].style.backgroundSize = 'cover'
    city[0].innerHTML = "SHANGHAI"
    city[0].style.opacity = '1'
    content.innerHTML = ""
}
function item5(){
    item[0].style.backgroundImage = 'url(picture/city/9c.jpg)'
    item[0].style.backgroundSize = 'cover'
    city[0].innerHTML = "PARIS"
    city[0].style.opacity = '1'
    content.innerHTML = ""
}

function showRoundtrip(){
    let Roundtrip = document.querySelector('.Round-trip')
    Roundtrip.style.display = 'flex'
    let buttonRoundtrip = document.getElementById('rt')
    buttonRoundtrip.style.background = 'black'
    buttonRoundtrip.style.color = 'white'
    let Oneway = document.querySelector('.oneway')
    Oneway.style.display = 'none'
    let buttonOneway = document.getElementById('ow')
    buttonOneway.style.background = 'white'
    buttonOneway.style.color = 'black'
}
function showOneway(){
    let Roundtrip = document.querySelector('.Round-trip')
    Roundtrip.style.display = 'none'
    let buttonRoundtrip = document.getElementById('rt')
    buttonRoundtrip.style.background = 'white'
    buttonRoundtrip.style.color = 'black'
    let Oneway = document.querySelector('.oneway')
    Oneway.style.display = 'flex'
    let buttonOneway = document.getElementById('ow')
    buttonOneway.style.background = 'black'
    buttonOneway.style.color = 'white'
}

let showbar = document.getElementById('showbar')
let closebar = document.getElementById('closebar')
let sidebar = document.querySelector('.side-nar')

function showsidebar(){
    sidebar.style.display = 'flex'
    showbar.style.display = 'none'
}
function closesidebar(){
    sidebar.style.display = 'none'
    showbar.style.display = 'flex'
}