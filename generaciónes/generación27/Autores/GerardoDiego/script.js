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
    const frasesEnCursiva = /(Cuentos de la España fantástica|Manual de espumas|Bodas de sangre|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
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


//Versos Humanos

fetch('Textos/humanos.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Versos humanos|Poeta en Nueva York|Bodas de sangre|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('humanos').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/humanos2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Versos humanos|Poeta en Nueva York|Bodas de sangre|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('humanos2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/cipres.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('cipres').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/acariciarte.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('acariciarte').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Soria

fetch('Textos/soria.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Soria|Poeta en Nueva York|Bodas de sangre|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('soria').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/soria2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Soria|Poeta en Nueva York|Bodas de sangre|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('soria2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/duero.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('duero').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));
