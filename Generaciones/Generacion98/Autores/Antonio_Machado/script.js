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


//Campos de Castilla

fetch('Textos/campos.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('campos').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/campos2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('campos2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

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

fetch('Textos/soledades.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('soledades').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/soledades2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('soledades2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/anoche.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('anoche').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));