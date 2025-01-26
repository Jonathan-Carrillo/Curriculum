// Función para cambiar los textos al idioma seleccionado
function cambiarIdioma(idioma) {
    const textosEspañol = {
        bienvenida: "Bienvenido al currículum de Jonathan Carrillo",
        preguntaNombre: "Por favor ingresa tu nombre",
        btnComenzar: "Comenzar",
        sobreMi: "Sobre mí",
        educacion: "Educación",
        experiencia: "Experiencia",
        cursos: "Cursos",
        habilidades: "Habilidades",
        contacto: "Contacto",
    };

    const textosIngles = {
        bienvenida: "Welcome to Jonathan Carrillo's CV",
        preguntaNombre: "Please enter your name",
        btnComenzar: "Start",
        sobreMi: "About me",
        educacion: "Education",
        experiencia: "Experience",
        cursos: "Courses",
        habilidades: "Skills",
        contacto: "Contact",
    };

    const textos = idioma === 'en' ? textosIngles : textosEspañol;

    // Actualizando los textos de la página de bienvenida
    document.getElementById("welcome-message").innerText = textos.bienvenida;
    document.getElementById("name-prompt").innerText = textos.preguntaNombre;
    document.getElementById("start-button").innerText = textos.btnComenzar;

    // Actualizando los títulos del curriculum
    document.getElementById("section-about").innerText = textos.sobreMi;
    document.getElementById("section-education").innerText = textos.educacion;
    document.getElementById("section-experience").innerText = textos.experiencia;
    document.getElementById("section-courses").innerText = textos.cursos;
    document.getElementById("section-skills").innerText = textos.habilidades;
    document.getElementById("section-contact").innerText = textos.contacto;
}

// Manejador de eventos para los botones de idioma
document.getElementById("spanish-btn").addEventListener("click", function () {
    cambiarIdioma('es');
});

document.getElementById("english-btn").addEventListener("click", function () {
    cambiarIdioma('en');
});

// Función para mostrar el curriculum después de que el usuario ingrese su nombre
function comenzar() {
    const nombre = document.getElementById("name-input").value;
    if (nombre) {
        localStorage.setItem("nombre", nombre); // Guardar el nombre para la página de curriculum
        document.getElementById("welcome-container").style.display = "none";
        document.getElementById("cv-container").style.display = "block"; // Mostrar el curriculum
    } else {
        alert("Por favor ingresa tu nombre.");
    }
}

// Al cargar la página, mostramos el currículum con el nombre guardado
window.onload = function () {
    const nombreGuardado = localStorage.getItem("nombre");
    if (nombreGuardado) {
        document.getElementById("welcome-container").style.display = "none";
        document.getElementById("cv-container").style.display = "block";
        document.getElementById("cv-name").innerText = nombreGuardado;
    }
};
