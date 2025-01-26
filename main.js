// Redirigir al currículum con el nombre y el idioma seleccionados
document.getElementById('go-button').addEventListener('click', () => {
    const name = document.getElementById('user-name').value;
    const language = document.querySelector('button.selected')?.id === 'lang-en' ? 'en' : 'es';
    if (name) {
        window.location.href = `curriculum.html?name=${encodeURIComponent(name)}&language=${language}`;
    } else {
        alert('Por favor, ingresa tu nombre.');
    }
});

// Selección de idioma
document.getElementById('lang-es').addEventListener('click', () => {
    document.getElementById('lang-es').classList.add('selected');
    document.getElementById('lang-en').classList.remove('selected');
});

document.getElementById('lang-en').addEventListener('click', () => {
    document.getElementById('lang-en').classList.add('selected');
    document.getElementById('lang-es').classList.remove('selected');
});

// Mostrar el nombre del usuario en el currículum
document
::contentReference[oaicite:0]{index=0}
 
