document.cookie = "session=abc; SameSite=Strict;";

//API  card
function getCharacters(done) {

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

    getCharacters(data => {
        const maxCharacters = 5;
        for (let i = 0; i < data.results.length && i < maxCharacters; i++) {
        const personaje = data.results[i];
        const article = document.createRange().createContextualFragment(`
            <article id="article" class="col-container"> 
                <div class="pt-4"> 
                    <img class="img-fluid img-container" src="${personaje.image}" alt="personaje"> 
                </div> 
                <div class="capa text-center">
                    <h5 class="text-hover">${personaje.species}</h5>
                    <h5 class="text-hover bold font-weight-bold"><stronge>${personaje.status}</stronge></h5>
                    <h5 class="text-hover">${personaje.gender}</h5>
                </div>
                <h5 class="pt-5 bold font-weight-bold text-personajes"<stronge>${personaje.name}</stronge></h5> 
            </article>`
            );
        const main = document.querySelector("main");
        main.append(article)}
    });


//VIDEO 
document.getElementById("open-popup").addEventListener("click", function(){
    document.getElementById("popup").style.display = "block";
});

document.getElementById("close-popup").addEventListener("click", function(){
    document.getElementById("popup").style.display = "none";
});

// SWIPER
  //API
  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 100,
    loop: true,
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper-button-next',
      },
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    on: {
        slideChange: function() {
            var slides = this.slides;
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove("swiper-slide-active");
            }
            slides[this.activeIndex].classList.add("swiper-slide-active");
        },
    },
  });

  // Nombres de los personajes de la API 
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      const characters = data.results.slice(0, 12);
      const slides = document.querySelectorAll(".slide-name");
      characters.forEach((character, index) => {
        slides[index].innerText = character.name;
      });
    });

  // Fotos de la API
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      data.results.forEach(character => {
        var carouselCard = document.createElement('div');
        carouselCard.classList.add('carousel_card', 'swiper-slide');
        var characterImg = document.createElement('img');
        characterImg.src = character.image;
        characterImg.alt = 'img';
        characterImg.classList.add('carousel_img');
        carouselCard.appendChild(characterImg);
        
        var characterName = document.createElement('div'); // Crear un elemento para el nombre del personaje
        characterName.classList.add('slide-name'); 
        characterName.textContent = character.name; // Establecer el texto del nombre
        carouselCard.appendChild(characterName); // Adjuntar el nombre a la tarjeta 

        mySwiper.appendSlide(carouselCard);
      });
    });

  var slideIndex = 0;

  document.getElementById("nextBtn").onclick = function () {
    slideIndex++;
    if (slideIndex >= mySwiper.slides.length) {
      slideIndex = 0;
    }
    mySwiper.slideTo(slideIndex);
  };

  mySwiper.on('slideChange', function () {
    slideIndex = mySwiper.activeIndex;
    showSlides(slideIndex);
  });

  function showSlides(n) {
    var slides = document.querySelectorAll(".slide-name");
    slides.forEach(slide => {
      slide.style.display = "none";
    });
    slides[n].style.display = "flex";
  }

//nav
// detectar el evento de desplazamiento
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};
