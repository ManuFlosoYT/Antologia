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

//Alma

fetch('Textos/alma.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('alma').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/alma2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('alma2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/ocaso.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('ocaso').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));


//El mal poema

fetch('Textos/mal.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('mal').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/mal2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('mal2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/retrato.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('retrato').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));