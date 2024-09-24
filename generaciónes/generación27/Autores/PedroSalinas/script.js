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
    const frasesEnCursiva = /(La voz a ti debida|Razón de amor|Largo lamento|Todo más claro y otros poemas)/gi; //CAMBIAR ESTO PARA CONFIGURAR
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


//Seguro Azar

fetch('Textos/seguro.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Seguro azar|Poeta en Nueva York|Bodas de sangre|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('seguro').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/seguro2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Seguro azar|Poeta en Nueva York|Bodas de sangre|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('seguro2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/bujias.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('bujias').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//La voz a ti debida

fetch('Textos/voz.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(La voz a ti debida|Poeta en Nueva York|Bodas de sangre|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('voz').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/voz2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(La voz a ti debida|Poeta en Nueva York|Bodas de sangre|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('voz2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/ayer.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('ayer').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/vivir.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('vivir').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/perdoname.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('perdoname').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/llamaras.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('llamaras').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Razón de amor

fetch('Textos/razon.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Razón de amor|Poeta en Nueva York|Bodas de sangre|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('razon').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/razon2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Razón de amor|Poeta en Nueva York|Bodas de sangre|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('razon2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/razon3.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('razon3').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));