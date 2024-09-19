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


//Seguro Azar

fetch('Textos/seguro.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('seguro').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/seguro2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('seguro2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/bujias.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('bujias').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//La voz a ti debida

fetch('Textos/voz.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('voz').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/voz2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('voz2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/ayer.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('ayer').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/vivir.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('vivir').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/perdoname.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('perdoname').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/llamaras.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('llamaras').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Razón de amor

fetch('Textos/razon.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('razon').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/razon2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('razon2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/razon3.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('razon3').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));