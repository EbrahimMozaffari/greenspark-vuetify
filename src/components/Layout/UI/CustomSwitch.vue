<template>
  <v-switch
    inset
    :color="color"
    :model-value="widgetActive"
    @change="()=>toggleActiveWidget(id)"
  ></v-switch>
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    type: Number,
    default: "",
  },
  color: {
    type: String,
    default: "primary",
  },
  widgetActive: Boolean,
});

const emit = defineEmits<{
  (e: "toggleActiveWidget", id: number): void;
}>();

const toggleActiveWidget = (id:number) => {
  emit("toggleActiveWidget", id);
};
</script>

<style scoped></style>
