//

window.addEventListener('load',()=>{
    heroTitleOverlay1 = document.querySelector('.hero__title-overlay1');
    heroTitleOverlay2 = document.querySelector('.hero__title-overlay2');
    setTimeout(()=>{
        heroTitleOverlay1.classList.add('active');
    },2000)
    
    setTimeout(()=>{
        heroTitleOverlay2.classList.add('active');
    },500)
   

})
const helloText = document.querySelector('.hello__text');
let text = 'Hello,world'
let index = 0;




function printText(){
    
    helloText.innerHTML = text.slice(0,index);
    index++

    if(index<=text.length){
        setTimeout(()=>{
            printText()
        },200)
    }
}



printText()