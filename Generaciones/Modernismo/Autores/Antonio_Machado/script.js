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



//Campos de castilla

fetch('Textos/campos.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('campos').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/campos2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('campos2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/moscas.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('moscas').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/ocaso.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('ocaso').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));


//Soledades

fetch('Textos/soledades.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('soledades').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/soledades2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('soledades2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));


fetch('Textos/recuerdo.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('recuerdo').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

