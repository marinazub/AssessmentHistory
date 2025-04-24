"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export function LineChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    // Create new chart
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan 2025", "Feb 2025", "Feb 2025", "Mar 2025", "Mar 2025"],
        datasets: [
          {
            label: "PHQ-9 Score",
            data: [15, 12, 9, 8, 6],
            borderColor: "rgb(59, 130, 246)",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            tension: 0.3,
            pointRadius: 4,
            pointBackgroundColor: "rgb(59, 130, 246)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 27,
            ticks: {
              stepSize: 5,
            },
            grid: {
              drawBorder: false,
            },
          },
          x: {
            grid: {
              display: true,
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              boxWidth: 10,
              usePointStyle: true,
            },
          },
          tooltip: {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            titleColor: "#000",
            bodyColor: "#000",
            borderColor: "rgba(0, 0, 0, 0.1)",
            borderWidth: 1,
            padding: 10,
            displayColors: false,
          },
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}
