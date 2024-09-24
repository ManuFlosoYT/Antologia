function calcular() {

  let cortos = 
  [
    "Caupolicán",
    "Lo fatal",
    "Ocaso",
    "Recuerdo infantil",
    "El viaje definitivo",
    "Pájaro errante y lírico",
    "El poeta a caballo",
    "Caminante no hay camino",
    "Vino, primero, pura…",
    "Soledad",
    "No soy yo",
    "Te deshojé como una rosa…",
    "Beato sillón",
    "Las doce en el reloj",
    "Se desprendió mi sangre para formar tu cuerpo…",
    "Me gusta andar de noche las ciudades desiertas…",
    "Me levanté hasta el sueño…",
    "Ni me entiendo ni me entienden…",
    "Adolescencia",
    "Cuerpo feliz que fluye entre mis manos…",
    "La pared transparente",
    "Ambición",
    "El ciprés de Silos",
    "Déjame acariciarte lentamente…",
    "Quisiera tener varias sonrisas…",
    "Contigo",
    "Devenir del Mar Menor",
    "Galope",
    "Te digo adiós, amor, y no estoy triste…",
    "El ángel de los números",
    "Lo que dejé por ti",
    "Donde habite el olvido…",
    "Si el hombre pudiera decir",
    "Mis años compañeros…",
    "De profundis",
    "Insomnio",
    "Las abarcas desiertas",
    "No cesará este rayo que me habita…",
    "Me tiraste un limón, y tan amargo…",
    "Umbrío por la pena…",
    "Te me mueres de casta y de sencilla…",
    "Una querencia tengo por tu acento…",
    "Yo sé que ver y oír a un triste enfada…",
    "Canción última",
    "Vals de los enamorados y unidos hasta siempre",
    "Llegó con tres heridas…",
    "Ausencia en todo veo…",
    "Muerto mío, muerto mío…",
    "A mi hijo",
    "Así es mi vida",
    "Siempre mañana y nunca mañanamos",
    "Las manos ciegas",
    "A la inmensa mayoría",
    "En el principio",
    "Pido la paz y la palabra",
    "Fe de vida",
    "Otro tiempo vendrá",
    "Sale caro, señores, ser poeta…",
    "Palabras para Julia",
    "La noche le es propicia",
    "Se oyen los pájaros",
    "Don de la ebriedad",
    "Infancia y confesiones",
    "Con quién haré el amor",
    "Oda a Venecia ante el mar de los teatros",
    "Alicia Liddell abandona el país de las maravillas",
    "Blancanieves se despide de los siete enanitos",
    "Deseo de ser piel roja",
    "Piedra y sueño",
    "Where is my man?",
    "Desde Irak",
    "Hace ya mucho tiempo…",
    "Completamente viernes",
    "Confesiones",
    "Resumen"
  ];

  let medios = 
  [
    "Retrato",
    "Las moscas",
    "Al olmo viejo, hendido por el rayo",
    "Anoche cuando dormía…",
    "A José María Palacio",
    "Retrato",
    "Saeta",
    "Castilla",
    "La oración del ateo",
    "Romance de la luna, luna",
    "Alma ausente",
    "La aurora",
    "¡Esa guirnalda! ¡Pronto! ¡Que me muero!...",
    "El poeta dice la verdad",
    "35 bujías",
    "Ayer te besé en los labios…",
    "Para vivir no quiero…",
    "Razón de amor",
    "Perdóname por ir así buscándote…",
    "Si me llamaras…",
    "Se querían",
    "Río Duero, río Duero…",
    "El mar. La mar…",
    "Se equivocó la paloma…",
    "Nocturno",
    "¿Mi tierra?",
    "Peregrino",
    "Epístola a Norah Borges",
    "Llamo a los poetas",
    "Ropas con su olor",
    "Vino. Dejó las armas…",
    "Nanas de la cebolla",
    "Versos del caminante",
    "Biografía",
    "España en marcha",
    "Por qué te olvidas…",
    "Porvenir",
    "Autobiografía",
    "Cuando el amor es gesto del amor y queda…",
    "Todo fue muy sencillo…",
    "No volveré a ser joven",
    "Alocución pagana",
    "Si se supiera",
    "Magia en verano",
    "Acis y Galatea",
    "Giacomo Casanova acepta el cargo de bibliotecario",
    "La casa vacía",
    "Dedicatoria"
  ];

  let largos = 
  [
    "Sonatina",
    "Autumnal",
    "Canción de otoño en primavera",
    "Marcha triunfal",
    "Hacia un ocaso radiante…",
    "Del pasado efímero",
    "El mañana efímero",
    "Romance sonámbulo",
    "Preciosa y el aire",
    "Unidad en ella",
    "Qué hermosa eres, libertad. No hay nada…",
    "No me conformo, no; me desespero…",
    "Elegía a Ramón Sijé",
    "Vientos de pueblo me llevan…",
    "El niño yuntero",
    "Aceituneros",
    "Canción del esposo soldado",
    "El tren de los heridos",
    "Todas las casas son ojos…",
    "Menos tu vientre",
    "La boca",
    "Y resbaló el amor estremecido…",
    "El adiós",
    "Alto jornal",
    "Contra Jaime Gil de Biedma",
    "Nunca desayunaré en Tiffany",
    "La ausencia es una forma del invierno"
  ];

  let numCasos = parseInt(document.getElementById("numCasos").value); // ENTRADA DE NUMERO DE CASOS 

  const tabla = document.getElementById("tablaResultados"); // Crear tabla de resultados
  tabla.innerHTML = "";  // Limpiar tabla

  const headerRow = tabla.insertRow(); // Crear fila de encabezado
  headerRow.insertCell().textContent = "Nº Alummno";
  headerRow.insertCell().textContent = "Poemas";

  const checkbox = document.getElementById('repartir');
  const isChecked = checkbox.checked; 

  // Limitar el número de casos a 43 (Parece ser que funciona hasta 50, pero por si acaso 43 no da error)
  if(numCasos > 43)
  {
    numCasos = 43;
  }

  //Reparto poemas
  for (i = 0; i < numCasos; i++) {
    let poema = [];

    // Asignar un poema largo si hay suficientes y el número de caso lo permite
    if (largos.length > 0) {
      shuffleArray(largos);
      poema.push(largos.shift());
    }

    // Asignar poemas medios o cortos hasta completar los 3 poemas requeridos
    while (poema.length < 3) {
      if (medios.length > 0) {
        shuffleArray(medios);
        poema.push(medios.shift());
      } else if (cortos.length > 0) {
        shuffleArray(cortos);
        poema.push(cortos.shift());
      } else {
        // En caso de que se agoten todos los poemas, salir del bucle
        break;
      }
    }

    const row = tabla.insertRow(); // Crear fila

    let poemastring = arrayToString(poema);

    row.insertCell().textContent = poemastring; // Eliminar comas iniciales

    //console.log(poema.length);
  }

  let num = largos.length + medios.length + cortos.length;

  shuffleTableRows('tablaResultados'); // Mezclar las filas de la tabla

  addCellToFirstColumn('tablaResultados', i); 

  // Mostrar el número de poemas restantes en el pie de la tabla o repartirlos
  if(isChecked)
  {
    const rows = document.querySelectorAll('table tr');
    let combinedList = [];

    combinedList = combinedList.concat(largos); 
    combinedList = combinedList.concat(medios); 
    combinedList = combinedList.concat(cortos); 

    while (combinedList.length > 0)
    {
      rows.forEach(row => {
        if(row.rowIndex != 0){
          const cells = row.querySelectorAll('td');
          const cell = cells[1];
          let poema2 = [];
        
          if (combinedList.length > 0) {
            shuffleArray(combinedList);
            let temp = combinedList[0];
            combinedList.splice(0, 1);
            poema2.push(temp);
          }

          let poemastring2 = arrayToString(poema2);
          cellText = ":ñ:" + poemastring2;
          removeLeadingTrash(cellText);
          cell.textContent += cellText;
        }
      });
    }
  }
  else{
    const footerRow = tabla.insertRow(); // Crear fila de encabezado
    footerRow.insertCell().textContent = "Poemas restantes:";

    let lista3 = [];

    for(k = 0; k < largos.length; k++)
    {
      lista3.push(largos.shift());
    }

    for(l = 0; l < medios.length; l++)
    {
      lista3.push(medios.shift());
    }

    for(m = 0; m < cortos.length; m++)
    {
      lista3.push(cortos.shift());
    }

    let lista3String = arrayToString(lista3);

    footerRow.insertCell().textContent = lista3String;
  }

  addLineBreaksToAllCells();
}

