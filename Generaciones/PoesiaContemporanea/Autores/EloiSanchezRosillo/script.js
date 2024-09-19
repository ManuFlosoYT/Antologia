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


//La vida

fetch('Textos/vida.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('vida').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/vida2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('vida2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/casa.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('casa').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));
