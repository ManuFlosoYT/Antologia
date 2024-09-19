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


//Tranquilamente hablando

fetch('Textos/hablando.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('hablando').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/hablando2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('hablando2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/biografia4.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('biografia4').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Cantos iberos

fetch('Textos/cantos.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('cantos').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/cantos2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('cantos2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/españa.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('españa').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));
