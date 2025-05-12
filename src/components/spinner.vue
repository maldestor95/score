<template>
  <div>
    <button @click="spinStart">Start</button>
    <button @click="spinStop">Stop</button>
    <svg viewBox="0 0 400 400" class="sector">
      >
      <template v-for="(item, index) in sectors" :key="index">
        <g :transform="`rotate(${rotationAngle.angle} 200 200)`">
          <g :transform="`rotate(${sectorAngle * index} 200 200)`">
            <path
              :d="arc(sectorAngle)"
              style="stroke: black; fill: yellow; stroke-width: 2"
            />
            <text x="320" y="200" :transform="`rotate(${sectorAngle / 2} 200 200)`">
              {{ item }}
            </text>
          </g>
        </g>
      </template>
    </svg>
    <div class="grid grid-cols-2 hidden">
      <div>startTime</div>
      <div>{{ startTime }}</div>
      <div>stopTime</div>
      <div>{{ stopTime }}</div>
      <div>currentTime</div>
      <div>{{ currentTime }}</div>
      <div>elapsedTime</div>
      <div>{{ currentTime - startTime }}</div>
      <div>Vitess</div>
      <div>
        {{ Math.round(rotationAngle.vitesse) }}
      </div>
      <div>stopInitiated</div>
      <div>{{ stopInitiated }}</div>
      <div>initialOffset</div>
      <div>{{ initialOffset.toFixed(1) }}</div>
      <div>rotationAngle.angle</div>
      <div>{{ rotationAngle.angle.toFixed(1) }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, computed, ref } from "vue";

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
const rotation=ref(initialOffset.value)

const spinStart = () => {
  startTime.value = new Date().getTime();
  stopInitiated.value = false;

  const initSpin = {
    startTime: startTime.value,
    rotationAngle: initialOffset.value,
    initialOffset: initialOffset.value,
  };
  console.log("init Spin", initSpin);

  timer.value = setInterval(() => {
    currentTime.value = new Date().getTime();
  }, 4);
};


const spinStop = () => {
  if (!stopInitiated.value) { 
    stopInitiated.value=true
    stopTime.value = new Date().getTime();
  }
};

const rotationAngle = computed(() => {
  currentTime.value = new Date().getTime();
  const elapsedTime = startTime.value > 0 ? currentTime.value - startTime.value : -1;
  const elapsedStopTime = stopTime.value > 0 ? currentTime.value - stopTime.value : -1;
  const Vcruise = 90;
  let VV = 0;
  const T1 = 2500; // increase speed duration
  const T2 = 4000; // decrease speed duration

  
  if (elapsedTime <= T1 && elapsedTime > 0) {
    //increase
    VV = 12*Vcruise * (elapsedTime / T1);
    rotation.value = rotation.value+ VV/1000;
  }
  if (elapsedTime > T1 && stopTime.value == -1) {
// cruise
    VV = 3*Vcruise;
    rotation.value=rotation.value+VV/1000*4
}
  if (elapsedStopTime > T2) {
    // stop
    clearInterval(timer.value);
    startTime.value = -1;
    stopTime.value = -1;
    stopInitiated.value=false
  }

  if (elapsedStopTime > 0 && elapsedStopTime < T2) {
    //decrease
    VV = 12*Vcruise * (1-elapsedStopTime / T2 );
    rotation.value = rotation.value+ VV/1000;
  }

  const angle:number=(Number(rotation.value.toFixed(2)) + initialOffset.value)%360
  return { angle: angle, vitesse: VV };
});

const arc = (angleInDegree: number) => {
  const piAngle = (angleInDegree * Math.PI) / 180;
  const x = 200 + 200 * Math.cos(piAngle);
  const y = 200 + 200 * Math.sin(piAngle);

  return `M 200,200 L400 200 A 200,200 0 0,1 ${x} ${y} Z`;
};
</script>

<style scoped>
.sector {
  @apply border-2 border-black text-white  bg-blue-500 rounded-full;
}
</style>
