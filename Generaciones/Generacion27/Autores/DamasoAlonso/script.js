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


//Hijos de la ira

fetch('Textos/ira.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('ira').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/ira2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('ira2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/profundis.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('profundis').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/insomnio.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('insomnio').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Hijos de la ira

fetch('Textos/hombre.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('hombre').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/hombre2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('hombre2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/libertad.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('libertad').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));