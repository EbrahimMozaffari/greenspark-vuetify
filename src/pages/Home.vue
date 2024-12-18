<template>
  <v-container class="py-7 px-3">
    <v-card class="pa-7 ma-auto rounded-lg elevation-2 custom-background-color" max-width="900">
      <!-- Header -->
      <p class="font-weight-bold customfont pb-3 mb-1 border-bottom">
        Per product widgets
      </p>
      <!-- Widget List -->
      <WidgetList />
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WidgetList from '../components/WidgetList.vue';
const switch1 = ref(false);
</script>

<style scoped lang="scss">
/* Optional custom styling */
.custom-background-color{
  background: #f9f9f9;
}
.border-bottom {
  border-bottom: 2px solid #d1d5db;
}
.customfont{
  font-size: 30px;
}
</style>
