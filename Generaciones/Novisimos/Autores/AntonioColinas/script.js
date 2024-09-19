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


//Sepulcro en Tarquinia

fetch('Textos/selpulcro.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('selpulcro').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/selpulcro2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('selpulcro2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/casanova.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('casanova').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

