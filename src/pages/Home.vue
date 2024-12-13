<template>
  <v-container class="py-7">
    <v-card class="pa-7 ma-auto rounded-lg elevation-2 custom-background-color" max-width="900">
      <!-- Header -->
      <h1 class=" font-bold pb-3 mb-1 border-bottom">
        Per product widgets
      </h1>

      <!-- Widget List -->
      <WidgetList />
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import WidgetList from '../components/WidgetList.vue';
</script>

<style scoped>
/* Optional custom styling */
.custom-background-color{
  background: #f9f9f9;
}
.border-bottom {
  border-bottom: 2px solid #d1d5db;
}
</style>
