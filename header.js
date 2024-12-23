function createHeader() {
    // Crea el elemento header
    const header = document.createElement('header');

    // Añade contenido al header (puedes personalizar esto)
    header.innerHTML = `
        <div class="fondo-header">
            <nav>
                <ul>
                    <li>
                        <a href="Listado.html">
                            <div class="fondo-header-listado">
                                <div class="image-header">
                                    <img src="Imagenes/Header/pergamino.webp">
                                </div>
                                <h2>Listado de poemas</h2>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="Antología de poesía del siglo XX.pdf" download>
                            <div class="fondo-header-descarga">
                                <div class="image-header">
                                    <img src="Imagenes/Header/descarga.webp">
                                </div>
                                <h2>Descargar PDF</h2>
                            </div>
                        </a>
                    </li>  
                    <li>
                        <a href="pau/miguel_hernandez.html">
                            <div class="fondo-header-pau">
                                <div class="image-header">
                                    <img src="Imagenes/Header/examen.png">
                                </div>
                                <h2>PAU</h2>
                            </div>
                        </a>
                    </li>  
                    <li>
                        <a href="Sorteos/Sorteos.html">
                            <div class="fondo-header-sorteos">
                                <div class="image-header">
                                    <img src="Imagenes/Header/dados.webp">
                                </div>
                                <h2>Sorteos</h2>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </div> 

        <div id="botonFlotanteSubir">
            <a href="#" >
                <div class="fondo-header-subir">
                    <div class="image-header">
                        <img src="Imagenes/Header/subir.webp">
                    </div>
                    <h2>Subir</h2>
                </div>
            </a>
        </div>

        <div id="botonFlotanteLogo">
            <a href="https://www.iax.es/" >
                <img src="Imagenes/Header/logo-iax.webp" class="image-header-logo">
            </a>
        </div>
    `;

    // Inserta el header al principio del body
    document.body.insertBefore(header, document.body.firstChild);
}

// Ejecuta la función para crear el header
createHeader();