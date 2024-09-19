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


//Versos Humanos

fetch('Textos/humanos.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('humanos').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/humanos2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('humanos2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/cipres.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('cipres').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/acariciarte.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('acariciarte').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

//Soria

fetch('Textos/soria.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('soria').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/soria2.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('soria2').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));

fetch('Textos/duero.txt')
    .then(response => response.text())
    .then(text => 
    {
        document.getElementById('duero').textContent = text;
    }
).catch(error => console.error('Error fetching file:', error));
