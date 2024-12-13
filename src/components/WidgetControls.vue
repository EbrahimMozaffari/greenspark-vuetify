<template>
  <v-row>
    <!-- Badge Activation -->
    <v-col>
      <v-switch
        v-model="isActive"
        :label="`Activate ${type}`"
        @change="toggleActive"
      />
    </v-col>

    <!-- Badge Colors -->
    <v-col>
      <v-btn
        v-for="color in colors"
        :key="color"
        :style="{ backgroundColor: color }"
        class="ma-1"
        @click="changeColor(color)"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const colors = ['blue', 'green', 'white', 'beige', 'black']; // Widget colors

defineProps({
  type: String, // Widget type
  isActive: Boolean, // Current active status
});

defineEmits(['toggle-active', 'change-color']); // Emits for parent communication

function toggleActive() {
  emit('toggle-active');
}

function changeColor(color: string) {
  emit('change-color', color);
}
</script>
