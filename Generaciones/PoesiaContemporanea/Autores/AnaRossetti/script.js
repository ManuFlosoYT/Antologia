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


//Indicios vehementes

fetch('Textos/inicios.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('Inicios').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/Inicios2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('Inicios2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/where.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('where').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

