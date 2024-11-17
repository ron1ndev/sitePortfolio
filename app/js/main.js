// Появление элементов на странице
window.addEventListener('load',()=>{

    // функция для показа элемента 
    function showElem(selector,speed,clazz='active'){

        setTimeout(()=>{
            selector.classList.add(clazz);
        },speed)
    }
    
    showElem(document.querySelector('.hero__title-overlay1'),1000)
    showElem(document.querySelector('.hero__title-overlay2'),500)


    // Автоматическое печатание текста на странице
    const helloText = document.querySelector('.hello__text');
    const heroTitleDev= document.querySelector('.hero__title-dev');

    function printText(selector,text,index,speed){

        selector.innerHTML = text.slice(0,index);
        index++

        if(index <= text.length){
            setTimeout(()=>printText(selector,text,index,speed),speed)
        }
    }

    printText(helloText,'Hello,world',0,100)
    printText(heroTitleDev,'Разработка',0,170)

})



// Tabs

const tabsContols = document.querySelectorAll('.contols-tabs__item');
const slides = document.querySelectorAll('.swiper-slide');


tabsContols.forEach((item,index)=>{
item.addEventListener('click',(e)=>{

    swiper.slideTo(0);

    slides.forEach((item)=>{
        item.classList.remove('active')
    })
    tabsContols.forEach((item)=>{
        item.classList.remove('active')
    })
    e.target.classList.add('active')

    if(index===0){
        slides.forEach((item)=>{
            item.classList.add('active')
        })
    }

    if(index===1){
        slides.forEach((item)=>{
            if(item.getAttribute('data-info')==='internet'){
                item.classList.add('active')
            }
        })
    }

    if(index===2){
        slides.forEach((item)=>{
            if(item.getAttribute('data-info')==='lending'){
                item.classList.add('active')
            }
        })
    }

    if(index===3){
        slides.forEach((item)=>{
            if(item.getAttribute('data-info')==='letter'){
                item.classList.add('active')
            }
        })
    }

})
})

// Swiper

  var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },

        navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
      },
  
  });