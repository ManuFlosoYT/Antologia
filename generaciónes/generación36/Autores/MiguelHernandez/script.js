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


//Perito en lunas

fetch('Textos/perito.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(El hombre acecha|Hijos de la ira|La sin razón|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('perito').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/perito2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(El hombre acecha|Hijos de la ira|La sin razón|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('perito2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/Perito en lunas/abarcas.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('abarcas').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Perito en lunas/umbrio.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('umbrio').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Perito en lunas/querencia.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('querencia').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Perito en lunas/enfada.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('enfada').textContent = text;
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

fetch('Textos/El rayo que no cesa/casta.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('casta').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/El rayo que no cesa/sije.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('sije').textContent = text;
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

fetch('Textos/Viento del pueblo/aceitunero.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('aceitunero').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Cancionero y romancero de ausencias

fetch('Textos/cancionero.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Cancionero y romancero de ausencias|Hijos de la ira|La sin razón|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('cancionero').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/cancionero2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(mujeres de la generación del 27|(las Sinsombrero)|Maruja Mallo|Marga Gil-Roësset|María Zambrano|María Teresa León|Josefina de la Torre|Rosa Chacel|Ernestina de Champourcín o Concha Méndez)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Cancionero y romancero de ausencias|Hijos de la ira|La sin razón|Yerma|La casa de Bernarda Alba)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('cancionero2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/Cancionero y romancero de ausencias/esposo.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('esposo').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Cancionero y romancero de ausencias/tren.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('tren').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Cancionero y romancero de ausencias/poetas.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('poetas').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Cancionero y romancero de ausencias/cancion.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('cancion').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Cancionero y romancero de ausencias/olor.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('olor').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Cancionero y romancero de ausencias/vals.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('vals').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Cancionero y romancero de ausencias/heridas.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('heridas').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Cancionero y romancero de ausencias/ausencia.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('ausencia').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Cancionero y romancero de ausencias/muerto.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('muerto').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Cancionero y romancero de ausencias/casas.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('casas').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Cancionero y romancero de ausencias/hijo.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('hijo').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Cancionero y romancero de ausencias/vientre.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('vientre').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Cancionero y romancero de ausencias/boca.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('boca').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Cancionero y romancero de ausencias/vino.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('vino').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Cancionero y romancero de ausencias/cebolla.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('cebolla').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Cancionero y romancero de ausencias/conformo.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('conformo').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));


//poemas externos 

fetch('Textos/misc.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('misc').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/misc2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('misc2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));