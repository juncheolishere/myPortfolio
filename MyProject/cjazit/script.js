// 준철JS
// 네비바에서 메뉴화면으로 전환하기

window.onresize = function() {
    // 960px ~ 1440px 모바일 -> 모니터
    if (matchMedia("screen and (min-width:960px) and (max-width:1440px)").matches)
    {
        // 화면을 늘리면 메인 스크린모니터 화면으로 바꾼다.
        if (switchScreen == 1)
        {
            moveToMain();
        }
    }
    // 리사이즈 시점마다 'programDiv' 속성을 바꾼다.
    programDiv.style.height = innerHeight + "px";
    programDiv.style.width = innerWidth + "px";
    programDiv.style.backgroundPosition = "70% 0px";

    musicDiv.style.height = innerHeight*0.8 + "px";
    musicalDiv.style.height = innerHeight*0.8 + "px";
    movieDiv.style.height = innerHeight*0.8 + "px";

}

let colorArr = new Array('#b8183a','#4e265b','#1f3b7a',
'#392c24', '#313131', '#322e2b');
let reactBG = document.getElementById("reactBG");
let program_offsetTop = document.getElementById("programDiv").offsetTop;
let opacityC;
reactBG.style.height = program_offsetTop + "px";

const footerW = document.getElementById("footer");
window.onscroll = function() {
    program_offsetTop = document.getElementById("programDiv").offsetTop;
    reactBG.style.height = program_offsetTop + "px";
    if ( program_offsetTop - scrollY >= innerHeight*2 )
    {
        opacityC = 0;
    }
    else
    {
        opacityC = program_offsetTop - scrollY - innerHeight/2;
        opacityC = 1 - opacityC / 1000;
    }
    reactBG.style.backgroundColor = colorArr[slideNum];
    reactBG.style.opacity = opacityC;
    programDiv.style.opacity = opacityC;
    const footerW = document.getElementById("footer");
    footS = getComputedStyle(footerW)
    console.log(window.scrollY + innerHeight + 10 , footerW.offsetTop + parseInt(footS.height.split('p')[0]))
    if (window.scrollY + innerHeight +10 >= (footerW.offsetTop + parseInt(footS.height.split('p')[0])))
    {
        membershipDiv.style.opacity = "0.5";
    }
    else
    {
        membershipDiv.style.opacity = "1";
    }
}


// unit이 위치를 실시간으로 바꿔준다.
setInterval(function(){
    totalDiv.style.left = - (parseInt(sampleStyle.width.split("p")[0]) + parseInt(sampleStyle.marginRight.split("p")[0]) ) * slideNum  + "px";
    
    program_offsetTop = document.getElementById("programDiv").offsetTop;
    reactBG.style.height = program_offsetTop + "px";
    if ( program_offsetTop - scrollY >= innerHeight*2 )
    {
        opacityC = 0;
    }
    else
    {
        opacityC = program_offsetTop - scrollY - innerHeight/2;
        opacityC = 1 - opacityC / 1000;
    }
    reactBG.style.backgroundColor = colorArr[slideNum];
    reactBG.style.opacity = opacityC;
    programDiv.style.opacity = opacityC;

}, 16)
// 배경 이미지 설정하기
let programDiv = document.getElementById("programDiv");
programDiv.style.height = innerHeight + "px";
programDiv.style.width = innerWidth + "px";
programDiv.style.backgroundImage = "url(img_src/program-bg-1-tune-up.jpg)"
programDiv.style.backgroundPosition = "70% 0px";
// 클릭하면 섹션이 네비게이션 div로 바뀐다
switchScreen=0;
function moveToNav(){
    let menuIcons = document.getElementById("myInfo");
    let dis = document.getElementById("screen1");
    let app = document.getElementById("mobile1");
    if (switchScreen == 0)
    {
        switchScreen += 1;
        dis.classList.add("none");
        app.classList.remove("none");
        app.classList.remove("mobile_icon2");
        menuIcons.children[0].classList.add("none");
        menuIcons.children[1].classList.add("none");
        menuIcons.children[2].classList.add("none");
        menuIcons.children[3].classList.remove("mobile_icon1");
        menuIcons.children[3].classList.add("none");
        menuIcons.children[4].classList.remove("none");
    }
}
// 클릭하면 섹션이 본문으로 바뀐다.
function moveToMain() {
    let menuIcons = document.getElementById("myInfo");
    let dis = document.getElementById("screen1");
    let app = document.getElementById("mobile1");
    if (switchScreen == 1)
    {
        switchScreen = 0;
        dis.classList.remove("none");
        app.classList.add("none");
        app.classList.add("mobile_icon2");
        menuIcons.children[0].classList.remove("none");
        menuIcons.children[1].classList.remove("none");
        menuIcons.children[2].classList.remove("none");
        menuIcons.children[3].classList.remove("none");
        menuIcons.children[3].classList.add("mobile_icon1");
        menuIcons.children[4].classList.add("none");
    }
}


