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


//Scholia

fetch('Textos/scholia.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('scholia').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/scholia2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('scholia2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/alicia.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('alicia').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

