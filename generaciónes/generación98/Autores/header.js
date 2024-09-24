function createHeader() {
    // Crea el elemento header
    const header = document.createElement('header');

    // Añade contenido al header (puedes personalizar esto)
    header.innerHTML = `
        <div class="fondo-header">
            <nav>
                <ul>
                    <li>
                        <a href="../../../../index.html">
                            <div class="fondo-header-inicio">
                                <div class="image-header">
                                    <img src="../../../../Imagenes/Header/home.webp">
                                </div>
                                <h2>Inicio</h2>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="../../generación98.html">
                            <div class="fondo-header-volver">
                                <div class="image-header">
                                    <img src="../../../../Imagenes/Header/volver.webp">
                                </div>
                                <h2>Volver atrás</h2>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="../../../../Listado.html">
                            <div class="fondo-header-listado">
                                <div class="image-header">
                                    <img src="../../../../Imagenes/Header/pergamino.webp">
                                </div>
                                <h2>Listado de poemas</h2>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="../../../../Sorteos/Sorteos.html">
                            <div class="fondo-header-sorteos">
                                <div class="image-header">
                                    <img src="../../../../Imagenes/Header/dados.webp">
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
                        <img src="../../../../Imagenes/Header/subir.webp">
                    </div>
                    <h2>Subir</h2>
                </div>
            </a>
        </div>

        <div id="botonFlotanteLogo">
            <a href="https://www.iax.es/" >
                <img src="../../../../Imagenes/Header/logo-iax.webp" class="image-header-logo">
            </a>
        </div>
    `;

    // Inserta el header al principio del body
    document.body.insertBefore(header, document.body.firstChild);
}

// Ejecuta la función para crear el header
createHeader();