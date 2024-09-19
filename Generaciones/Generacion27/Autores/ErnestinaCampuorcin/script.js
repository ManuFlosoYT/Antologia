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


//Los libros de Fausto

fetch('Textos/fausto.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('fausto').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/fausto2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('fausto2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/pared.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('pared').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Cántico inútil

fetch('Textos/cantico.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('cantico').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/cantico2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('cantico2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/ambicion.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('ambicion').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));
