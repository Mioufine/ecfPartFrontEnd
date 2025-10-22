
import Formulaire from "./formtravel.js";


export default class Controller {
    constructor(formID) {
        this.formID = formID;
        this.formTravel = new Formulaire();

        this.addCar();
        this.addTravel();
        this.controlProgressTravel();
    }

    
    addCar() {
        // si on clique sur le bouton 'Ajouter une voiture'
        document.addEventListener('click', (event) => {
            console.log(event.target);
            if(event.target === document.querySelector('.btnCreatFormCar')) {
                document.querySelector('.creatCar').classList.remove('is-hidden');
            } else if (event.target === document.querySelector('.btnCancel')){
                document.querySelector('.creatCar').classList.add('is-hidden');
            }
        })
    }

    addTravel() {
        document.addEventListener('click', (event) => {
            if(event.target === document.querySelector('.btnNewTravel')) {
                this.formTravel.addFormTavrel();
            } else if (event.target === document.querySelector('.btnCancelTravel')){
                document.querySelector('.newTravel').innerHTML='';
            }

        })
    }

    controlProgressTravel(){
        document.addEventListener('click', (event) => {
            if(event.target=== document.querySelector('.btnDepart')){
                document.querySelector('.btnDepart').hidden=true;
                document.querySelector('.inProgress').hidden=false;
                document.querySelector('.btnArrival').hidden=false;
            }

        })
    }

}