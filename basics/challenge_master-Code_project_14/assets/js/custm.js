let nav = document.querySelector('nav');





// --------------------------- << spiner or load >> ----------------------------- //

let cover = document.querySelector(".cover");

window.addEventListener('load', ()=>{
    cover.classList.add('cover-hide')
    setTimeout( ()=>{
        cover.remove();

    }, 600);
});




// --------------------------- << spiner or load >> ----------------------------- //



// let btn = document.querySelector('.navbar-toggler-icon');
// let main = document.querySelector('main');





// btn.addEventListener('click', ()=>{
//    if(btn){
//      main.style.paddingTop = '420px';
//     main.style.backgroundImage = 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)';
//    }
    
// });











// --------------------- bars ------------------- //


// let navs = document.querySelector("nav");
// let bars = document.querySelector(".navbar-toggler-icon");
// let content = document.querySelector('#section1');

// bars.addEventListener('click', ()=>{
// if (navs.clientHeight == 0){

// navs.style.height = `${navs.scrollHeight}px`;
// content.style.marginTop = '250px';
// }else{
//     navs.style.height = "";
//     content.style.marginTop = "";
// }
// });






//--------------------------- fit text ----------------------//
jQuery(".fit").fitText(1.5);
jQuery(".fitT").fitText(1.10 );









