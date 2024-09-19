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

//Eternidades

fetch('Textos/eternidades.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('eternidades').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/eternidades2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('eternidades2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/vino.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('vino').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/no.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('no').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Diario de un poeta recien casado

fetch('Textos/diario.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('diario').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/diario2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('diario2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/soledad.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('soledad').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//La Soledad Sonora

fetch('Textos/sonora.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('sonora').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/sonora2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('sonora2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/rosa.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('rosa').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));