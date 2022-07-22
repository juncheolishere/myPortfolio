// 상단 고정 네비게이션
const headNav = document.getElementById("headNav");
const anchor = document.getElementsByClassName("anchor");
const wordFrame = document.getElementsByClassName("wordFrame");
let menu = false;
window.onwheel = (event) => 
{
    headNav.style.transition = "0.5s"
    // 스크롤 다운
    if (event.deltaY >= 0)
    {
        headNav.style.opacity = "0";
        headNav.style.top = "-50px";
        if (menu == true)
        {
            setTimeout( ()=>{
                anchor[0].style.left = "-30px";
            }, 100)
            setTimeout( ()=>{
                anchor[1].style.left = "-30px";
            }, 200)
            setTimeout( ()=>{
                anchor[2].style.left = "-30px";
            }, 300)
            setTimeout( ()=>{
                anchor[3].style.left = "-30px";
            }, 400)
        }

        if (section2.offsetTop<= window.scrollY +innerHeight )
        {
            setTimeout(()=>{
                wordFrame[0].children[0].children[0].style.right="calc(5px)";
                wordFrame[0].children[0].children[0].style.color="#002342";
            },500);
            setTimeout(()=>{
                wordFrame[0].children[1].children[0].style.right="calc(5px)";
                wordFrame[0].children[1].children[0].style.color="#002342";
            },1000);
            setTimeout(()=>{
                wordFrame[0].children[2].children[0].style.right="calc(5px)";
                wordFrame[0].children[2].children[0].style.color="#002342";
            },1500);
            setTimeout(()=>{
                wordFrame[0].children[3].children[0].style.right="calc(5px)";
                wordFrame[0].children[3].children[0].style.color="#002342";
            },2000)
        }
    }
    else
    {
        headNav.style.opacity = "1";
        headNav.style.top = "0px";
        if (menu == true)
        {
            setTimeout( ()=>{
                anchor[0].style.left = "10px";
            }, 100)
            setTimeout( ()=>{
                anchor[1].style.left = "10px";
            }, 200)
            setTimeout( ()=>{
                anchor[2].style.left = "10px";
            }, 300)
            setTimeout( ()=>{
                anchor[3].style.left = "10px";
            }, 400)
        }

    }
}

const transformLine = document.getElementById("transformLine");
// setInterval(()=>{
//     // 시작시점
//     if(section4.offsetTop<= window.scrollY + innerHeight)
//     {
//         if(section4.offsetTop == window.scrollY)
//         {
//         }
//     }

// },16)

// 메뉴 토글 ON / OFF / navToggle
const navToggle = document.getElementById("navToggle");
navToggle.addEventListener('click',openeMenu,{once:true});

function openeMenu()
{
    navToggle.children[0].style.top = '5px';
    navToggle.children[1].style.opacity = '0';
    navToggle.children[2].style.top = '5px';
    setTimeout(()=>{
        navToggle.children[0].style.transform = 'rotate(45deg)';
        navToggle.children[2].style.transform = 'rotate(-45deg)';
    },250)
    setTimeout(()=>{
        navToggle.addEventListener('click',closeMenu,{once:true});
    },500)

    setTimeout( ()=>{
        anchor[0].style.left = "10px";
    }, 100)
    setTimeout( ()=>{
        anchor[1].style.left = "10px";
    }, 200)
    setTimeout( ()=>{
        anchor[2].style.left = "10px";
    }, 300)
    setTimeout( ()=>{
        anchor[3].style.left = "10px";
    }, 400)

    menu = true;
}
function closeMenu()
{
    navToggle.children[0].style.transform = 'rotate(0deg)';
    navToggle.children[2].style.transform = 'rotate(0deg)';
    setTimeout(()=>{
        navToggle.children[0].style.top = '0px';
        navToggle.children[1].style.opacity = '1';
        navToggle.children[2].style.top = '10px';
    },250)
    setTimeout(()=>{
        navToggle.addEventListener('click',openeMenu,{once:true});
    },500)

    setTimeout( ()=>{
        anchor[0].style.left = "-30px";
    }, 100)
    setTimeout( ()=>{
        anchor[1].style.left = "-30px";
    }, 200)
    setTimeout( ()=>{
        anchor[2].style.left = "-30px";
    }, 300)
    setTimeout( ()=>{
        anchor[3].style.left = "-30px";
    }, 400)

    menu = false;
}

