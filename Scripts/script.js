function crearMensaje(signo)
{
    //Create random number
    function randomNumber(num)
    {
        return Math.floor(Math.random() * num);
    }

    //List of sentence
    const sentence = {
        luck: ["mala suerte", "buena suerte", "una suerte terrible", "buena fortuna"],
        advice: ["corre loco", "lo mejor sería que pagaras tus deudas", "por favor ve a dormir", "Solo detente", 
        "simplemente huye", "vive tu vida sin remordimientos", "deja de quejarte", "consigue otro trabajo", "callate"]
    }

    //An array so we can put everything togheter
    let message = [signo];

    //Decide the message
    for (let typeOfSentence in sentence)
    {
        //Find the index for the type of sentence
        let option = randomNumber(sentence[typeOfSentence].length);

        //Find the sentence
        switch(typeOfSentence)
        {
            case "luck":
                message.push(`tu suerte: ${sentence[typeOfSentence][option]}.`);
                break;
            case "advice":
                message.push(`Un consejo: ${sentence[typeOfSentence][option]}.`);
                break;
        }
    }

    //Time to put everything togheter
    return message.join("\n");
}

//Variables que se usan
let boton = document.getElementById("boton-adivinador");
let preguntarSuerte = document.getElementById("preguntar-suerte");
let bienvenida = document.getElementById("bienvenida");

//Función para cambiar de color al botón cuando se da click al boton
function cambiarColor()
{
    boton.style.backgroundColor = "#555555";
}

//Función para cambiar de color al defecto cuando se deje de dar click al boton
function restaurarColor()
{
    //Pedimos el signo
    let signo;
    signo = prompt("¿Cual es tu signo?");
    signo = signo.toLowerCase();
    //Verificamos que es valido el input
    if ((signo === "aries") || (signo === "tauro") || (signo === "geminis") || (signo === "géminis") 
    || (signo === "cancer") || (signo === "cáncer") || (signo === "leo") || (signo === "virgo")
    || (signo === "libra") || (signo === "escorpio") || (signo === "sagitario") || (signo === "capricornio")
    || (signo === "acuario") || (signo === "piscis"))
    {
        //Creamos el mensaje
        let finalMessage = crearMensaje(signo);

        //Declarar variables que se usarán
        let nuevoP = document.createElement("p");
        let nodoTexto = document.createTextNode(finalMessage);
        nuevoP.appendChild(nodoTexto);
        let seccionUno = document.getElementById("seccion-uno");

        //Mostrar el mensaje
        boton.style.backgroundColor = "";
        preguntarSuerte.hidden = true;
        bienvenida.hidden = true;
        nuevoP.style.textAlign = "center";
        nuevoP.style.fontSize = "50px";
        nuevoP.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif;";
        seccionUno.insertBefore(nuevoP, preguntarSuerte);
        boton.style.visibility = "hidden"
    }
    else
    {
        alert("Ingrese el signo del zodiaco correctamente");
        boton.style.backgroundColor = "";
    }
}

//Evento para cambiar de color
boton.onmousedown = cambiarColor;
boton.onmouseup = restaurarColor;