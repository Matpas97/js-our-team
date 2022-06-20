
// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html

// Aggiungo un Array di oggetti che rapprresentano i membri del team 

let objectArray =[

    Mebro1 = {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo',
    },

    Membro2 = {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor',

    },

    Membro3 = {
        name: 'Walter Gordon',
        role: 'Office Manage',
        image: 'walter-gordon-office-manager',
    },

    Membro4 = {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager',
    },

    Membro5 = {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer',
    },

    Membro6 = {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer',
    }
   

];

// Seleziono la classe del dom da popolare successivamente
let teamContainer = document.querySelector('.team-container');

// Creo un ciclo for per ogni card dell'Array
for(let i = 0; i < objectArray; i++) {
     const thiscard = objectArray[i];
}

// Creo un nuovo template che riempio con i dati corretti 
 
let cardAdd = `
<div class= "team-card">
 <div class= "card-image">
   <img 
    src="img/${thiscard.image}.jpg
    alt= "${thiscard.name}"/>
    </div>
     <div class="card-text">
     <h3>${thiscard.name}</h3>
     <p>${thiscard.role}</p>
     </div>
     </div>`;

// Concateno alla classe selezionata
teamContainer.innerHTML += objectArray;


