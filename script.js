// 상단 고정 네비게이션
const headNav = document.getElementById("headNav");
const anchor = document.getElementsByClassName("anchor");
let menu = false;
window.onwheel = (event) => 
{
    headNav.style.transition = "0.5s"
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
const section5 = document.getElementById("section5");
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

    // section4 변경
    section4.children[0].style.color = "white";

    // section5 변경
    section5.children[0].style.color = "white";
    for(let i = 0; i < contact.length; i++)
    {
        contact[i].style.color = "#fffde4";
    }

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

    // section4 변경
    section4.children[0].style.color = "black";

    // section5 변경
    section5.children[0].style.color = "black";
    for(let i = 0; i < contact.length; i++)
    {
        contact[i].style.color = "#033c6e";
    }

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
    else if (where == "Archiving")
    {
        window.scrollTo({left : 0, top : section4.offsetTop, behavior: "smooth"})
    }
    else if (where == "About")
    {
        window.scrollTo({left : 0, top : section5.offsetTop, behavior: "smooth"})
    }
}