//Biografía del autor

fetch('Textos/biografia.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('biografia').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/biografia2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('biografia2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/biografia3.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('biografia3').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Prosas profanas

fetch('Textos/prosas.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('prosas').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/prosas2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('prosas2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/autumnal.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('autumnal').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/sonatina.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('sonatina').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/marcha.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('marcha').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Azul

fetch('Textos/azul.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('azul').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/azul2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('azul2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/capoulican.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('capoulican').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));



//Cantos de vida y esperanza

fetch('Textos/cantos.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('cantos').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/cantos2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('cantos2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/otoño.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('otoño').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/fatal.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('fatal').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));