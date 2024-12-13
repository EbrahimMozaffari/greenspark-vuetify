<template>
  <v-app class="customBg">
    <v-container
      class="d-flex align-center justify-center pa-5"
      style="height: 100vh;"
    >
      <!-- Main Content -->
      <v-main class="flex-grow-1">
        <slot />
      </v-main>
    </v-container>
  </v-app>
</template>

<script setup lang="ts"></script>

<style scoped>
    .customBg{
        background-color: #f9f9f9
    }
</style>
