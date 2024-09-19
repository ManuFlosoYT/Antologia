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


//Romancero gitano

fetch('Textos/romancero.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('romancero').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/romancero2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('romancero2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/luna.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('luna').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/sonambulo.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('sonambulo').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/preciosa.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('preciosa').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Llanto por Ignacio Sánchez Mejías

fetch('Textos/llanto.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('llanto').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/llanto2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('llanto2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/alma.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('alma').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Poeta en Nueva York

fetch('Textos/poeta.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('poeta').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/poeta2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('poeta2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/aurora.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('aurora').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/guirnalda.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('guirnalda').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/verdad.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('verdad').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));