//Biografía del autor

fetch('Textos/biografia.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('biografia').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/biografia2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(tendencia a la vanguardia|tendencia al compromiso)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Azul|Prosas profanas|Cantos de vida y esperanza)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('biografia2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/biografia3.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('biografia3').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Prosas profanas

fetch('Textos/prosas.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(tendencia a la vanguardia|tendencia al compromiso)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Azul|Prosas profanas|Cantos de vida y esperanza)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('prosas').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/prosas2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(tendencia a la vanguardia|tendencia al compromiso)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Azul|Prosas profanas|Cantos de vida y esperanza)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('prosas2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/autumnal.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('autumnal').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/sonatina.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('sonatina').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/marcha.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('marcha').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Azul

fetch('Textos/azul.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(tendencia a la vanguardia|tendencia al compromiso)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Azul|Prosas profanas|Cantos de vida y esperanza)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('azul').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/azul2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(tendencia a la vanguardia|tendencia al compromiso)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Azul|Prosas profanas|Cantos de vida y esperanza)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('azul2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/capoulican.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('capoulican').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));



//Cantos de vida y esperanza

fetch('Textos/cantos.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(tendencia a la vanguardia|tendencia al compromiso)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Azul|Prosas profanas|Cantos de vida y esperanza)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('cantos').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/cantos2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(tendencia a la vanguardia|tendencia al compromiso)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Azul|Prosas profanas|Cantos de vida y esperanza)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('cantos2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));
fetch('Textos/otoño.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('otoño').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/fatal.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('fatal').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));
