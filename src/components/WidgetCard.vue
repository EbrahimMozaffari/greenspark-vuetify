<template>
    <v-card :color="color" class="pa-3 mb-4">
      <v-row>
        <v-col cols="2">
          <v-icon size="36px" color="white">mdi-leaf</v-icon>
        </v-col>
        <v-col>
          <div class="text-h6 text-white">{{ type }}</div>
          <div class="text-caption text-white">{{ action }}</div>
          <div class="text-subtitle-1 text-white">{{ amount }}</div>
        </v-col>
      </v-row>
    </v-card>
  </template>
  
  <script setup lang="ts">
  defineProps({
    type: String, // Widget type
    action: String, // Widget action
    amount: Number, // Widget amount
    color: String, // Card background color
  });
  </script>
  