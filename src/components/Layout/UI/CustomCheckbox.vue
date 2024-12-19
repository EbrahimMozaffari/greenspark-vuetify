<template>
  <v-checkbox
    :label="label"
    v-model="localChecked"
    @change="handleChange"
    :color="color"
    :disabled="disabled"
    hide-details
  ></v-checkbox>
</template>

<script setup lang="ts">
// Props
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
  },
  color: {
    default: "primary",
    type: String,
  },

  disabled: {
    default: false,
    type: Boolean,
  },
});

// Emits

const emit = defineEmits<{
  (e: "update", data: { id: number; isChecked: boolean }): void;
}>();

import { ref, watch } from "vue";
const localChecked = ref(false);

localChecked.value = !!props.checked;

watch(
  () => props.checked,
  (newVal) => {
    localChecked.value = newVal;
  }
);

const handleChange = () => {
  emit("update", { id: props.id, isChecked: localChecked.value });
};
</script>
