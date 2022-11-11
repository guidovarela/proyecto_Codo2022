let users = [
    {
        id:1,
        nombre:"Maria",
        apellido:"Fernandez",
        puntos:2324,
    },
    {
        id:2,
        nombre:"Jorge",
        apellido:"Subira",
        puntos:2344,
    },
    {
        id:3,
        nombre:"Matias",
        apellido:"Velazco",
        puntos:2123,
    },
    {
        id:4,
        nombre:"Juan Cruz",
        apellido:"Bordeu",
        puntos:3114,
    },
    {
        id:5,
        nombre:"Johana",
        apellido:"Rangel",
        puntos:4324,
    },
    {
        id:6,
        nombre:"Diego",
        apellido:"Barrado",
        puntos:1824,
    },

]

let frases = [
    "Ser periodista es tener el privilegio de cambiar algo todos los días",
    "No escribas como periodista lo que no puedas sostener como hombre",
    "La prensa es la artillería de la libertad",
    "El periodismo es grande. Cada periodista ¿no es un regulador del mundo, si lo persuade?",
    "El periodista de investigación es a menudo indispensable para el bienestar de la sociedad, pero sólo si sabe cuándo dejar de investigar",
    "La diferencia entre literatura y periodismo es que el periodismo es ilegible y la literatura no es leída",
    "El periodismo es el mejor oficio del mundo",
    "El poder para moldear el futuro de una república estará en manos del periodismo de las generaciones futuras",
    "Para ejercer el periodismo, ante todo, hay que ser buenos seres humanos. Las malas personas no pueden ser buenos periodistas. Si se es una buena persona se puede intentar comprender a los demás, sus intenciones, su fe, sus intereses, sus dificultades, sus tragedias",
    "Una prensa libre puede ser buena o mala, pero sin libertad, la prensa nunca será otra cosa que mala",
]




 /* API utilizada: RandomUser (https://randomuser.me) */

 //Array de trabajos en el staff
 let puestos = ["Direccion", "Redacción de contenidos","Dpto. Fotografía","Legales","Editor","Dirección de Arte"]
 //mezcla de indices en el array
 puestos.sort(()=> Math.random() - 0.5)
 frases.sort(()=> Math.random() - 0.5)

/*  console.log(puestos)
 console.log(frases) */

//Consumo de la API
 function traer() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(res => {
        data = document.querySelector(".staff-periodistas")
        console.log(res)
        console.log(res.results[0].email)
        data.innerHTML= `
            <img src="${res.results[0].picture.large}
            " width="50%" class="img-fluid rounded-circle">
            <h3>${res.results[0].name.first} ${res.results[0].name.last}</h3>
            <p class="lead"><a href="mailto:${res.results[0].email}">${res.results[0].email}</a></p>
            <p>${puestos[1]}</p>
            `
        document.querySelector(".frase-staff").innerHTML=`${frases[0]}`
        })
    }

    //Execucion
    traer()


    //fecha
    let year = new Date().getFullYear()
    document.querySelector(".year").innerHTML=year