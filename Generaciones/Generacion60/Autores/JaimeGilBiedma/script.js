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


//Poemas postumos

fetch('Textos/postumo.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('postumo').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/postumo2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('postumo2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Gil.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('Gil').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/infancia.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('infancia').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/joven.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('joven').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));