/* Carosello */
const slides = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp',

    
    
  ]
  
  
  // Seleziono dom element where place the images
  const slidesEl = document.querySelector('.slides')
  
  // Creo variabile per monitorare la slide attiva
  let activeImage = 0;
  
  // loop inside the array
  for (let i = 0; i < slides.length; i++) {
    const slideUrl = slides[i];
    const slideMarkup = `<img class="${i === activeImage ? 'active' : ''}" src="${slideUrl}" alt="">`
    slidesEl.insertAdjacentHTML('beforeend', slideMarkup)
  
  }
  
  
  // seleziono i pulsanti prev e next
  const nextButtonEl = document.querySelector('.next');
  const prevButtonEl = document.querySelector('.prev');
  
  
  // Ascolto per il click sul pulsante next
  nextButtonEl.addEventListener('click', function () {
    console.log('next');
    /* const currentSlide = document.querySelector('.slides > img.active')
    console.log(currentSlide); */
  
    //Seleziono tutte le immagini nel markup con lo scopo di trovare qualla attiva
    const slides = document.querySelectorAll('.slides > img'); // getElementsByClassName
    const currentSlide = slides[activeImage]; // slides[0]
    // tolgo classe active
    currentSlide.classList.remove('active')
    // incremento active image di uno
    activeImage++
    //seleziono la seconda immagine
    const nextSlide = slides[activeImage]
    console.log(nextSlide);
    // gli applico la classe active
    nextSlide.classList.add('active')
  
  })
  // Ascolto per il click sul pulsante prev
  prevButtonEl.addEventListener('click', function () {
    console.log('prev');
  
    //Seleziono tutte le immagini nel markup con lo scopo di trovare qualla attiva
    const slides = document.querySelectorAll('.slides > img');
    const currentSlide = slides[activeImage];
    // tolgo classe active
    currentSlide.classList.remove('active')
    // incremento active image di uno
    activeImage--
    //seleziono la seconda immagine
    const nextSlide = slides[activeImage]
    console.log(nextSlide);
    // gli applico la classe active
    nextSlide.classList.add('active')
  
  })
