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
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/biografia3.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('biografia3').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Poemas agrestes

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
}).catch(error => console.error('Error al cargar el archivo:', error));

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
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/viaje.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('viaje').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));


//La soledad sonora

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
}).catch(error => console.error('Error al cargar el archivo:', error));

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
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/pajaro.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('pajaro').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Baladas de primavera

fetch('Textos/baladas.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('baladas').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/baladas2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('baladas2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/caballo.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('caballo').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));