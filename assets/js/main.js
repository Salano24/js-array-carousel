const immaginiCarosello = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]

/* selezione l'elemento in cui andranno le immagini */
const slidesEl = document.querySelector('.slides')
let immagineAttiva= 0;
/* scrivo il loop per attraversare l'array */
for (let i = 0; i < immaginiCarosello.length; i++) {
    
    const immaginiUrl = immaginiCarosello[i];
    const immaginiAttributo = `<img class="${i === immagineAttiva ? 'active' : ''}" src="${immaginiUrl}"`
    slidesEl.insertAdjacentHTML('beforeend', immaginiAttributo);
}


/* creo le variabili per i pulsanti */
const avanti = document.querySelector('.avanti')
const indietro = document.querySelector('.indietro')

/* verifico il funzionamento dei pulsanti in console */
avanti.addEventListener('click', function(){    
    
    
    console.log('avanti');
    /* seleziono tutte le immagini per trovare quella attuale */
    const immagini = document.querySelector('.slides > img');
    const immagineAttuale = immagini[immagineAttiva]
    /* tolgo la classe active */
    immagineAttuale.remove('active')
    /* incremento l'immagine attiva */
    immagineAttiva++
   /* seleziono limmagine successiva */
   const immagineSuccessiva = immagini[immagineAttiva]
   immagineSuccessiva.add('active')

})
indietro.addEventListener('click', function(){
    console.log('indietro');
})
