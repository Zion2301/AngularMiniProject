import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartData, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatListModule, MatIconModule, BaseChartDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // ✅ BAR CHART CONFIG
  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: (value) => {
            if (typeof value === 'number') {
              return value >= 1000 ? `${(value / 1000).toFixed(0)}K` : value;
            }
            return value;
          },
        },
      },
      y: {
        ticks: {
          font: { size: 14 },
        },
      },
    },
  };

  barChartData: ChartData<'bar'> = {
    labels: ['Good', 'Anomalies', 'Suspicious'],
    datasets: [
      {
        data: [290000, 310000, 180000],
        backgroundColor: '#0288d1',
        barThickness: 30,
        borderRadius: 10,
        categoryPercentage: 0.3,
      },
    ],
  };

  // ✅ DOUGHNUT CHART CONFIG (from your image)
  doughnutChartLabels = [
    '<18 Years Old',
    '18 - 24 Years Old',
    '25 - 34 Years Old',
    '35 - 45 Years Old',
    '>45 Years Old',
  ];

  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [117333, 140799, 156445, 172089, 195556],
        backgroundColor: ['#fcb900', '#a259ff', '#0090ff', '#00d084', '#0052cc'],
        hoverOffset: 8,
      },
    ],
  };

  doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: { font: { size: 13 } },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw as number;
            return `${value.toLocaleString()} Customer`;
          },
        },
      },
    },
  };
}



