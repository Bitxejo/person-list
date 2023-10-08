const personas = [
    new Persona( "Bitxo", "Gonzalez" ),
    new Persona( "Obama", "Gonzalez" ),
    // new persona( "Mearia", "Unpeta"),
    // new persona("Posya", "Estastardando"),
];

function mostrarPersonas(){
    console.log("Mostrar personas ejecutando");
    let texto = "";
    for(let persona of personas ){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById("personas").innerHTML = texto ;
}
function agregarPersona(){
    const forma = document.forms["forma"];
    const nombre = forma["nombre"];
    const apellido = forma["apellido"];
    if(nombre.value != "" &&  apellido.value != ""){
        const persona = new Persona( nombre.value, apellido.value );
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();

    }
    else{
        console.log("Ninguna informacion")
    }
}