const wrap = document.getElementById("wrap");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const wave1 = document.getElementsByClassName("wave1");
const card = document.getElementsByClassName("card");
const section4 = document.getElementById("section4");
const contact = document.getElementsByClassName("contact");
const myvision = document.getElementsByClassName("myvision");
const section6 = document.getElementById("section6");
const footI = document.getElementsByClassName("footI");
const circle2 = document.getElementById("circle2");


//  메인페이지 색상 토글 / DAY / NIGHT / dayNight
const dayNight = document.getElementById('dayNight');
dayNight.addEventListener('click',nightMod,{once:true});
function nightMod()
{
    // 배경 색 변경
    wrap.style.background = "linear-gradient(to bottom right, #0F2027, #203A43, #2C5364 )";
    // 나이트모드 속성 변경 칸!
    // 토글 변경
    dayNight.children[0].style.left = "15px";
    dayNight.children[0].style.backgroundColor = "gray";
    dayNight.children[0].style.boxShadow = "1px 1px 8px 3px white";
    dayNight.style.backgroundColor = "white";

    // headNav 변경
    navToggle.children[0].style.backgroundColor = "white";
    navToggle.children[1].style.backgroundColor = "white";
    navToggle.children[2].style.backgroundColor = "white";
    document.getElementById("title").style.color = "white";

    // section1 변경
    section1.style.color = "white";
    circle2.style.backgroundColor = "rgba(255, 255, 255, 0.493)";

    // 포인트 (못) 형태 변환
    pointMode = false;
    for (let i = 0; i<pointChildren.length; i++)
    {
        pointChildren[i].style.backgroundColor = "#376a80";
    }

    // section2 변경
    section2.children[0].style.color="white";
    for (let i=0; i<wave1.length; i++)
    {
        wave1[i].children[0].children[0].style.fill = "#2C5364";
        card[i].children[1].style.color = "#fffde4";
        card[i].children[2].style.color = "#f2f1df";
    }
    document.getElementsByClassName("icon")[0].style.fill = "#fffde4";

    // section3 변경
    AmIWho.style.color = "#fffde4";
    AmIWho.style.textShadow = "1px 1px 1px #002342"
    iAmWho.style.color = "#fffde4";
    for(let i = 0 ; i < mySpace.length; i++)
    {
        mySpace[i].style.color = "#fffde4";
        mySpace[i].style.textShadow = "1px 1px 1px #002342";
    }

    // section4 변경
    section4.children[0].style.color = "white";



    // section6 변경
    section6.style.backgroundColor = "#fffde4";
    section6.children[1].style.color = "#376a80"
    for(let i = 0; i < footI.length; i++)
    {
        footI[i].style.fill = "#376a80"
    }


    dayNight.addEventListener('click',dayMod,{once:true});
}
function dayMod()
{
    // 데이모드 속성 변경 칸!
    // 배경 색 변경
    wrap.style.background = "linear-gradient(to bottom right, #FFFDE4, #005AA7)";
    // 토글 변경
    dayNight.children[0].style.left = "0px";
    dayNight.children[0].style.backgroundColor = "white";
    dayNight.children[0].style.boxShadow = "1px 1px 8px 3px gray";
    dayNight.style.backgroundColor = "gray";
    
    // headNav 변경
    navToggle.children[0].style.backgroundColor = "black";
    navToggle.children[1].style.backgroundColor = "black";
    navToggle.children[2].style.backgroundColor = "black";
    document.getElementById("title").style.color = "black";

    // section1 변경
    section1.style.color = "black";
    circle2.style.backgroundColor = "#47708086";

    // 포인트 (못) 형태 변환
    pointMode = true;
    for (let i = 0; i<pointChildren.length; i++)
    {
        pointChildren[i].style.backgroundColor = "#fffde4";
        
    }

    // section2 변경
    section2.children[0].style.color="black";
    for (let i=0; i<wave1.length; i++)
    {
        wave1[i].children[0].children[0].style.fill = "#aed9ff";
        card[i].children[1].style.color = "#033c6e";
        card[i].children[2].style.color = "#002342";
    }
    document.getElementsByClassName("icon")[0].style.fill = "black";

    // section3 변경
    AmIWho.style.color = "#002342";
    AmIWho.style.textShadow = "1px 1px 1px #fffde4"
    iAmWho.style.color = "#002342";
    for(let i = 0 ; i < mySpace.length; i++)
    {
        mySpace[i].style.color = "#002342";
        mySpace[i].style.textShadow = "1px 1px 1px #fffde4";
    }

    // section4 변경
    section4.children[0].style.color = "black";



    // section6 변경
    section6.style.backgroundColor = "#164b77";
    section6.children[1].style.color = "#FFFDE4"
    for(let i = 0; i < footI.length; i++)
    {
        footI[i].style.fill = "#FFFDE4"
    }

    dayNight.addEventListener('click',nightMod,{once:true});
}

