

const {createApp} = Vue;
createApp({
    data() {
        return {
            slides: [{

                immagine: 'https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg',
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
            
            
        ],
        
        
    }
    
},
counter :0,
methods :{
    previous() {
      //definiamo la condizione prima di definire il ciclo, cosa cerco? se la posizione è 0 devo definire una variabile che mi faccia arrivare alla fine a mano a mano//
      let ultimaimmagine = this.slides.immagine.lenght-1;
      if(this.counter > 0){
        this.counter--;}
        else{
            this.counter = ultimaimmagine;
        }
      },
    next() {
        let ultimaimmagine = this.slides.immagine.lenght-1;
        if (this.counter < ultimaimmagine) {
            this.counter++;
        }
        else{
            this.counter = 0;
        }
    }

}
}).mount(`#app`);