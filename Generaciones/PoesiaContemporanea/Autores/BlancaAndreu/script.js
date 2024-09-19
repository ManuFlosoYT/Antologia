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


//Los archivos griegos

fetch('Textos/archivos.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('archivos').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/archivos2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('archivos2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/irak.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('irak').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));
