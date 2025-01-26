// Redirigir al currículum con nombre e idioma
document.getElementById('go-button').addEventListener('click', () => {
    const name = document.getElementById('user-name').value;
    const language = document.querySelector('.lang-button.selected')?.id === 'lang-en' ? 'en' : 'es';
    if (name) {
        window.location.href = `curriculum.html?name=${encodeURIComponent(name)}&language=${language}`;
    } else {
        alert('Por favor, ingresa tu nombre.');
    }
});

document.querySelectorAll('.lang-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.lang-button').forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});

// Habilidades - gráfico de pie
window.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('skills-chart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Python', 'SQL', 'Visualización de datos', 'Estadística'],
            datasets: [{
                data: [40, 25, 20, 15],
                backgroundColor: ['#007bff', '#00d2ff', '#3a7bd5', '#0056b3']
            }]
        }
    });
});
