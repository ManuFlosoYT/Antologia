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


//Cantico

fetch('Textos/cantico.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('cantico').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/cantico2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('cantico2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/sillon.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('sillon').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/reloj.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('reloj').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));