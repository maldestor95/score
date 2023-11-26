<template>
  <div class="flex">
    <h1>{{ Tile }}</h1>
    <canvas
      ref="myCanvas"
      :id="Tile"
      :width="size"
      :height="size"
      style="border: 1px solid grey"
      class="bg-red-300 w-40"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { tileNameEnum } from "../pages/dorf/tilename.ts";

const myCanvas = ref<HTMLCanvasElement | null>(null);

const props = defineProps<{
  size: string;
  Tile: tileNameEnum;
}>();
onMounted(() => {
  if (myCanvas.value) {
    const ctx = myCanvas.value.getContext("2d");

    const imageUrl = "/carte.png";

    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      // Draw the image onto the canvas
      if (ctx) {
        switch (props.Tile) {
          case tileNameEnum.ForestCabin:
            ctx.drawImage(img, 547, 5, 270, 235, 0, 0, iconSize(), iconSize());

            break;
          case tileNameEnum.HarvestFestival:
            ctx.drawImage(img, 5, 240, 270, 235, 0, 0, iconSize(), iconSize());
            break;

          case tileNameEnum.Ship:
            ctx.drawImage(img, 280, 5, 270, 235, 0, 0, iconSize(), iconSize());
            break;

          case tileNameEnum.WatchTower:
            ctx.drawImage(img, 550, 240, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.Locomotive:
            ctx.drawImage(img, 280, 240, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.Ship:
            ctx.drawImage(img, 280, 5, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.TrainStation:
            // ctx.drawImage(img, 15, 710, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.Harbor:
            // ctx.drawImage(img, 280, 5, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.RedHearts:
            ctx.drawImage(img, 290, 710, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.Circus:
            ctx.drawImage(img, 285, 477, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.SignalMan:
            ctx.drawImage(img, 15, 710, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.Sheperdess:
            // ctx.drawImage(img, 280, 5, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.Hill:
            // ctx.drawImage(img, 280, 5, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.ConstructionSite:
            // ctx.drawImage(img, 280, 5, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.BalloonLauch:
            // ctx.drawImage(img, 280, 5, 270, 235, 0, 0, iconSize(), iconSize());
            break;
          case tileNameEnum.GoldenHearts:
            // ctx.drawImage(img, 280, 5, 270, 235, 0, 0, iconSize(), iconSize());
            break;

          default:
            break;
        }
      }
    };
  }
});

const iconSize = () => {
  return <number>(<unknown>props.size);
};
</script>

<style scoped></style>
