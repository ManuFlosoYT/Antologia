function calcular() {
    const cortos = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const medios = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const largos = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
    const numCasos = parseInt(document.getElementById("numCasos").value);
    const largo = cortos.length + medios.length + largos.length;
    const porCabeza = Math.floor(largo / numCasos); 
  
    let palabrasDisponibles = {
      cortos: [...cortos],
      medios: [...medios],
      largos: [...largos]
    };
  
    const tabla = document.getElementById("tablaResultados");
    tabla.innerHTML = "";
  
    const headerRow = tabla.insertRow();
    headerRow.insertCell().textContent = "Caso";
    headerRow.insertCell().textContent = "Elementos";
  
    const pesosCasos = Array(numCasos).fill(0); // Array para llevar el peso de cada caso
  
    for (let i = 0; i < numCasos; i++) {
      const row = tabla.insertRow();
      row.insertCell().textContent = i + 1;
      const elementosCell = row.insertCell();
  
      for (let j = 0; j < porCabeza; j++) {
        let tipo = elegirTipoEquilibrado(pesosCasos, i);
  
        if (palabrasDisponibles[tipo].length === 0) {
          // Si no quedan elementos de ningún tipo, salir del bucle
          break;
        }
  
        const indice = Math.floor(Math.random() * palabrasDisponibles[tipo].length);
        const elemento = palabrasDisponibles[tipo].splice(indice, 1)[0];
        elementosCell.textContent += elemento + ", ";
        pesosCasos[i] += tipo === "cortos" ? 1 : tipo === "medios" ? 2 : 3; // Actualizar peso
      }
    }
  }
  
  function elegirTipoEquilibrado(pesosCasos, casoActual) {
    const pesoMinimo = Math.min(...pesosCasos);
    const casosConPesoMinimo = pesosCasos.reduce((acc, peso, index) => {
      if (peso === pesoMinimo && index !== casoActual) acc.push(index);
      return acc;
    }, []);
  
    if (casosConPesoMinimo.length > 0) {
      const casoAleatorio = casosConPesoMinimo[Math.floor(Math.random() * casosConPesoMinimo.length)];
      const diferenciaPeso = pesosCasos[casoActual] - pesosCasos[casoAleatorio];
  
      if (diferenciaPeso >= 2 && palabrasDisponibles["cortos"].length > 0) {
        return "cortos";
      } else if (diferenciaPeso <= -2 && palabrasDisponibles["largos"].length > 0) {
        return "largos";
      }
    }
    
    // Si no hay desequilibrio o no quedan elementos para equilibrarlo, elegir al azar
    const tiposDisponibles = ["cortos", "medios", "largos"].filter(tipo => palabrasDisponibles[tipo].length > 0);
    return tiposDisponibles[Math.floor(Math.random() * tiposDisponibles.length)];
  }
  