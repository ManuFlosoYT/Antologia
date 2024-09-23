function createHeader() {
    // Crea el elemento header
    const header = document.createElement('header');

    // Añade contenido al header (puedes personalizar esto)
    header.innerHTML = `
        <div class="fondo-header">
            <nav>
                <ul>
                    <li>
                        <a href="../index.html">
                            <div class="fondo-header-inicio">
                                <div class="image-header">
                                    <img src="../Imagenes/Header/home.webp">
                                </div>
                                <h2>Inicio</h2>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="../Listado.html">
                            <div class="fondo-header-listado">
                                <div class="image-header">
                                    <img src="../Imagenes/Header/pergamino.webp">
                                </div>
                                <h2>Listado de poemas</h2>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="../Antología de poesía del siglo XX.pdf" download>
                            <div class="fondo-header-descarga">
                                <div class="image-header">
                                    <img src="../Imagenes/Header/descarga.webp">
                                </div>
                                <h2>Descargar PDF</h2>
                            </div>
                        </a>
                    </li>      
                </ul>
            </nav>
        </div> 

        <div id="miDiv">
            <a href="#" >
                <div class="fondo-header-subir">
                    <div class="image-header">
                        <img src="../Imagenes/Header/subir.webp">
                    </div>
                    <h2>Subir</h2>
                </div>
            </a>
        </div>
    `;

    // Inserta el header al principio del body
    document.body.insertBefore(header, document.body.firstChild);
}

// Ejecuta la función para crear el header
createHeader();