<template>
  <div>
    <svg viewBox="0 0 400 400" class="sector" @click="toggleSpin">
      >
      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(45)">
          <stop offset="5%" stop-color="#E6EBEF" />
          <stop offset="95%" stop-color="#60A5FA" />
        </linearGradient>
      </defs>
      <template v-for="index in sectors.length" :key="index">
        <g :transform="`rotate(${rotationAngle.angle} 200 200)`">
          <g :transform="`rotate(${sectorAngle * index} 200 200)`">
            <path
              :d="arc(sectorAngle)"
              style="stroke: black; stroke-width: 2" fill="url('#myGradient')"
            />
            <text x="220" y="200" :transform="`rotate(${sectorAngle / 2} 200 200)`" style="stroke: white; stroke-width: 1; fill: white; font-size: xx-large;">
              {{ sectors[sectors.length - index - 1] }}
            </text>
            <circle cx="400" cy="200" r="10"></circle>
          </g>
        </g>
      </template>

      <path
        d="M 380 200 L400 205 L400 195 Z"
        style="stroke: red; fill: red; stroke-width: 2"
      ></path>
    </svg>
    <h3 class="">{{ winningSector }}</h3>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

interface Props {
  sectors: string[];
}
const props = withDefaults(defineProps<Props>(), {
  sectors: () => ["1", "2", "3", "4", "5", "6"],
});

const sectorAngle = computed(() => {
  return 360 / props.sectors.length;
});

const startTime = ref(-1);
const stopTime = ref(-1);
const currentTime = ref(0);
const stopInitiated = ref(false);
const timer = ref();
const initialOffset = ref(Math.random() * 360);
const rotation = ref(initialOffset.value);
  const T1 = ref(2500); // increase speed duration
  const T2 = ref(5000); // decrease speed duration

const spinStart = () => {
  startTime.value = new Date().getTime();
  stopInitiated.value = false;

  T2.value= Math.random() * 5000 + 2000
  timer.value = setInterval(() => {
    currentTime.value = new Date().getTime();
  }, 4);
};

const toggleSpin = () => {
  if (startTime.value > 0) {
    spinStop();
  } else spinStart();
};
const spinStop = () => {
  if (!stopInitiated.value) {
    stopInitiated.value = true;
    stopTime.value = new Date().getTime();
  }
};

const rotationAngle = computed(() => {
  currentTime.value = new Date().getTime();
  const elapsedTime = startTime.value > 0 ? currentTime.value - startTime.value : -1;
  const elapsedStopTime = stopTime.value > 0 ? currentTime.value - stopTime.value : -1;
  const Vcruise = 90;
  let VV = 0;


  if (elapsedTime <= T1.value && elapsedTime > 0) {
    //increase
    VV = 12 * Vcruise * (elapsedTime / T1.value);
    rotation.value = rotation.value + VV / 1000;
  }
  if (elapsedTime > T1.value && stopTime.value == -1) {
    // cruise
    VV = 3 * Vcruise;
    rotation.value = rotation.value + (VV / 1000) * 4;
  }
  if (elapsedStopTime > T2.value) {
    // stop
    clearInterval(timer.value);
    startTime.value = -1;
    stopTime.value = -1;
    stopInitiated.value = false;
  }

  if (elapsedStopTime > 0 && elapsedStopTime < T2.value) {
    //decrease
    VV = 12 * Vcruise * (1 - elapsedStopTime / T2.value);
    rotation.value = rotation.value + VV / 1000;
  }

  const angle: number = (Number(rotation.value.toFixed(2)) + initialOffset.value) % 360;
  return { angle: angle, vitesse: VV };
});

const arc = (angleInDegree: number) => {
  const piAngle = (angleInDegree * Math.PI) / 180;
  const x = 200 + 200 * Math.cos(piAngle);
  const y = 200 + 200 * Math.sin(piAngle);

  return `M 200,200 L400 200 A 200,200 0 0,1 ${x} ${y} Z`;
};
const winningSector = computed(() => {
  let index =
    (Math.floor(rotationAngle.value.angle / sectorAngle.value) + 1) %
    props.sectors.length;
  if (index == 0) index = props.sectors.length;
  return props.sectors[index - 1];
});
</script>

<style scoped>
.sector {
  @apply border-2 border-black text-white  bg-blue-500 rounded-full;
}
</style>
