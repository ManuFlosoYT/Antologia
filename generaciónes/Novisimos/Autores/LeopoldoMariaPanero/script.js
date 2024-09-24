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


//Así se fundó carnaby street

fetch('Textos/carnaby.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('carnaby').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/carnaby2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('carnaby2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/enanitos.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('enanitos').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/roja.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('roja').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));
