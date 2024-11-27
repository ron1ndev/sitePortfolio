// Появление элементов на странице
window.addEventListener('load',()=>{
   
    window.location.hash = ''
    // window.scrollTo(0, 0); // Прокрутит окно вниз на 500 пикселей

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



const linkItem = document.querySelectorAll('a[href^="#"]');

linkItem.forEach(item=>{
  item.addEventListener('click',(e)=>{
    e.preventDefault();
    let targetId = item.getAttribute('href').slice(1);
    let target = document.querySelector(`#${targetId}`)

    target.scrollIntoView({
      behavior:"smooth",
      block:'start'
    })
  })
})




// Scroll

const skillsItems = document.querySelectorAll('.skills__item');
const skillsTitle = document.querySelector('.skills__title');
const experienceItems = document.querySelectorAll('.item-experience__info');
const test = document.querySelectorAll('.test');


const experienceItem = document.querySelectorAll('.experience__item');
const title = document.querySelectorAll('.title');

const projects = document.querySelector('#projects');
const contolsTabsItem = document.querySelectorAll('.contols-tabs__item');

const footer = document.querySelector('#footer');
const socialList = document.querySelector('.social__list');
const footerEmail = document.querySelector('.footer__email');
const footerCity = document.querySelector('.footer__city');

const observer = new IntersectionObserver((entries,observer)=>{
  entries.forEach(({isIntersecting,target})=>{
    if(isIntersecting){
      if(target===skillSection){
        skillsItems.forEach(item=>{
          item.classList.add('active')
        })
        skillsTitle.classList.add('active')
      }

      title.forEach(item=>{
        if(item==target){
          item.classList.add('active')
        }
      })

      if(target===projects){
        contolsTabsItem.forEach(item=>{
          item.classList.add('active2')
        })
        document.querySelector('.swiper-wrapper').classList.add('active')
        document.querySelector('.swiper-scrollbar').classList.add('active')
      }



    }
  })
},{
  threshold:1
})

const observer2 = new IntersectionObserver((entries,observer)=>{
  entries.forEach(({isIntersecting,target})=>{
    if(isIntersecting){

      experienceItem.forEach(item=>{
        if(item===target){
          item.querySelector('.item-experience__info').classList.add('active');
          item.querySelector('.item-experience__year').classList.add('active');
          item.querySelector('.test').classList.add('active2')
                
        }
      })

      if(target===footer){
        socialList.classList.add('active')
        footerEmail.classList.add('active')
        footerCity.classList.add('active')
        
      }


    }
  })
},{
  threshold:0.6
})



const skillSection = document.querySelector('#skills');
const experienceSection = document.querySelector('#experience');


// Подключаем наблюдение для обеих секций
startObserve(skillSection)
startObserve(title)
startObserve(projects)

observer2.observe(footer)

experienceItem.forEach(item=>{
  observer2.observe(item)
})


function isArr(obj){

  if(typeof obj.length === 'number'){
    return true
  }else{
    return false
  }
}

function startObserve(section){
    if(isArr(section)){
      section.forEach(item=>{
        observer.observe(item)
      })
    }else{
      observer.observe(section)
    }
}









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


  
  const tabsItem = document.querySelectorAll('.content-tabs__item');


  function removeActiveTabsItem(){
    tabsItem.forEach(item=>{

      let itemOverlay = item.querySelector('.content-tabs__img-overlay');
      let itemIcon = item.querySelector('.content-tabs__img-icons');

        itemOverlay.classList.remove('active');
        itemIcon.classList.remove('active');      
    })
  };

  function addActiveTabsItem(overlay,icon){
    overlay.classList.add('active')
    icon.classList.add('active')    
  };

  window.addEventListener('touchstart',(e)=>{
      let target = e.target;
      if(target.closest('.content-tabs__item')){

        let parent = target.closest('.content-tabs__item');
        let itemOverlay = parent.querySelector('.content-tabs__img-overlay');
        let itemIcon = parent.querySelector('.content-tabs__img-icons');

        removeActiveTabsItem();
        addActiveTabsItem(itemOverlay,itemIcon);
        
      }else{
        removeActiveTabsItem();
      }
  })


 

  // tabsItem.forEach(item=>{

  //   let itemImg = item.querySelector('.content-tabs__img');
  //   let itemOverlay = item.querySelector('.content-tabs__img-overlay');
  //   let itemIcon = item.querySelector('.content-tabs__img-icons');

  //   item.addEventListener('click',(e)=>{
  //     console.log()
  //     if(e.currentTarget.classList.contains('.content-tabs__item"')){
  //       console.log(true)
  //     }else{
  //       console.log(false)
  //     }
  //     itemOverlay.classList.toggle('active')
  //     itemIcon.classList.toggle('active')
  //   })
  //   // console.log(itemIcon)

  // })
  

