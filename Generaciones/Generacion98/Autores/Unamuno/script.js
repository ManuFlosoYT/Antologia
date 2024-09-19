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

//Castilla

fetch('Textos/poesias.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('poesias').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/poesias2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('poesias2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/castilla.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('castilla').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Rosario de sonetos líricos

fetch('Textos/rosario.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('rosario').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/rosario2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('rosario2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/ateo.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('ateo').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

