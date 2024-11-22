const skillsItems = document.querySelectorAll('.skills__item');
const skillsTitle = document.querySelector('.skills__title');
const experienceItems = document.querySelectorAll('.experience__item');

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