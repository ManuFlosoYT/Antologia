function calcular() {
    cortos = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    medios = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    largos = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
    const numCasos = parseInt(document.getElementById("numCasos").value); // ENTRADA DE NUMERO DE CASOS 
    
    const largo = cortos.length + medios.length + largos.length; // Número total de elementos
    const porCabeza = Math.floor(largo / numCasos);  // Número de elementos por caso

  
    const tabla = document.getElementById("tablaResultados"); // Crear tabla de resultados
    tabla.innerHTML = "";  // Limpiar tabla
  
    const headerRow = tabla.insertRow(); // Crear fila de encabezado
    headerRow.insertCell().textContent = "Caso"; // Encabezado de la columna de casos
    headerRow.insertCell().textContent = "Elementos"; // Encabezado de la columna de elementos
  





    
    for(i = 0; i < numCasos; i++) { // Iterar sobre el número de casos
      const row = tabla.insertRow(); // Crear fila
      row.insertCell().textContent = i + 1; // Número de caso
      row.insertCell().textContent = porCabeza; // Número de elementos
    }
  }