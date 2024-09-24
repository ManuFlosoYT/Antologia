fetch('Textos/parrafo.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(grave crisis|Miguel de Unamuno,|Pío Baroja,|Ramiro de Maeztu,|Azorín,|Antonio Machado|y Valle-Inclán|misma actitud: la insatisfacción ante la literatura realista|rasgos diferenciadores)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(una frase completa|parte de otra frase)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(grave crisis|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('parrafo').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/parrafo2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(intelectuales y pensadores)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(una frase completa|parte de otra frase)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(grave crisis|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('parrafo2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/parrafo3.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(origen español|esencia del alma nacional)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(una frase completa|parte de otra frase)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(grave crisis|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('parrafo3').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/parrafo4.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(temas históricos, morales y sociopolíticos)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(una frase completa|parte de otra frase)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(grave crisis|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('parrafo4').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/parrafo5.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(poesía|teatro|novela|ensayo)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(una frase completa|parte de otra frase)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(grave crisis|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('parrafo5').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/parrafo6.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('parrafo6').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/parrafo7.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(herencia simbolista|modernismo|herencia ideológica alemana)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(una frase completa|parte de otra frase)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(grave crisis|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('parrafo7').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/parrafo8.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(Miguel de Unamuno|problemas existenciales|visión estética de Castilla)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(El Cristo de Velázquez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(Miguel de Unamuno)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('parrafo8').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/parrafo9.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(Antonio Machado|Campos de Castilla)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Soledades|Soledades,|galerías y otros poemas|Campos de Castilla)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(Antonio Machado)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('parrafo9').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/parrafo10.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(Castilla)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(una frase completa|parte de otra frase)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(grave crisis|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('parrafo10').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/parrafo11.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(Enfermedad y muerte de su esposa Leonor)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(una frase completa|parte de otra frase)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(grave crisis|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('parrafo11').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/parrafo12.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(Presente y porvenir de España)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(una frase completa|parte de otra frase)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(grave crisis|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('parrafo12').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/parrafo13.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(Meditaciones filosóficas)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(una frase completa|parte de otra frase)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(grave crisis|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('parrafo13').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/parrafo14.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(novecentismo)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(una frase completa|parte de otra frase)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(graven crisis|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('parrafo14').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));