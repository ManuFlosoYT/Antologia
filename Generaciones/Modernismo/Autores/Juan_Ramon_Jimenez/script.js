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

//Poemas agrestes

fetch('Textos/Agrestes.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('Agrestes').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Agrestes2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('Agrestes2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/viaje.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('viaje').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));


//La soledad sonora

fetch('Textos/soledad.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('soledad').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/soledad2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('soledad2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/pajaro.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('pajaro').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Baladas de primavera

fetch('Textos/baladas.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('baladas').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/baladas2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('baladas2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/caballo.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('caballo').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));