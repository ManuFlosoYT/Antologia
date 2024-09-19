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


//Abril

fetch('Textos/abril.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('abril').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/abril2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('abril2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/mañana.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('mañana').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));