// 토글 애니메이션
let plusMinusT = false;
let sumH;
function openMobileNav(oo) {
    let obj = oo.parentNode;
    let plus1 = obj.children[1];
    let plus2 = obj.children[2];
    let baby = obj.children[3];
    // "-" 된 카테고리 클릭해서 "+"로 만든다
    if(plus1.style.transform == 'rotate(-180deg)')
    {

        plus1.style.transform = 'rotate(0deg)';
        plus2.style.transform = 'rotate(90deg)';
        baby.style.height = "0px";
        plusMinusT=false;

    }
    // "+" 카테고리 클릭해서 "-"로 만든다
    else if (plusMinusT == false)
    {
        plus1.style.transform = 'rotate(-180deg)';
        plus2.style.transform = 'rotate(180deg)';

        sumH = 81*baby.children.length;
        baby.style.height = sumH+"px";
 
        plusMinusT=true;
    }
    // 이미 "-" 된 카테고리를 "+" 로 바꾸고 클릭한 카테고리를 "-"로 바꿈
    else
    {
        if (plusMinusT2==true)
        {
            let closeK = document.getElementsByClassName("m_level2")[1];
            closeMobileNav2(closeK.children[0]);
        }
        closeMobileNav(obj);
        openMobileNav(oo);
    }
}

//  모든 카테고리를 + 로 만들어주는 함수
function closeMobileNav(obj) {
    let mySiblings = obj.parentNode.children
    for (let i=0; i < mySiblings.length; i++)
    {
        let babies = mySiblings[i].children;
        babies[1].style.transform = 'rotate(0deg)';
        babies[2].style.transform = 'rotate(90deg)';
        babies[3].style.height = "0px";
    }
    plusMinusT = false;
}

// 2단 클릭시 함수
let plusMinusT2 = false;
let sumH2;
function openMobileNav2(oo) {
    let obj = oo.parentNode;
    let plus1 = obj.children[1];
    let plus2 = obj.children[2];
    let baby = obj.children[3];
    // "-" 된 카테고리 클릭해서 "+"로 만든다
    if(plus1.style.transform == 'rotate(-180deg)')
    {

        plus1.style.transform = 'rotate(0deg)';
        plus2.style.transform = 'rotate(90deg)';
        baby.style.height = "0px";
        obj.parentNode.style.height = sumH + "px";
        plusMinusT2=false;
    }
    // "+" 카테고리 클릭해서 "-"로 만든다
    else if (plusMinusT2 == false)
    {
        plus1.style.transform = 'rotate(-180deg)';
        plus2.style.transform = 'rotate(180deg)';

        sumH2 = 81*baby.children.length;
        baby.style.height = sumH2+"px";
        obj.parentNode.style.height = sumH + sumH2 + "px";
        plusMinusT2=true;
    }
    // 이미 "-" 된 카테고리를 "+" 로 바꾸고 클릭한 카테고리를 "-"로 바꿈
    else
    {
        closeMobileNav2(obj);
        openMobileNav2(oo);
    }
}
function closeMobileNav2(obj) {
    let mySiblings = obj.parentNode.children;
    for (let i=0; i < mySiblings.length; i++)
    {
        let babies = mySiblings[i].children;
        babies[1].style.transform = 'rotate(0deg)';
        babies[2].style.transform = 'rotate(90deg)';
        babies[3].style.height = "0px";
    }
    plusMinusT2 = false;
}

// 버튼 클릭 시 백그라운드 이미지가 바뀌며 슬라이드가 움직인다.
let slideNum = 0 ;
let slideArr = new Array('img_src/program-bg-1-tune-up.jpg',
'img_src/program-bg-2-stage-up.jpg','img_src/program-bg-3-story-up.jpg',
'img_src/program-bg-4-learnfare.jpg','img_src/program-bg-5-film-festival.jpg',
'img_src/program-bg-6-yoojaeha.jpg');

