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


//Ángel fieramente humano

fetch('Textos/angel.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('angel').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/angel2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('angel2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/mayoria.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('mayoria').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Redoble de conciencia

fetch('Textos/redoble.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('redoble').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/redoble2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('redoble2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/principio.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('principio').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Pido la paz y la palabra

fetch('Textos/paz.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('paz').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/paz2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('paz2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/paz3.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('paz3').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));