function shuffleArray(array) { 
  for (let i = array.length - 1; i > 0; i--) { //Shuffle using the Fisher-Yates algorithm
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
}

function arrayToString(arr) {
  arr.filter(item => item);
  return arr.join(':ñ:');
}

function addLineBreaksToAllCells() {
  let tableCells = document.querySelectorAll("td"); // Select all <td> elements

  tableCells.forEach(cell => {
    addLineBreaksToTableCell(cell);
  });
}

function addLineBreaksToTableCell(cell) {
  cell.innerHTML = cell.innerHTML.replace(/:ñ:/g, "<br>");
}

function removeLeadingTrash(str) {
  return str.replace(/, $/,""); 
}

function shuffleTableRows(tableId) {
  const table = document.getElementById(tableId);
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));  


  // Extract the first row and store it separately
  const firstRow = rows.shift();

  // Shuffle the remaining rows (excluding the first one)  using the Fisher-Yates algorithm (similar to shuffleArray())
  for (let i = rows.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rows[i], rows[j]] = [rows[j], rows[i]];
  }

  // Clear the existing rows from the table body
  tbody.innerHTML = '';

  // Re-insert the first row, followed by the shuffled rows
  tbody.appendChild(firstRow);
  rows.forEach(row => tbody.appendChild(row));
}

function addCellToFirstColumn(tableId, int) {
  const table = document.getElementById(tableId);
  const rows = table.querySelectorAll('tr'); // Get all rows in the table

  let a = 0;
  let b = 1;
  rows.forEach(row => {
    if (a != 0){
      const newCell = row.insertCell(0); // Insert a new cell at index 0 (first column)

      // You can optionally add content to the new cell here
      newCell.textContent = b++; // Increment the counter and display it in the new cell
    }
    a++;
  });
}