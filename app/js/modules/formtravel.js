export default class FormTravel {

    
    addFormTavrel() {
        const btn2 = document.createElement('button');
                btn2.classList.add('btnCancelTravel');
                btn2.type= "button";
                btn2.textContent = "Annuler";
                
                const form = document.createElement('form');
                form.classList.add = "formNewTravel";
                const container = document.querySelector('.newTravel');
                container.append(form);

                const field = document.createElement('fieldset');
                field.classList.add('fieldNewTravel');
                const legend = document.createElement('legend');
                legend.textContent = "Nouveau voyage";
                legend.classList.add('legendNewTravel');
                field.append(legend);
                form.append(field);
                field.append(btn2);

                const div1= document.createElement('div');
                div1.classList.add('infoNewTravel');
                const label1 = document.createElement('label');
                label1.textContent = "Date du voyage";
                label1.for= "date";
                const input1 = document.createElement('input');
                input1.type = "date";
                input1.name = "date";
                input1.id = "date";
                input1.required = true;
                field.append(div1);
                div1.append(label1,input1);

                const div2= document.createElement('div');
                div2.classList.add('infoNewTravel');
                const label2 = document.createElement('label');
                label2.textContent = "Départ";
                label2.for= "depature";
                const input2_1 = document.createElement('input');
                input2_1.type = "text";
                input2_1.name = "departure";
                input2_1.id = "departure";
                input2_1.required = true;
                const input2_2 = document.createElement('input');
                input2_2.type = "time";
                input2_2.name = "departure";
                input2_2.id = "departure";
                input2_2.required = true;
                field.append(div2);
                div2.append(label2,input2_1,input2_2);

                const div3= document.createElement('div');
                div3.classList.add('infoNewTravel');
                const label3 = document.createElement('label');
                label3.textContent = "Arrivée";
                label3.for= "arrival";
                const input3_1 = document.createElement('input');
                input3_1.type = "text";
                input3_1.name = "arrival";
                input3_1.id = "arrival";
                input3_1.required = true;
                const input3_2 = document.createElement('input');
                input3_2.type = "time";
                input3_2.name = "arrival";
                input3_2.id = "arrival";
                input3_2.required = true;
                field.append(div3);
                div3.append(label3,input3_1,input3_2);

                const div4= document.createElement('div');
                div4.classList.add('infoNewTravel');
                const label4 = document.createElement('label');
                label4.textContent = "Prix";
                label4.for= "price";
                const input4 = document.createElement('input');
                input4.type = "number";
                input4.name = "price";
                input4.id = "price";
                input4.min = "0";
                input4.required = true;
                field.append(div4);
                div4.append(label4,input4);

                const div5= document.createElement('div');
                div5.classList.add('infoNewTravel');
                const label5 = document.createElement('label');
                label5.textContent = "Véhicule";
                label5.for= "vehicle";
                const input5 = document.createElement('input');
                input5.type = "text";
                input5.name = "vehicle";
                input5.id = "vehicle";
                input5.required = true;
                field.append(div5);
                div5.append(label5,input5);

                const div6= document.createElement('div');
                div6.classList.add('infoNewTravel');
                const label6 = document.createElement('label');
                label6.textContent = "Chauffeur";
                label6.for= "driver";
                const input6 = document.createElement('input');
                input6.type = "text";
                input6.name = "driver";
                input6.id = "driver";
                input6.required = true;
                field.append(div6);
                div6.append(label6,input6);

                const btn1 = document.createElement('button');
                btn1.type = "submit";
                btn1.textContent = "Enregistrer";
                btn1.classList.add('btnSaveTravel');
                btn1.dataset.action = "addTravel";
                field.append(btn1);
    }
    

    

}