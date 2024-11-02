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
    const frasesEnCursiva = /(Perito en lunas|El rayo que no cesa|Viento del pueblo|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
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

//El rayo que no cesa

fetch('Textos/rayo.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(El rayo que no cesa|Hijos de la ira|La sin razón|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('rayo').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/rayo2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(El rayo que no cesa|Hijos de la ira|La sin razón|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('rayo2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/El rayo que no cesa/cesara.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('cesara').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/El rayo que no cesa/limon.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('limon').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/El rayo que no cesa/umbrio.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('umbrio').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/El rayo que no cesa/casta.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('casta').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/El rayo que no cesa/barro.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('barro').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/El rayo que no cesa/toro.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('toro').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/El rayo que no cesa/sije.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('sije').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/El rayo que no cesa/soneto.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('soneto').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Viento del pueblo

fetch('Textos/viento.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Viento del pueblo|Hijos de la ira|La sin razón|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('viento').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/viento2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Viento del pueblo|Hijos de la ira|La sin razón|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('viento2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/Viento del pueblo/viento.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('viento3').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Viento del pueblo/yuntero.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('yuntero').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Viento del pueblo/segunda.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('segunda').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Viento del pueblo/aceitunero.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('aceitunero').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Viento del pueblo/manos.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('manos').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Viento del pueblo/cancion.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('cancion').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));
