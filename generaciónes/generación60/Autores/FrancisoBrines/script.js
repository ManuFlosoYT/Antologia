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


//Insistencias en luzbel

fetch('Textos/luzbel.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('luzbel').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/luzbel2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('luzbel2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/pagana.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('pagana').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/amor.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('amor').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));