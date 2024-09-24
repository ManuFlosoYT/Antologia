fetch('Textos/parrafo.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(generación del 60|visión crítica de la realidad|actitud humanista|problemas del ser humano)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(una frase completa|parte de otra frase)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('parrafo').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/parrafo2.txt') //CAMBIAR ESTO PARA CONFIGURAR
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /( ÁNGEL GONZÁLEZ|JOSÉ ÁNGEL VALENTE|A modo de esperanza|JAIME GIL DE BIEDMA|CLAUDIO RODRÍGUEZ|JOSÉ AGUSTÍN GOYTISOLO)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesEnCursiva = /(Áspero mundo|A modo de esperanza|Compañeros de viaje|Don de la ebriedad|Palabras para Julia y otras canciones)/gi; //CAMBIAR ESTO PARA CONFIGURAR
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; //CAMBIAR ESTO PARA CONFIGURAR

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>');

    document.getElementById('parrafo2').innerHTML = textoFinal; //CAMBIAR ESTO PARA CONFIGURAR
}).catch(error => console.error('Error al cargar el archivo:', error));