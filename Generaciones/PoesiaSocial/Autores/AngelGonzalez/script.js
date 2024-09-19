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


//Áspero mundo

fetch('Textos/mundo.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('mundo').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/mundo2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('mundo2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/tiempo.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('tiempo').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Sin esperanza, con convencimiento

fetch('Textos/esperanza.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('esperanza').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/esperanza2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('esperanza2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/porvenir.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('porvenir').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));
