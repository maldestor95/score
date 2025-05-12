<template>
  <div>
    <svg viewBox="0 0 400 400" class="sector" @click="toggleSpinning">
      >
      <template v-for="(item, index) in sectors" :key="index">
        <g :transform="`rotate(${rotationAngle.angle + initialOffset} 200 200)`">
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
    <div class="grid grid-cols-2">
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
      <div>{{ initialOffset }}</div>
      <div>rotationAngle.angle</div>
      <div>{{ rotationAngle.angle }}</div>
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
const startTime = ref(0);
const stopTime = ref(0);
const currentTime = ref(0);
const stopInitiated = ref(false);
const timer = ref();
const initialOffset = ref(Math.random() * 360);

const toggleSpinning = () => {
  if (!stopInitiated.value) {
    stopTime.value = new Date().getTime();
    stopInitiated.value = true;
    const stopSpin= {startTime:startTime.value,stopTime:stopTime.value, rotationAngle:rotationAngle.value, initialOffset:initialOffset.value}
    console.log('stopSpin', stopSpin)
    return;
  }
    startTime.value = new Date().getTime();
    const initSpin= {startTime:startTime.value, rotationAngle:initialOffset.value, initialOffset:initialOffset.value}
    console.log('init Spin', initSpin)
    stopInitiated.value = false;
    timer.value = setInterval(() => {
    currentTime.value = new Date().getTime();
  }, 4);
};

const rotationAngle = computed(() => {
  currentTime.value = new Date().getTime();
  const elapsedTime = currentTime.value - startTime.value;
  const elapsedStopTime = currentTime.value - stopTime.value;
  const Vcruise = 90;
  let VV = 0;

  let rotation; // = (elapsedTime / 1000) * 360;
  const CruiseStartTime = 2500; // 1 second
  const CruiseStopDuration = 3000; // 1 second

  if (elapsedTime <= CruiseStartTime) {
    //increase
    VV = Vcruise * (elapsedTime / CruiseStartTime);
    rotation = (elapsedTime / 1000) * VV;
    return { angle: rotation, vitesse: VV };
  }
  if (elapsedStopTime > CruiseStopDuration && stopInitiated.value) {
    clearInterval(timer.value);
    initialOffset.value = rotationAngle.value.angle;
    stopInitiated.value = false;
    stopTime.value = 0;
  }

  if (currentTime.value > stopTime.value && stopInitiated.value) {
    //decrease
    VV = Vcruise * (1 - elapsedStopTime / CruiseStopDuration / 4);
    rotation = (elapsedTime / 1000) * VV;
    // console.log("decrease",VV,rotation)
    return { angle: rotation, vitesse: VV };
  }

  if (timer.value && stopInitiated.value == false) {
    VV = Vcruise;
    rotation = (elapsedTime / 1000) * VV;
    return { angle: rotation, vitesse: VV };
  }

  VV = Vcruise;
  console.log(Vcruise);
  rotation = (elapsedTime / 1000) * VV;
  return { angle: rotation, vitesse: VV };
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
