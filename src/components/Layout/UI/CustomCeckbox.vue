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
// Props دریافتی از والد
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

// Emits برای ارسال وضعیت به والد
//const emit = defineEmits(["update"]);
const emit = defineEmits<{
  (e: "update", data: { id: number; isChecked: boolean }): void;
}>();
// وضعیت داخلی چک‌باکس
import { ref, watch } from "vue";
const localChecked = ref(false);

// مقدار اولیه وضعیت تیک را ست می‌کند
localChecked.value = !!props.checked;

// واکنش به تغییر prop خارجی و آپدیت مقدار داخلی
watch(
  () => props.checked,
  (newVal) => {
    localChecked.value = newVal;
  }
);

// متد ارسال وضعیت به والد
const handleChange = () => {
  emit("update", { id: props.id, isChecked: localChecked.value });
};
</script>
