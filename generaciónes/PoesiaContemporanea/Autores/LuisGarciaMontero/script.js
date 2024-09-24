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


//Completamente Viernes

fetch('Textos/viernes.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('viernes').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/viernes2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('viernes2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Completamente.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('Completamente').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Confesion.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('Confesion').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Resumen.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('Resumen').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/inmortalidad.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('inmortalidad').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));


//Habitaciones separadas

fetch('Textos/Habitaciones.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('Habitaciones').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Habitaciones2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('Habitaciones2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Dedicatoria.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('Dedicatoria').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/invierno.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('invierno').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));