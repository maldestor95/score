<template>
  <!-- code inspired by https://www.w3schools.com/howto/howto_css_switch.asp -->
  <div class="flex flex-row items-center">
    <div class="mr-2 z-0 pt-1">
      <slot>switch label</slot>
    </div>
    <label class="switch shrink-0 grow-0">
      <input type="checkbox" :checked="model" v-model="model" />
      <span class="slider" :class="{ round: !props.square, sliderOn: model }"></span>
    </label>
    <div class="ml-2 z-0 pt-1">
      <slot name="post"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<boolean>({ required: true, default: false });

type Props = {
  square?: boolean;
};
const props = withDefaults(defineProps<Props>(), {
  square: false,
});
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.sliderOn {
  @apply bg-blue-400;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
/*
input:checked + .slider {
  background-color: #2196f3; 
  @apply bg-blue-400;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3; 
  @apply bg-blue-400;
}
*/
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
