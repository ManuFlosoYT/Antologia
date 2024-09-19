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


//La realidad y el deseo

fetch('Textos/realidad.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('realidad').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/realidad2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('realidad2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/hombre.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('hombre').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Los placeres prohibidos

fetch('Textos/placeres.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('placeres').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/placeres2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('placeres2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/olvido.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('olvido').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Las nubes

fetch('Textos/nubes.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('nubes').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/nubes2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('nubes2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/tierra.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('tierra').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/peregrino.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('peregrino').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));