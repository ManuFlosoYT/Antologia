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
    const frasesEnNegrita = /(mujeres de la Generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Tierra sin nosotros|Cuanto sé de mí|Alegría|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
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


//Quinta del 42

fetch('Textos/quinta.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la Generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Quinta del 42|Pido la paz y la palabra|La realidad y el deseo|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('quinta').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/quinta2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la Generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Quinta del 42|Pido la paz y la palabra|La realidad y el deseo|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('quinta2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/olvidas.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('olvidas').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Cuaderno de Nueva York

fetch('Textos/cuaderno.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la Generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Cuaderno de Nueva York|Pido la paz y la palabra|La realidad y el deseo|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('cuaderno').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/cuaderno2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la Generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Cuaderno de Nueva York|Pido la paz y la palabra|La realidad y el deseo|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('cuaderno2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/fe.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('fe').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));