document.getElementById("nextPrevBtn").children[0].addEventListener('click',function() {prevSlide(this)}, {once : true});
document.getElementById("nextPrevBtn").children[1].addEventListener('click',function() {nextSlide(this)}, {once : true});


let totalDiv = document.getElementById("program_detail");
let totalStyle = getComputedStyle(totalDiv);
let divSample = document.getElementsByClassName("unit")[0];
let sampleStyle = getComputedStyle(divSample);
// innerWidth 값을 계속 바뀌므로 window.onresize 에서 변경

function nextSlide(obj) {
    totalDiv = document.getElementById("program_detail");
    divSample = document.getElementsByClassName("unit")[0];
    sampleStyle = getComputedStyle(divSample);
    // '>' 눌렀을 때 카운트
    slideNum += 1;

    if(slideNum == slideArr.length-1)
    {
        document.getElementById("nextPrevBtn").children[1].classList.add("blur")
    }
    else if(slideNum == 1)
    {
        document.getElementById("nextPrevBtn").children[0].classList.remove("blur")
    }
    else if (slideNum == slideArr.length)
    {
        slideNum -= 1;
    }
    obj.classList.add("circleShadow");
    let baby = obj.parentNode.children[0];
    baby.classList.remove("circleShadow");
    programDiv.style.backgroundImage = "url("+slideArr[slideNum]+")";

    totalDiv.style.left = - (parseInt(sampleStyle.width.split("p")[0]) + parseInt(sampleStyle.marginRight.split("p")[0]) ) * slideNum  + "px";

    reactBG.style.backgroundColor = colorArr[slideNum];

    setTimeout(function(){
        obj.addEventListener('click',function() {nextSlide(this);}, {once : true});
    }, 800)



}
function prevSlide(obj) {
    // '<' 눌렀을 때 카운트
    totalDiv = document.getElementById("program_detail");
    divSample = document.getElementsByClassName("unit")[0];
    sampleStyle = getComputedStyle(divSample);
    slideNum -= 1;
    if(slideNum == 0)
    {
        document.getElementById("nextPrevBtn").children[0].classList.add("blur")
    }
    else if(slideNum == slideArr.length - 2)
    {
        document.getElementById("nextPrevBtn").children[1].classList.remove("blur")
    }
    else if (slideNum <= 0)
    {
        slideNum = 0;
    }
    obj.classList.add("circleShadow");
    let baby = obj.parentNode.children[1];
    baby.classList.remove("circleShadow");
    programDiv.style.backgroundImage = "url("+slideArr[slideNum]+")";

    totalDiv.style.left = - (parseInt(sampleStyle.width.split("p")[0]) + parseInt(sampleStyle.marginRight.split("p")[0]) ) * slideNum  + "px";

    reactBG.style.backgroundColor = colorArr[slideNum];

    setTimeout(function(){
        obj.addEventListener('click',function() {prevSlide(this);}, {once : true});
    }, 800)

}

// 동휘님 JS
const coverTab = document.getElementById('coverTab');
const musicTab = document.getElementById('musicTab');
const musicalTab = document.getElementById('musicalTab');
const movieTab = document.getElementById('movieTab');
const programTab = document.getElementById('programTab');
const membershipTab = document.getElementById('membershipTab');

const coverDiv = document.getElementById('coverDiv');
const musicDiv = document.getElementById('musicDiv');
const musicalDiv = document.getElementById('musicalDiv');
const movieDiv = document.getElementById('movieDiv');
const membershipDiv = document.getElementById('membershipDiv');
const sideNav = document.getElementsByClassName('sideNav');
let memberS = getComputedStyle(membershipDiv);

let currentTab = coverTab;

const sideTab = document.getElementById("sideTab");

