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


//A la orilla de un pozo

fetch('Textos/pozo.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('pozo').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/pozo2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('pozo2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/epistola.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('epistola').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));