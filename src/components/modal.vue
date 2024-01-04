<template>
  <!-- Trigger/Open The Modal -->
  <button id="myBtn" @click="openModal"><slot>Open Modal</slot></button>

  <!-- The Modal -->
  <div
    ref="myModal"
    class="modal flex place-content-center pt-40 px-2"
    @click="closeModal"
    :class="[showModal ? 'block' : 'hidden']"
  >
    <div class="container bg-white rounded-2xl h-40 relative" @click="showModal = false">
      <span class="close absolute -mt-2 right-0">&times;</span>
      <slot>
        <p>Some text in the Modal..</p>
      </slot>
      <slot name="footer">
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface Props {
  clickAnywhere?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  clickAnywhere: true,
});

const myModal = ref(null);
const showModal = ref(false);
const openModal = () => {
  showModal.value = true;
};
const closeModal = () => {
  if (props.clickAnywhere) {
    showModal.value = false;
  }
};
</script>

<style scoped>
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  /* padding-top: 100px; Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* The Close Button */
.close {
  color: #aaaaaa;
  top: 0;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
