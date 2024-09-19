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


//Una educacion sentimental

fetch('Textos/educacion.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('educacion').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/educacion2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('educacion2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/supiera.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('supiera').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Tiffany.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('Tiffany').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));