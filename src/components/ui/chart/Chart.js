import { useEffect } from 'react'
import { Chart } from 'chart.js'

function Charts({ curr, data }) {
  useEffect(() => {
    const ctxs = document.getElementById('myChart').getContext('2d')
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctxs, {
      type: 'line',

      data: {
        labels: [
          '01 AM',
          '02 AM',
          '03 AM',
          '04 AM',
          '05 AM',
          '06 AM',
          '07 AM',
          '08 AM',
          '09 AM',
          '10 AM',
          '11 AM',
          '12 AM',
          '13 PM',
          '14 PM',
          '15 PM',
          '16 PM',
          '17 PM',
          '18 PM',
          '19 PM',
          '20 PM',
          '21 PM',
          '22 PM',
          '23 PM',
          '00 PM',
        ],
        datasets: [
          {
            data: curr,
            borderColor: 'white',
            backgroundColor: 'transparent',
          },
        ],
      },

      options: {
        tooltips: {
          displayColors: false,
          backgroundColor: '',
          bodyFontSize: 20,
          callbacks: {
            title: function () {
              return ''
            },
            labelTextColor: function () {
              return '#e8aa00'
            },
            label: function (context) {
              let label = `${context.value}°C`
              return label
            },
          },
        },
        layout: {
          padding: {
            top: 5,
          },
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        backgroundColor: 'red',
        scales: {
          yAxes: [
            {
              gridLines: {
                drawOnChartArea: false,
                drawBorder: false,
                tickMarkLength: 0,
              },
              ticks: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                drawOnChartArea: false,
                drawBorder: false,
              },
              ticks: {
                fontColor: '#CCC',
              },
            },
          ],
        },
      },
    })
  }, [curr])

  return (
    <div>
      <div className="w-[840px] mt-4">
        <div className="">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </div>
  )
}

export default Charts
