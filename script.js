let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.className = "letter";
        span.textContent = letter;
        word.append(span);

    })
})

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex +1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className ="letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i *80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)

// circle skill/////////////////

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;
 
    for(let i = 0 ; i < dots ; i++){
       points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i < percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
})


const menuicons = document.querySelector("#menu-icons");
const navList = document.querySelector(".navlist");

menuicons.addEventListener('click',()=>{
    menuicons.classList.toggle('bx-x');
    navList.classList.toggle("open");
})

window.addEventListener('scroll',()=>{
    menuicons.classList.remove('bx-x');
    navList.classList.remove("open");
})


// // circle skill/////////////////

// let menuLi = document.querySelectorAll('header ul li a');
// let section = document.querySelectorAll('section');


// function activeMenu(){
//     let len = section.length;
//     while(--len && window.scrollY + 97 < section[len].offsetTop){}
//     menuLi.forEach(sec => sec.classList.remove("active"));
//     menuLi[len].classList.add(active);
// }

// activeMenu();
// Window.addEventListener("scroll",activeMenu);


// ///////////////sticky navbar/////////////////

// const navlist = document.querySelector(".navlist");
// window.addEventListener("scroll",function(){
//     navlist.classList.toggle("sticky",window.scrollY > 50);  
// }) 


///////////////paral lax///////////////////////////

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

