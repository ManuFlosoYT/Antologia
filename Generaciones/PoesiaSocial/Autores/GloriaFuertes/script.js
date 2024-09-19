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


//Poeta de guardia

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

fetch('Textos/auto.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('auto').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Pecábamos como ángeles

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

fetch('Textos/caro.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('caro').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));
