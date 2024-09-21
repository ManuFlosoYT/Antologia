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
    const frasesEnCursiva = /(Soledades|Campos de Castilla|Nuevas canciones|La Lola se va a los puertos|La Lola se va a los puertos)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('biografia2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));;

fetch('Textos/biografia3.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('biografia3').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));


//Campos de Castilla

fetch('Textos/campos.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(tendencia a la vanguardia|tendencia al compromiso)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Soledades|Campos de Castilla|Nuevas canciones|La Lola se va a los puertos|La Lola se va a los puertos)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('campos').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/campos2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(tendencia a la vanguardia|tendencia al compromiso)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Soledades|Campos de Castilla|Nuevas canciones|La Lola se va a los puertos|La Lola se va a los puertos)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('campos2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/olmo.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('olmo').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/jose.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('jose').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/retrato.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('retrato').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/pasado.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('pasado').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/mañana.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('mañana').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/saeta.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('saeta').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/caminante.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('caminante').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Soledades, galerías y otros poemas

fetch('Textos/soledades.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(tendencia a la vanguardia|tendencia al compromiso)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Soledades|Campos de Castilla|Nuevas canciones|La Lola se va a los puertos|La Lola se va a los puertos)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('soledades').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/soledades2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(tendencia a la vanguardia|tendencia al compromiso)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Soledades|Campos de Castilla|Nuevas canciones|La Lola se va a los puertos|La Lola se va a los puertos)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('soledades2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/anoche.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('anoche').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));