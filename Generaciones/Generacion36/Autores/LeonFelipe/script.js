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


//Versos y oraciones del caminante

fetch('Textos/versos.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('versos').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/versos2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('versos2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/caminante.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('caminante').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Drop a Star

fetch('Textos/star.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('star').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/star2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('star2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/vida.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('vida').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));