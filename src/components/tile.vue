<template>
  <div>
    <h1 v-if="showTitle == true" @click="dessine()">{{ Tile }}</h1>
    <canvas
      name="gametile"
      ref="myCanvas"
      :width="size"
      :height="size"
      style="border: 1px solid grey"
      class="w-40"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from "vue";
import { tileNameEnum } from "../pages/dorf/tilename.ts";

const myCanvas = ref<HTMLCanvasElement | null>(null);

const props = defineProps<{
  size: string;
  Tile: string;
  showTitle?: boolean;
}>();

onMounted(() => {
  dessine();
});
onUpdated(() => {
  dessine();
});

const dessine = () => {
  if (myCanvas.value) {
    const ctx = myCanvas.value.getContext("2d");

    const imageUrl = "/carte.png";

    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      // Draw the image onto the canvas
      if (ctx) {
        switch (props.Tile) {
          case tileNameEnum.ForestCabin.toString():
            ctx.drawImage(img, 547, 5, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.HarvestFestival.toString():
            ctx.drawImage(img, 5, 240, 270, 235, 0, 0, iconSize(), iconSize());
            break;

          case tileNameEnum.Ship.toString():
            ctx.drawImage(img, 280, 5, 270, 235, 0, 0, iconSize(), iconSize());
            break;

          case tileNameEnum.WatchTower.toString():
            ctx.drawImage(img, 550, 240, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.Locomotive.toString():
            ctx.drawImage(img, 280, 240, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.Ship.toString():
            ctx.drawImage(img, 280, 5, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.TrainStation.toString():
            // ctx.drawImage(img, 15, 710, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.Harbor.toString():
            // ctx.drawImage(img, 280, 5, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.RedHearts.toString():
            ctx.drawImage(img, 290, 710, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.Circus.toString():
            ctx.drawImage(img, 285, 477, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.SignalMan.toString():
            ctx.drawImage(img, 15, 710, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.Sheperdess.toString():
            // ctx.drawImage(img, 280, 5, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.Hill.toString():
            // ctx.drawImage(img, 280, 5, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.ConstructionSite.toString():
            // ctx.drawImage(img, 280, 5, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.BalloonLauch.toString():
            // ctx.drawImage(img, 280, 5, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.GoldenHearts.toString():
            // ctx.drawImage(img, 280, 5, 270, 235, 0, 0, iconSize(), iconSize());
            break;

          default:
            break;
        }
      }
    };
  }
};

const iconSize = () => {
  return <number>(<unknown>props.size);
};
</script>

<style scoped></style>
