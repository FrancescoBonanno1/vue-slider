

const {createApp} = Vue;
createApp({
    data() {
        return {
            slides: [{

                immagine: 'https://my.alfred.edu/zoom/_images/foster-lake.jpg',
                titolo: 'Tramonto sulla spiaggia',
                descrizione: 'Un meraviglioso tramonto con colori caldi'
            },
            {

                immagine: 'https://img.freepik.com/free-photo/beautiful-shot-mountains-trees-covered-snow-fog_181624-17590.jpg',
                titolo: 'Montagne innevate',
                descrizione: 'Un panorama mozzafiato delle montagne coperte di neve.'
            },

            {
                immagine: 'https://img.freepik.com/free-photo/countryside-field-sunny-day-countryside_181624-24010.jpg',
                titolo: 'Campi verdi',
                descrizione: 'Vaste distese di campi verdi che si estendono all\'orizzonte.'
            }


            ]


        }
    }
})
    .mount(`#app`);