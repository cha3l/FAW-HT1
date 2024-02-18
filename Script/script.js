let personajenum;

function getDEj1() {
    personajenum = document.getElementById("npersonaje").value;
}



function getData() {
    getDEj1();
    const url = `https://swapi.dev/api/people/${personajenum}/`;
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.')
        })
        .then(data => {
            console.log(data);
            const personaje = data;
            const htmlText = `<div class="personaje">
                                 <h3>Nombre: ${personaje.name}</h3>
                                 <h3>Estatura: ${personaje.height}</h3>
                                 <h3>Masa: ${personaje.mass}</h3>
                                 <h3>Color de pelo: ${personaje.hair_color}</h3>
                                 <h3>Color de tez: ${personaje.skin_color}</h3>
                                 <h3>Color de Ojos: ${personaje.eye_color}</h3>
                            </div>`;
            document.getElementById('resultado').innerHTML = htmlText;


        })

}