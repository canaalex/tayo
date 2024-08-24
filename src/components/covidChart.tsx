import React from "react";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const fetchCovidData = async () => {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
  return data;
};

const CovidChart: React.FC = () => {
  const { data, isLoading, error } = useQuery({  queryKey: ["covidData"],
    queryFn: fetchCovidData,});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  const labels = Object.keys(data.cases);
  const cases = Object.values(data.cases);
  const deaths = Object.values(data.deaths);
  const recovered = Object.values(data.recovered);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Cases",
        data: cases,
        borderColor: "rgb(75, 192, 192)",
        fill: false,
      },
      {
        label: "Deaths",
        data: deaths,
        borderColor: "rgb(255, 99, 132)",
        fill: false,
      },
      {
        label: "Recovered",
        data: recovered,
        borderColor: "rgb(54, 162, 235)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "COVID-19 Cases Over Time",
      },
    },
  };

  return (
    <div className="chart-container">
        <Line data={chartData} options={options} />;
    </div>
  )
};

export default CovidChart;
