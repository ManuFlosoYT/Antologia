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


//Escrito a cada instante

fetch('Textos/escritos.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('escritos').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/escritos2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('escritos2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/manos.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('manos').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));