function scrollToWhere(where) {
    if (where == "Main")
    {
        window.scrollTo({left : 0, top : section1.offsetTop, behavior: "smooth"})
    }
    else if (where == "Skills")
    {
        window.scrollTo({left : 0, top : section2.offsetTop, behavior: "smooth"})
    }
    else if (where == "About")
    {
        window.scrollTo({left : 0, top : section3.offsetTop, behavior: "smooth"})
    }
    else if (where == "Archiving")
    {
        window.scrollTo({left : 0, top : section4.offsetTop, behavior: "smooth"})
    }
    
}


// myworks 애니메이션
let movingSpan = document.getElementById("transformLine");
movingSpan = movingSpan.children[0];
const projectContainer = document.getElementById("projectContainer");
let controller = new ScrollMagic.Controller();
let scene1 = new ScrollMagic.Scene({triggerElement: section4, duration : "30%"})
.addTo(controller)
.on("progress", function(e) {
    if ((e.progress.toFixed(2)) == 1)
    {
        movingSpan.style.left = "calc(0%)"
    }
    else
    {
        movingSpan.style.left = "calc(100%)"
    }
    // movingSpan.style.left = "calc(" + (100 - parseInt(e.progress.toFixed(2)*100)) +"%)";
    if ((e.progress.toFixed(2)) == 1)
    {
        projectContainer.style.opacity = "1";
        
        for (let i = 0; i < projectContainer.childElementCount; i++)
        {
            setTimeout(()=>{
                projectContainer.children[i].style.transform = "rotate(-10deg)";
                projectContainer.children[i].style.opacity = "1";
            }, i*600)
            setTimeout(()=>{
                projectContainer.children[i].style.transform = "rotate(10deg)";
            },i*600 + 300)
            setTimeout(()=>{
                projectContainer.children[i].style.transform = "rotate(0deg)";
            },i*600 + 600)
        }
    }
    else if ((e.progress.toFixed(2)) < 1)
    {
        projectContainer.style.opacity = "0";
        for (let i = 0; i < projectContainer.childElementCount; i++)
        {
            projectContainer.children[i].style.opacity = "0";                
        }
    }
})



const section3 = document.getElementById("section3");

let iAmWho = document.getElementById("iAmWho");

let myInfo = new TypeIt(iAmWho, {
    speed: 100
  })
  .type("안녕하세요.")
  .pause(500)
  .type(" 김준철 입니다.")
  .pause(4000)
  .move(-9)
  .pause(500)
  .delete(6, {speed:500})
  .pause(500)
  .type("건축학도,")
  .pause(4000)
  .delete(5, {speed:500})
  .pause(500)
  .type("웹개발자,")
  .pause(2000)
  .move(9)
  .pause(4000)
  .delete(14, {speed:500})
  .pause(2000)
  .type("잘 부탁드립니다.")
  .pause(4000)
  .delete(9, {speed:500})
  .type("스크롤을 계속 내려주세요.")



const mySpace = document.getElementsByClassName("mySpace");
const archi = document.getElementById("archi");
const web = document.getElementById("web");
const AmIWho = document.getElementById("AmIWho");

let timer1;
let timer2;
let timer3;

let scene2 = new ScrollMagic.Scene({triggerElement: section3, duration : "50%"})
.addTo(controller)
.on("progress", function(e) {
    if (e.progress.toFixed(2) ==1)
    {
        myInfo.go();
        for (let i = 0; i<mySpace.length; i++)
       {
        mySpace[i].style.opacity = "1"
        }
        AmIWho.style.opacity = "1";
        timer1 = setTimeout(function(){
            archi.style.opacity="1";
        }, 10000)
        timer2 = setTimeout(function(){
            web.style.opacity="1";
        }, 15800)
        // timer3 = setTimeout(function(){
        //     archi.style.opacity="0";
        //     web.style.opacity="0";
        // }, 25000)
        
    }
    else
    {
        myInfo.reset();
        for (let i = 0; i<mySpace.length; i++)
       {
        mySpace[i].style.opacity = "0"
        }
        AmIWho.style.opacity = "0";
        archi.style.opacity="0";
        web.style.opacity="0";
        clearTimeout(timer1);
        clearTimeout(timer2);
        // clearTimeout(timer3);
    }
})

