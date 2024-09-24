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
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(El canto a la vida|Mujer de verso en pecho|Homenaje|Todo más claro y otros poemas)/gi; //CAMBIAR ESTO PARA CONFIGURAR
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


//Niño y sombras

fetch('Textos/niño.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Niño y sombras|Clamor|Homenaje|Todo más claro y otros poemas)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('niño').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/niño2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Niño y sombras|Clamor|Homenaje|Todo más claro y otros poemas)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('niño2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/desprendio.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('desprendio').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Lluvias enlazadas

fetch('Textos/lluvias.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Lluvias enlazadas|Clamor|Homenaje|Todo más claro y otros poemas)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('lluvias').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/lluvias2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Lluvias enlazadas|Clamor|Homenaje|Todo más claro y otros poemas)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('lluvias2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/andar.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('andar').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Entre sombra y sueño

fetch('Textos/sombra.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Entre sombra y sueño|Clamor|Homenaje|Todo más claro y otros poemas)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('sombra').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/sombra2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Entre sombra y sueño|Clamor|Homenaje|Todo más claro y otros poemas)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('sombra2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/levante.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('levante').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/entiendo.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('entiendo').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Inquietudes

fetch('Textos/inquietudes.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Inquietudes|Clamor|Homenaje|Todo más claro y otros poemas)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('inquietudes').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/inquietudes2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Inquietudes|Clamor|Homenaje|Todo más claro y otros poemas)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('inquietudes2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/sonrisas.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('sonrisas').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));