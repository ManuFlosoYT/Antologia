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


//Bajo tolerancia

fetch('Textos/bajo.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('bajo').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/bajo2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('bajo2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/julia.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('julia').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));


//Final de un adios

fetch('Textos/final.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('final').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/final2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('final2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/noche.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('noche').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));


//A veces gran amor

fetch('Textos/veces.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('veces').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/veces2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('veces2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/pajaros.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('pajaros').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));