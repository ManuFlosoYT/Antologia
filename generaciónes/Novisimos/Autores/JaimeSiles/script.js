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


//Semáforos, semáforos

fetch('Textos/Semaforos.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('Semaforos').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Semaforos2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('Semaforos2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/acil.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('acil').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

