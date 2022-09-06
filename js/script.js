// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

let objectArray =[

     {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo',
        
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor',

    },

    {
        name: 'Walter Gordon',
        role: 'Office Manage',
        image: 'walter-gordon-office-manager',
    },

     {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager',
    },

     {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer',
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer',
    }
   
];
let teamContainer = document.querySelector('.team-container');

// Creo un ciclo for dove stampo in console ruolo nome e img e li stampo anche nel dom

for (let index = 0; index < objectArray.length; index++) {
    const element = objectArray[index];
    console.log(element);

    // Creo gli elementi del Dom 
    
    let cardAdd = `
    <div class= "team-card">
     <div class= "card-image">
       <img 
        src="img/${element.image}.jpg"
        alt= "${element.name}"/>
        </div>
         <div class="card-text">
         <h3>${element.name}</h3>
         <p>${element.role}</p>
         </div>
         </div>`;

   teamContainer.innerHTML +=  cardAdd;     

}

















