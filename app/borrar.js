import {getLibros,onGetLibros} from './firebase.js'

const librosContainer = document.getElementById('libros-container')

window.addEventListener('DOMContentLoaded',async () =>{

    //const querySnapshots = await getLibros();
    onGetLibros((querySnapshot)=>{
        let html = ''

        querySnapshot.array.forEach(doc => {        
            const libro = doc.data()
            html += '
                <div>
                    <h3>${libro.titulo}</h3>
                    <p>${libro.autor},${libro.editorial}</p>
                    <p>${libro.isbn},${libro.fecha}</p>
                </div>';
        });

        librosContainer.innerHTML = html;
    })
})