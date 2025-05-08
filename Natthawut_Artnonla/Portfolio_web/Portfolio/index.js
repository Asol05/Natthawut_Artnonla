/* menu */ 
let AboutMePage = document.querySelector(".About-me-content")
let ResumePage = document.querySelector(".Resume-content")
let ProjectPage = document.querySelector(".Project-content")

function ShowAboutmepage(){
    AboutMePage.style.display = "flex"
    ResumePage.style.display = "none"
    ProjectPage.style.display = "none"
}
function ShowResumepage(){
    AboutMePage.style.display = "none"
    ResumePage.style.display = "flex"
    ProjectPage.style.display = "none"
}
function ShowProjectpage(){
    AboutMePage.style.display = "none"
    ResumePage.style.display = "none"
    ProjectPage.style.display = "flex"
}

/* showdocument */
let DocumentViwe = document.querySelectorAll('.Document-viwe')

function Opendocument1(){
    DocumentViwe[0].style.display = "flex"
}
function Closedocument1(){
    DocumentViwe[0].style.display = "none"
}
function Opendocument2(){
    DocumentViwe[1].style.display = "flex"
}
function Closedocument2(){
    DocumentViwe[1].style.display = "none"
}
function Opendocument3(){
    DocumentViwe[2].style.display = "flex"
}
function Closedocument3(){
    DocumentViwe[2].style.display = "none"
}

// light mode 
function lightmode(){
    let lightmodebtn = document.getElementById("lightmodebtn")
    let darkmodebtn = document.getElementById("darkmodebtn")
    let background = document.querySelector(".con")
    let left = document.querySelector(".left-content")
    let right = document.querySelector(".right-content")
    let Name = document.querySelector(".Name")
    let Email = document.querySelector(".Email")
    let FB = document.querySelector(".FB")
    let IG = document.querySelector(".IG")
    let Tel = document.querySelector(".Tel")
    let AboutMebtn = document.querySelector(".About-Me-button")
    let Resumebtn = document.querySelector(".Resume-button")
    let Projectbtn = document.querySelector(".Project-button") 

    if(background.classList.contains("lightmode")){
        lightmodebtn.style.display = 'flex'
        darkmodebtn.style.display = 'none'
    }else{
        darkmodebtn.style.display = 'flex'
        darkmodebtn.style.color = 'black'
        lightmodebtn.style.display = 'none'
    }

    darkmodebtn.classList.toggle("lightmode")
    background.classList.toggle("lightmode")
    left.classList.toggle("lightmode")
    right.classList.toggle("lightmode")
    Name.classList.toggle("lightmode")
    Email.classList.toggle("lightmode")
    FB.classList.toggle("lightmode")
    IG.classList.toggle("lightmode")
    Tel.classList.toggle("lightmode")
    AboutMebtn.classList.toggle("lightmode")
    Resumebtn.classList.toggle("lightmode")
    Projectbtn.classList.toggle("lightmode")
    AboutMePage.classList.toggle("lightmode")
    ResumePage.classList.toggle("lightmode")
    ProjectPage.classList.toggle("lightmode")
}

let darkmodebtn2 = document.getElementById('darkmodebtn2')
let lightmodebtn2 = document.getElementById('lightmodebtn2')
darkmodebtn2.addEventListener('click', function(){
    lightmodebtn2.style.display = 'flex'
    darkmodebtn2.style.display = 'none'
})
lightmodebtn2.addEventListener('click', function(){
    lightmodebtn2.style.display = 'none'
    darkmodebtn2.style.display = 'flex'
})
//----------------------------------------------------copytext------------------------------------------------------------//

function copytext(text){
    navigator.clipboard.writeText(text).then(()=>{
        console.log('successfully copy')
    }).catch((err)=>{
        console.error('Copy error : ',err)
    })
}

let Email = document.querySelector('.Email')
let Text = document.querySelectorAll('.Text')
let Alert = document.querySelector('.alert')
Email.addEventListener('click', function(){
    copytext('karnvilotwilight@gmail.com')
    Alert.style.display = 'flex'
    setTimeout(() => {
        Alert.style.display = 'none'
    }, 3000)
})
let tel = document.querySelector('.Tel')
tel.addEventListener('click', function(){
    copytext('0628921165')
    Alert.style.display = 'flex'
    setTimeout(() => {
        Alert.style.display = 'none'
    }, 3000)
})

//--------------------------------------------------------------------------------------------------------------------------------//
let xmark = document.getElementById('xmark')
let menusidebar = document.querySelector('.menu-sidebar')
let bars = document.getElementById('bars')
let windownNow = window.innerWidth
xmark.addEventListener('click', function(){
    menusidebar.style.display = 'none'
    bars.style.display = 'flex'
})
bars.addEventListener('click', function(){
    menusidebar.style.display = 'flex'
    bars.style.display = 'none'
})