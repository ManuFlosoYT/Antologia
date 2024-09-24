fetch('Textos/parrafo.txt')
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(generación de |1914|una frase completa)/gi; 
    const frasesEnCursiva = /(una frase completa|parte de otra frase)/gi; 
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; // Nueva expresión regular para subrayado

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>'); // Aplicar subrayado

    document.getElementById('parrafo').innerHTML = textoFinal;
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/parrafo2.txt')
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(Institución Libre de Enseñanza|sólida formación universitaria|espíritu científico|optimismo|vocación europeísta|talante liberal|elitista)/gi; 
    const frasesEnCursiva = /(una frase completa|parte de otra frase)/gi; 
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; // Nueva expresión regular para subrayado

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>'); // Aplicar subrayado

    document.getElementById('parrafo2').innerHTML = textoFinal;
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/parrafo3.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('parrafo3').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/parrafo4.txt')
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(Diario de un poeta recién casado|una frase completa)/gi; 
    const frasesEnCursiva = /(Diario de un poeta recién casado|parte de otra frase)/gi; 
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; // Nueva expresión regular para subrayado

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>'); // Aplicar subrayado

    document.getElementById('parrafo4').innerHTML = textoFinal;
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/parrafo5.txt')
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(Segunda época o intelectual|poesía pura)/gi; 
    const frasesEnCursiva = /(Diario de un poeta recién casado|parte de otra frase)/gi; 
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; // Nueva expresión regular para subrayado

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>'); // Aplicar subrayado

    document.getElementById('parrafo5').innerHTML = textoFinal;
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/parrafo6.txt')
  .then(response => response.text())
  .then(texto => {
    const frasesEnNegrita = /(Tercera época o suficiente|máxima depuración|verso libre|Dios deseante y deseado)/gi; 
    const frasesEnCursiva = /(Dios deseante y deseado|parte de otra frase)/gi; 
    const frasesSubrayadas = /(texto a subrayar|otro texto)/gi; // Nueva expresión regular para subrayado

    const textoFormateado1 = texto.replace(frasesEnNegrita, '<b>$&</b>'); 
    const textoFormateado2 = textoFormateado1.replace(frasesEnCursiva, '<i>$&</i>'); 
    const textoFinal = textoFormateado2.replace(frasesSubrayadas, '<u>$&</u>'); // Aplicar subrayado

    document.getElementById('parrafo6').innerHTML = textoFinal;
}).catch(error => console.error('Error al cargar el archivo:', error));

fetch('Textos/parrafo7.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('parrafo7').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));