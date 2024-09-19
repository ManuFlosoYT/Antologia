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


//Don de la ebriedad

fetch('Textos/don.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('don').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/don2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('don2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/ebriedad.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('ebriedad').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/jornal.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('jornal').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));