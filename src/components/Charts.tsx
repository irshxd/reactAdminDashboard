import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
const months = ["January", "February", "March", "April", "May", "June", "July"];

interface barChartProps {
  horizontal?: boolean;
  data1: number[];
  data2: number[];
  title1: string;
  title2: string;
  bg_color1: string;
  bg_color2: string;
  labels?: string[];
}

export const BarChart = ({
  horizontal = false,
  data1 = [],
  data2 = [],
  title1,
  title2,
  labels = months,
  bg_color1,
  bg_color2,
}: barChartProps) => {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: "Irshad's gamestore",
      },
    },
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title1,
        data: data1,
        backgroundColor: bg_color1,
      },
      {
        label: title2,
        data: data2,
        backgroundColor: bg_color2,
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

interface doughnutChartProps {
  labels: string[];
  data: number[];
  title1: string;
  title2: string;
  backgroundColor: string[];
  cutout?: number;
  legend?: boolean;
  offset?: number[];
}
export const DoughnutChart = ({
  labels,
  data,
  backgroundColor,
  cutout,
  legends = true,
  offset,
}: doughnutChartProps) => {
  const doughnutData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [{ data, backgroundColor, borderWidth: 0, offset }],
  };
  const doughnutOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          padding: 40,
        },
      },
    },
    cutout,
  };
  return <Doughnut data={doughnutData} options={doughnutOptions} />;
};
