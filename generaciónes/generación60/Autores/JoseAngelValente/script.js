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


//Material memoria

fetch('Textos/memoria.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('memoria').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/memoria2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('memoria2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/amor.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('amor').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));


//Fragmento de un libro futuro

fetch('Textos/futuro.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('futuro').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/futuro2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('futuro2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/adios.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('adios').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));