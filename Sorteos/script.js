function calcular() {

  cortos = 
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

  medios = 
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

  largos = 
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