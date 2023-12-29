// Cambio aleatorio de imágenes
const arrayImg = [
    "assets/img/img-2.jpg",
    "assets/img/img-3.jpg",
    "assets/img/img-4.jpg",
    "assets/img/img-5.jpg",
    "assets/img/img-6.jpg",
    "assets/img/img-7.jpg",
]

const myImgs = document.querySelectorAll(".random-img");

let lastImg = "";
let randomSrc = "";

for (const img of myImgs) {
    randomSrc = arrayImg[Math.floor(Math.random() * arrayImg.length)];
    while(randomSrc === lastImg){
        randomSrc = arrayImg[Math.floor(Math.random() * arrayImg.length)];
    }
    img.src = randomSrc;
    lastImg = randomSrc;
}

// Pintar galería de casas que aparecen en la newsletter

// 1. Creo el array de objetos para las casas
const featuredListings = [
    {
        located: "Tarifa",
        price: "120.000 €",
        src: "assets/featured-listing-img/tarifa-120.jpg"
    },
    {
        located: "Huelva",
        price: "125.000 €",
        src: "assets/featured-listing-img/huelva-125.jpg"
    },
    {
        located: "Santander",
        price: "120.000 €",
        src: "assets/featured-listing-img/santander-120.jpg"
    },
    {
        located: "Malaga",
        price: "150.000 €",
        src: "assets/featured-listing-img/malaga-150.jpg"
    },
    {
        located: "Cádiz",
        price: "145.000 €",
        src: "assets/featured-listing-img/cadiz-145.jpg"
    },
    {
        located: "Salou",
        price: "144.000 €",
        src: "assets/featured-listing-img/salou-144.png"
    },
    {
        located: "Almeria",
        price: "120.000 €",
        src: "assets/featured-listing-img/almeria-120.jpg"
    },
    {
        located: "Almeria",
        price: "79.000 €",
        src: "assets/featured-listing-img/almeria-79.jpg"
    }    
];

// Variable para seleccionar el grid
let myGallery = document.querySelector("#gallery");

// Recorro el array de imágenes
for (const house of featuredListings) {
    // Creo un elemento article para añadir la imagen
    const houseCard = document.createElement("article");
    // Creo el elemento img para introducir en la card
    const houseImg = document.createElement("img");
    houseImg.src = house.src;
    // Creo el elemento div para insertar precio y ubicación
    const footDiv = document.createElement("div");
    // Creo el elemento p para el precio
    const housePrice = document.createElement("p");
    housePrice.textContent = house.price;
    housePrice.className = "price";
    // Creo el elemento p para la ubicación
    const houseLocation = document.createElement("p");
    houseLocation.textContent = house.located;

    // Inyecto el precio y ubicación en el div
    footDiv.appendChild(housePrice);
    footDiv.appendChild(houseLocation);

    // Inyecto elementos en el article con los datos de cada objeto del array
    houseCard.appendChild(houseImg);
    houseCard.appendChild(footDiv);    

    // Inyecto el elemento article (houseCard) en el grid
    myGallery.appendChild(houseCard);
}

// FAQ - Mostrar / Ocultar respuestas

const arrowButtons = document.querySelectorAll(".arrowIconRollOut");

const rolloutFold = (arrayButtons) => {
    
    // Recorro el array y compruebo qué clase tiene la flecha y si tiene clase para abajo muestro la capa y cambio clase botón y si no oculto la capa y cambio sentido flecha.

    for(let i = 0; i < arrayButtons.length; i++){

        arrayButtons[i].addEventListener("click", () => {
            let answerDiv = document.getElementById(i+1);
            if(answerDiv.className === "hidden") {
                // coloco todos los divs a hidden
                for(let j = 0; j< arrayButtons.length; j++)
                {
                    const div = document.getElementById(j+1);
                    div.className = "hidden";
                    arrayButtons[j].className = "arrowIconRollOut";
                }

                answerDiv.className = "visible";
                arrayButtons[i].className = "arrowIconFold";
            }else{
                answerDiv.className = "hidden";
                arrayButtons[i].className = "arrowIconRollOut";
            }
        });  
    }


}

rolloutFold(arrowButtons);

//* FUNCIONALIDAD PARA INSCRIPCIONES FREE

const btnOpenModal = document.querySelector("#btn-open-modal");
const btnCloseModal = document.querySelector("#btn-close-modal");
const modal = document.querySelector("#modal-free-suscription");

btnOpenModal.addEventListener("click", () => {
    modal.showModal();
});

btnCloseModal.addEventListener("click", () => {
    modal.close();
});