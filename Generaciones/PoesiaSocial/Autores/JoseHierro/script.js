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


//Quinta del 42

fetch('Textos/quinta.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('quinta').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/quinta2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('quinta2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/olvidas.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('olvidas').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Cuaderno de Nueva York

fetch('Textos/cuaderno.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('cuaderno').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/cuaderno2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('cuaderno2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/fe.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('fe').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));