musicDiv.style.height = innerHeight*0.8 + "px";
musicalDiv.style.height = innerHeight*0.8 + "px";
movieDiv.style.height = innerHeight*0.8 + "px";
// membershipDiv.style.height = innerHeight*0.8 + "px";
// 스크롤되면 해당하는 탭이 강조되도록 하는 함수
function scrollHandler () {
    if (scrollY >= coverDiv.offsetTop+innerHeight/2)
    {
        sideTab.style.left = "0px";
    }
    else
    {
        sideTab.style.left = "-50px";
    }
    const currentScroll = window.scrollY;

    // 기존 강조된 탭 해제
    currentTab.classList.remove('current');

    // 스크롤된 높이에 따라 새로운 탭 강조
    if(currentScroll < coverDiv.offsetTop+innerHeight/2 ) {
        for (let i = 0; i < sideNav.length; i++)
        {
            sideNav[i].style.color = 'black';
        }
        coverTab.classList.add('current');
        currentTab = coverTab;
    } else if (currentScroll <musicDiv.offsetTop+innerHeight/2 ){
        for (let i = 0; i < sideNav.length; i++)
        {
            sideNav[i].style.color = 'black';
        }
        musicTab.classList.add('current');
        currentTab = musicTab;
    } else if (currentScroll < musicalDiv.offsetTop+innerHeight/2 ){
        for (let i = 0; i < sideNav.length; i++)
        {
            sideNav[i].style.color = 'black';
        }
        musicalTab.classList.add('current');
        currentTab = musicalTab;
    } else if (currentScroll < movieDiv.offsetTop+innerHeight/2){
        for (let i = 0; i < sideNav.length; i++)
        {
            sideNav[i].style.color = 'black';
        }
        movieTab.classList.add('current');
        currentTab = movieTab;
    } else if (currentScroll < programDiv.offsetTop+innerHeight/2){
        for (let i = 0; i < sideNav.length; i++)
        {
            sideNav[i].style.color = 'white';
        }
        programTab.classList.add('current');
        currentTab = programTab;
    } else {
        for (let i = 0; i < sideNav.length; i++)
        {
            sideNav[i].style.color = 'black';
        }
        membershipTab.classList.add('current');
        currentTab = membershipTab;
    }


}

window.addEventListener('scroll', scrollHandler);

// coverDiv 슬라이드
let coverSlideToggle = false;
function coverSlide(obj) {
    let imgDiv = document.getElementById("coverDiv").children[0];
    let mySiblings = obj.parentNode.children;
    mySiblings[0].style.width = "15px";
    mySiblings[0].style.opacity = "0.8";
    mySiblings[1].style.width = "15px";
    mySiblings[1].style.opacity = "0.8";
    obj.style.width = "50px";
    obj.style.opacity = "1";

    if (coverSlideToggle == true && obj.title == 'left')
    {
        imgDiv.style.backgroundImage = "url(img_src/by171552345sv.jpg)"
        coverSlideToggle = false;
    }
    else if ( obj.title == 'right')
    {
        imgDiv.style.backgroundImage = "url(img_src/maxresdefault.webp)"
        coverSlideToggle = true;
    }
}
// musicDiv 슬라이드
document.getElementById("musicDiv").children[1].children[0].addEventListener('click',function() {musicSlidePrev(this)}, {once : true});
document.getElementById("musicDiv").children[1].children[1].addEventListener('click',function() {musicSlideNext(this)}, {once : true});

let imgWidth;
const imgDiv = document.getElementById("musicDiv").children[2];
let musicSlideToggle = 0;

function musicSlideNext(obj) {

    imgWidth = imgDiv.children[0];
    imgWidth = getComputedStyle(imgWidth);
    imgWidth = parseInt(imgWidth.width.split('p')[0]) + parseInt(imgWidth.marginRight.split('p')[0]);

    musicSlideToggle += 1;

    if( musicSlideToggle == 1 )
    {
        obj.parentNode.children[0].classList.remove("blur");
    }
    else if (musicSlideToggle >=3)
    {
        musicSlideToggle = 3;
        obj.classList.add('blur');
    }

    imgDiv.style.left =(-imgWidth*musicSlideToggle) + 'px';
    setTimeout(function(){ document.getElementById("musicDiv").children[1].children[1].addEventListener('click',function() {musicSlideNext(this)}, {once : true});}
        , 800)
}
function musicSlidePrev(obj) {
    imgWidth = imgDiv.children[0];
    imgWidth = getComputedStyle(imgWidth);
    imgWidth = parseInt(imgWidth.width.split('p')[0]) + parseInt(imgWidth.marginRight.split('p')[0]);

    musicSlideToggle -= 1;

    if( musicSlideToggle == 2 )
    {
        obj.parentNode.children[1].classList.remove("blur");
    }
    else if (musicSlideToggle <=0)
    {
        musicSlideToggle = 0;
        obj.classList.add('blur');
    }

    imgDiv.style.left = (-imgWidth*musicSlideToggle) + 'px';
    setTimeout(function(){ document.getElementById("musicDiv").children[1].children[0].addEventListener('click',function() {musicSlidePrev(this)}, {once : true});}
    , 800)
}


