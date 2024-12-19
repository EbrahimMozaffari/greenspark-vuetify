<template>
  <div
    v-for="color in ['blue', 'green', 'beige', 'white', 'black']"
    :key="color"
    class="color-box"
    :class="[{ selected: widgetSelectedColor === color }, `custom-bg-${color}`]"
    @click="emitUpdateWidgetColorById(id, color)"
  ></div>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: Number,
    required: true,
  },
  widgetSelectedColor: String,
});


const emit = defineEmits<{
  (e: "updateWidgetColorById", data: { id: number; color: string }): void;
}>();

const emitUpdateWidgetColorById = (id: number, color: string) => {
  emit("updateWidgetColorById", { id, color });
};
</script>

<style scoped>
.color-box {
    margin-left: 4px;
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: border-color 0.3s ease;
  }
  .color-box.selected {
    border-color: #b0b0b0;
  }
  .color-box:hover {
    opacity: 0.7;
  }
</style>
