// Mostrar el currículum después de ingresar el nombre
document.getElementById("start-btn").addEventListener("click", () => {
    const userName = document.getElementById("user-name").value;
    if (!userName.trim()) {
        alert("Por favor, ingresa tu nombre.");
        return;
    }
    document.getElementById("welcome-screen").classList.add("hidden");
    document.getElementById("curriculum-screen").classList.remove("hidden");
});