// musicalDiv 슬라이드
document.getElementById("musicalDiv").children[1].children[0].addEventListener('click',function() {musicalSlidePrev(this)}, {once : true});
document.getElementById("musicalDiv").children[1].children[1].addEventListener('click',function() {musicalSlideNext(this)}, {once : true});

let musicalWidth;
const musicalImgDiv = document.getElementById("musicalDiv").children[2];
let musicalSlideToggle = 0;

function musicalSlideNext(obj) {

    musicalWidth = musicalImgDiv.children[musicalSlideToggle];
    musicalWidth = getComputedStyle(musicalWidth);
    musicalWidth = parseInt(musicalWidth.width.split('p')[0]) + parseInt(musicalWidth.marginRight.split('p')[0]);

    musicalSlideToggle += 1;

    if( musicalSlideToggle == 1 )
    {
        obj.parentNode.children[0].classList.remove("blur");
    }
    else if (musicalSlideToggle >=3)
    {
        musicalSlideToggle = 3;
        obj.classList.add('blur');
    }

    musicalImgDiv.style.left =(-musicalWidth*musicalSlideToggle) + 'px';
    setTimeout(function(){ document.getElementById("musicalDiv").children[1].children[1].addEventListener('click',function() {musicalSlideNext(this)}, {once : true});}
        , 800)
}
function musicalSlidePrev(obj) {
    let k;
    if (musicalSlideToggle - 1 <= 0)
    {
        k = musicalSlideToggle;
    }
    else
    {
        k = musicalSlideToggle - 1;
    }
    musicalWidth = musicalImgDiv.children[k];
    musicalWidth = getComputedStyle(musicalWidth);
    musicalWidth = parseInt(musicalWidth.width.split('p')[0]) + parseInt(musicalWidth.marginRight.split('p')[0]);

    musicalSlideToggle -= 1;

    if( musicalSlideToggle == 2 )
    {
        obj.parentNode.children[1].classList.remove("blur");
    }
    else if (musicalSlideToggle <=0)
    {
        musicalSlideToggle = 0;
        obj.classList.add('blur');
    }
    musicalImgDiv.style.left = (-musicalWidth*musicalSlideToggle) + 'px';
    setTimeout(function(){ document.getElementById("musicalDiv").children[1].children[0].addEventListener('click',function() {musicalSlidePrev(this)}, {once : true});}
    , 800)
}



// movie 슬라이드
document.getElementById("movieDiv").children[1].children[0].addEventListener('click',function() {movieSlidePrev(this)}, {once : true});
document.getElementById("movieDiv").children[1].children[1].addEventListener('click',function() {movieSlideNext(this)}, {once : true});

let movieWidth;
const movieImgDiv = document.getElementById("movieDiv").children[2];
let movieSlideToggle = 0;

function movieSlideNext(obj) {

    movieWidth = movieImgDiv.children[movieSlideToggle];
    movieWidth = getComputedStyle(movieWidth);
    movieWidth = parseInt(movieWidth.width.split('p')[0]) + parseInt(movieWidth.marginRight.split('p')[0]);

    movieSlideToggle += 1;

    if( movieSlideToggle == 1 )
    {
        obj.parentNode.children[0].classList.remove("blur");
    }
    else if (movieSlideToggle >=3)
    {
        movieSlideToggle = 3;
        obj.classList.add('blur');
    }

    movieImgDiv.style.left =(-movieWidth*movieSlideToggle) + 'px';
    setTimeout(function(){ document.getElementById("movieDiv").children[1].children[1].addEventListener('click',function() {movieSlideNext(this)}, {once : true});}
        , 800)
}
function movieSlidePrev(obj) {
    let k;
    if (movieSlideToggle - 1 <= 0)
    {
        k = movieSlideToggle;
    }
    else
    {
        k = movieSlideToggle - 1;
    }
    movieWidth = movieImgDiv.children[k];
    movieWidth = getComputedStyle(movieWidth);
    movieWidth = parseInt(movieWidth.width.split('p')[0]) + parseInt(movieWidth.marginRight.split('p')[0]);

    movieSlideToggle -= 1;

    if( movieSlideToggle == 2 )
    {
        obj.parentNode.children[1].classList.remove("blur");
    }
    else if (movieSlideToggle <=0)
    {
        movieSlideToggle = 0;
        obj.classList.add('blur');
    }
    movieImgDiv.style.left = (-movieWidth*movieSlideToggle) + 'px';
    setTimeout(function(){ document.getElementById("movieDiv").children[1].children[0].addEventListener('click',function() {movieSlidePrev(this)}, {once : true});}
    , 800)
}