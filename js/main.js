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
const img = document.querySelector("img");
const title = document.querySelector("h2");
const text = document.querySelector("h5");
// variabile contatore 
let i=0; 
function changeImg(i){
    img.src = images[i].image
    title.innerText = images[i].title
    text.innerText = images[i].text
}
btn_next.addEventListener("click", () =>{
     if(i<images.length-1){
        i++ 
        changeImg(i)
    } 
    else{
        i = 0
        changeImg(i)
    }
})


btn_prev.addEventListener("click", () =>{
    if(i>0){
       i--
       changeImg(i)
       
   } 
   else{
       i =images.length - 1
       changeImg(i)
   }
})