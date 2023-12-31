const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// recupero elementi in index 
const btn_prev = document.querySelector(".prev"); 
const btn_next = document.querySelector(".next"); 
const btn_start = document.getElementById("avvia");
const btn_stop = document.getElementById("ferma");
const btn_invert = document.getElementById("inverti");

const img = document.querySelector("img");
const title = document.querySelector("h2");
const text = document.querySelector("h5");
const carousel = document.querySelector(".carousel")
let imagin;
// variabile contatore 
let i=0; 
// funzione per cambio immagini 
function changeImg(i){
    
    img.src = images[i].image
    title.innerText = images[i].title
    text.innerText = images[i].text
    
    
    let carosel_img = document.getElementById(i);
    carosel_img.className ="layout"
    
    console.log(carosel_img)
}


let count = 0;
images.forEach((elem) => {
    imagin = document.createElement("img");
    imagin.setAttribute("id", count)
    imagin.src = elem.image;
    carousel.appendChild(imagin);
    count++;
});

// auto carosello 
btn_start.addEventListener("click", () =>{
    auto_carosel = setInterval(() =>{

        btn_start.disabled = true
        document.getElementById(i).className = ' '
        if(i == images.length-1){
            i = -1;
        }
        i++
        changeImg(i)
    }, 1000)
})
btn_stop.addEventListener("click", () =>{
    clearInterval(auto_carosel)
    btn_start.disabled = false
    btn_invert.disabled = false
})
btn_invert.addEventListener("click", () =>{
    auto_carosel = setInterval(() =>{
        btn_invert.disabled = true
        document.getElementById(i).className = ' '
        if(i == 0){
            i = images.length;;
        }
        i--
        changeImg(i)

    }, 1000)
})


  

// pulsante next 
btn_next.addEventListener("click", () =>{

    document.getElementById(i).className = ' '

     if(i<images.length-1){
        i++ 
        changeImg(i)
    } 
    else{
        i = 0
        changeImg(i)
    }
})

// pulsante prev 
btn_prev.addEventListener("click", () =>{

    document.getElementById(i).className = ' '

    if(i>0){
       i--
       changeImg(i)   
   } 
   else{
       i =images.length - 1
       changeImg(i)
   }
})


// PERMETTIAMO DI CLICCARE SULLE IMMAGINI E DI SELEZIONARLE COME PRINCIPALE 
let img_click = document.querySelectorAll("img");
for(let i = 0; i<img_click.length; i++){
    img_click[i].addEventListener("click", () =>{
        img.src = img_click[i].src
    })
}
