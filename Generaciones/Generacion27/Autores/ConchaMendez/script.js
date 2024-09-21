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


//Niño y sombras

fetch('Textos/niño.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('niño').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/niño2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('niño2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/desprendio.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('desprendio').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Lluvias enlazadas

fetch('Textos/lluvias.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('lluvias').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/lluvias2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('lluvias2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/andar.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('andar').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Entre sombra y sueño

fetch('Textos/sombra.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('sombra').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/sombra2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('sombra2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/levante.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('levante').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/entiendo.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('entiendo').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Inquietudes

fetch('Textos/inquietudes.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('inquietudes').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/inquietudes2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('inquietudes2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/sonrisas.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('sonrisas').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));