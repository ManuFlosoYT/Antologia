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


//Marinero en tierra

fetch('Textos/marinero.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('marinero').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/marinero2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('marinero2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/mar.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('mar').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/adios.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('adios').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/deje.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('deje').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Sobre los ángeles

fetch('Textos/angeles.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('angeles').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/angeles2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('angeles2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/numeros.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('numeros').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/nocturno.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('nocturno').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Entre el clavel y la espada

fetch('Textos/clavel.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('clavel').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/clavel2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('clavel2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/paloma.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('paloma').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Entre el clavel y la espada

fetch('Textos/pintura.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('pintura').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/pintura2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('pintura2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/galope.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('galope').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));