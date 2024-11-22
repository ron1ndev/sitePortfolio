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

    printText(helloText,'Hello, world',0,100)
    printText(heroTitleDev,'Разработка',0,170)

})









// Scroll

const skillsItems = document.querySelectorAll('.skills__item');
const skillsTitle = document.querySelector('.skills__title');
const experienceItems = document.querySelectorAll('.item-experience__info');
const test = document.querySelectorAll('.test');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === 'skills') {
          skillsItems.forEach((item) => item.classList.add('active'));
          skillsTitle.classList.add('active');
        }

        if (entry.target.id === 'experience') {
          experienceItems.forEach((item) => item.classList.add('active'));
          test.forEach((item) => item.classList.add('active'));
        }
      }
    });
  },
  {
    threshold: 0.5, // Установим порог на 50% видимости элемента
  }
);

const skillSection = document.querySelector('#skills');
const experienceSection = document.querySelector('#experience');

// Подключаем наблюдение для обеих секций
observer.observe(skillSection);
observer.observe(experienceSection);





// Tabs

const tabsContols = document.querySelectorAll('.contols-tabs__item');
const slides = document.querySelectorAll('.swiper-slide');






function hideSlides(item){
    
    slides.forEach((item)=>{
        item.classList.remove('active')
    })

    tabsContols.forEach((item)=>{
        item.classList.remove('active')
    })
}

function activeTab(e){
    e.target.classList.add('active')
}

tabsContols.forEach(item=>{
    item.addEventListener('click',(e)=>{

        swiper.slideTo(0); // Запускает слайд с первого

        hideSlides(item) // Скрываем неактивные слайды и табы

        activeTab(e) // Активный таб
        

        let target = e.target;
        let countSlides = 0
        slides.forEach((item)=>{
            
            if(target.dataset.info === 'all'){
                slides.forEach(item=>{
                    item.classList.add('active') 
                })
            }else{
                if(target.dataset.info === item.getAttribute('data-info')){
                    item.classList.add('active')
                }
            }
            
            if(item.classList.contains('active')){
                countSlides++
            }
            
           
        })

        console.log(countSlides)

        updateSwiperSlides(countSlides);


    })


})



// Функция для обновления слайдов в Swiper
function updateSwiperSlides(countSlides) {
    // Перебираем все слайды и скрываем неактивные
    slides.forEach(slide => {

        
      if (slide.classList.contains('active')) {
        slide.style.display = 'block'; // Показываем активные слайды
      } else {
        slide.style.display = 'none'; // Скрываем неактивные слайды
      }
    });
  
    // Обновляем Swiper, чтобы он пересчитал слайды
    swiper.update();
  }
  

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
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1517: {
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

      on: {
        init: function() {
          // Здесь "this" указывает на объект swiper
          console.log('Общее количество слайдов: ', this.slides.length);
        },
        slideChange: function () {
          console.log('Текущий активный слайд: ', this.activeIndex);
          console.log('Общее количество слайдов: ', this.slides.length);
          
          // Проверка, достигнут ли последний слайд
          if (this.isEnd) {
            console.log('Достигнут последний слайд');
          } else if (this.isBeginning) {
            console.log('Вы на первом слайде');
          }
        }
      }
  
  });