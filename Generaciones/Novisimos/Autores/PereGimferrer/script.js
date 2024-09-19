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


//Arde el mar

fetch('Textos/mar.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('mar').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/mar2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('mar2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/oda.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('oda').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

