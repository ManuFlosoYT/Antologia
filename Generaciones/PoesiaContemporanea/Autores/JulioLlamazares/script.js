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


//La memoria de la nieve

fetch('Textos/nieve.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('nieve').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/nieve2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('nieve2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/tiempo.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('tiempo').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));
