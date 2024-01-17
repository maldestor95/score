<template>
  <div>Chart</div>

  <Bar
    :data="myDataTotal.data"
    :options="myDataTotal.options"
    v-if="props.graphType == 'total'"
  />
  <Line
    :data="myDataCumulative.data"
    :options="myDataCumulative.options"
    v-if="props.graphType == 'cumulative'"
  />
  {{ store.getScore(1) }}
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
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import { Bar, Line } from "vue-chartjs";
import { useScoreStore } from "./store";

export type Props = {
  graphType: "total" | "cumulative" | undefined;
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

const myDataTotal = {
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
const arrayRange = (start: number, stop: number, step: number) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

const myDataCumulative = {
  data: {
    labels: arrayRange(1, store.getRoundNumber, 1),
    datasets: store.userList.map((user, index) => {
      return {
        label: user.name,
        data: store.getCumulativeScore(index),
      };
    }),
    // {
    //   label: store.getUsers[1].name,
    //   data: store.cumulativeScore[1],
    // },
    // ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  },
};
</script>

<style scoped></style>
