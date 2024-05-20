<template>
  <Bar
    :data="myDataBar.data"
    :options="myDataBar.options"
    v-if="props.graphType == 'total'"
  />
  <Line
    :data="myDataCumulative.data"
    :options="myDataCumulative.options"
    v-if="props.graphType == 'cumulative'"
  />
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Colors,
  LineElement,
  PointElement,
  ChartConfiguration,
  ChartDataset,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import { Bar, Line } from "vue-chartjs";
import { useScoreStore } from "./store";

export type Props = {
  graphType: "total" | "cumulative" | "table" | undefined;
};
const props = withDefaults(defineProps<Props>(), {
  graphType: "total",
});

const store = useScoreStore();

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Colors,
  Title,
  Legend,
  Tooltip,
  zoomPlugin
);

const cumulativeData = store.userList.map(
  (user, index): ChartDataset<"line"> => {
    return {
      label: user.name,
      data: <number[]>store.getCumulativeScore(index),
      pointStyle: "circle",
      pointRadius: 5,
      pointHoverRadius: 10,
    };
  }
);

const myDataBar: ChartConfiguration<"bar"> = {
  type: "bar",
  data: {
    labels: ["Score"],
    datasets: store.userList.map((user, index) => {
      return {
        label: user.name,
        data: [store.getScore(index)],
      };
    }),
  },
  options: {
    responsive: true,
    // indexAxis: "y",
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "rgb(255, 99, 132)",
        },
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
      },
    },
  },
};
const arrayRange = (start: number, stop: number, step: number) => {
  const arr = [];
  for (let i = start; i <= stop; i = i + step) {
    arr.push(i);
  }
  return arr;
};

const myDataCumulative: ChartConfiguration<"line"> = {
  type: "line",
  data: {
    labels: arrayRange(1, store.getRoundNumber, 1),
    datasets: cumulativeData,
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: { boxWidth: 20 },
      },
    },
  },
};
</script>
