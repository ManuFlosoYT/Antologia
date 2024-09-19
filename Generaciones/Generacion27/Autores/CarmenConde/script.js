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


//Brocal

fetch('Textos/brocal.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('brocal').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/brocal2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('brocal2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/contigo.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('contigo').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/sonrisas.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('sonrisas').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Los poemas de Mar Menor

fetch('Textos/menor.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('menor').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/menor2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('menor2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/menor3.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('menor3').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));