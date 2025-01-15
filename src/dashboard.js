document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("revenueChart").getContext("2d");

  // Dummy Data
  const revenueData = {
    labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    datasets: [
      {
        label: "Fish Pond 1",
        backgroundColor: "rgba(13, 27, 42, 0.9)", // Dark Blue
        borderWidth: 2,
        barThickness: 64, // Thin bars to stack tightly
        data: [
          3000, 4000, 3500, 3700, 4200, 3900, 4100, 4500, 4600, 4400, 4300,
          4200,
        ],
      },
      {
        label: "Fish Pond 2",
        backgroundColor: "rgba(27, 38, 59, 0.9)", // Medium Blue
        borderWidth: 2,
        barThickness: 64,
        data: [
          5000, 6000, 5500, 5700, 6200, 5900, 6100, 6500, 6600, 6400, 6300,
          6200,
        ],
      },
      {
        label: "Chicken Pond 3",
        backgroundColor: "rgba(166, 221, 240, 0.9)", // Light Blue
        borderWidth: 2,
        barThickness: 64,
        data: [
          7000, 8000, 7500, 7700, 8200, 7900, 8100, 8500, 8600, 8400, 8300,
          2400,
        ],
      },
    ],
  };

  // Chart Configuration (Stacked Bar in Single Line)
  const revenueChart = new Chart(ctx, {
    type: "bar",
    data: revenueData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          mode: "index",
          intersect: false,
        },
        legend: {
          display: true, // Show dataset labels on top
          position: "top",
        },
      },
      scales: {
        y: {
          stacked: true, // Stack bars on top of each other
          beginAtZero: true,
          max: 20000,
          ticks: {
            stepSize: 5000,
          },
          grid: {
            color: "#ddd",
          },
        },
        x: {
          stacked: true, // Stack bars in the same position
          grid: {
            display: false,
          },
        },
      },
      animation: {
        duration: 1000,
        easing: "easeOutBounce",
      },
    },
  });
});
