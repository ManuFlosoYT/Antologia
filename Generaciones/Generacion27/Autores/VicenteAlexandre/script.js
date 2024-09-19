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


//Ámbito

fetch('Textos/ambito.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('ambito').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/ambito2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('ambito2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/adolescencia.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('adolescencia').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//La destrucción o el amor

fetch('Textos/destruccion.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('destruccion').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/destruccion2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('destruccion2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/cuerpo.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('cuerpo').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));


fetch('Textos/querian.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('querian').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/unidad.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('unidad').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));