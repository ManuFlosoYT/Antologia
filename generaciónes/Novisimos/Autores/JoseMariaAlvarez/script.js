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


//Museo de cera

fetch('Textos/cera.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('cera').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/cera2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('cera2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/piedra.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('piedra').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

