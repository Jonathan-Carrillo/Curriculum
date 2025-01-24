document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("skills-chart").getContext("2d");
    new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Python", "SQL", "Power BI", "R"],
            datasets: [{
                data: [35, 25, 20, 20],
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
});
