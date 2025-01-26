document.addEventListener("DOMContentLoaded", () => {
    // Botón para mostrar el currículum
    const enterButton = document.getElementById("enter-btn");
    const userNameInput = document.getElementById("user-name");
    const welcomeScreen = document.getElementById("welcome-screen");
    const curriculum = document.getElementById("curriculum");

    enterButton.addEventListener("click", () => {
        const userName = userNameInput.value.trim();
        if (userName) {
            alert(`¡Hola, ${userName}! Bienvenido a mi currículum.`);
            welcomeScreen.style.display = "none";
            curriculum.style.display = "block";
            loadCurriculum();
        } else {
            alert("Por favor, ingresa tu nombre.");
        }
    });

    // Cargar datos del currículum desde el archivo JSON
    function loadCurriculum() {
        fetch("data.json")
            .then(response => response.json())
            .then(data => {
                populateList("education-list", data.education);
                populateList("experience-list", data.experience);
                populateList("courses-list", data.courses);
                renderChart(data.skills);
            })
            .catch(err => console.error("Error al cargar el currículum:", err));
    }

    // Rellenar listas de educación, experiencia y cursos
    function populateList(elementId, items) {
        const list = document.getElementById(elementId);
        items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            list.appendChild(li);
        });
    }

    // Gráfico de habilidades
    function renderChart(skills) {
        const ctx = document.getElementById("skills-chart").getContext("2d");
        new Chart(ctx, {
            type: "pie",
            data: {
                labels: Object.keys(skills),
                datasets: [{
                    data: Object.values(skills),
                    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]
                }]
            },
            options: {
                plugins: {
                    legend: {
                        position: "top"
                    }
                }
            }
        });
    }
});
