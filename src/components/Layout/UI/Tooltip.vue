<template>
  <v-menu
    v-model="keepOpen"
    :close-on-content-click="false"
    open-on-hover
    open-on-click
    :close-delay="300"
    bottom
    offset-y
    transition="fade-transition"
  >
    <template v-slot:activator="{ props }">
      <v-icon v-bind="props" size="14" class="ml-0 mt-n3" color="#3B755F"
        >mdi-information-outline</v-icon
      >
    </template>
    <div
      @mouseover="keepOpen = true"
      @mouseleave="keepOpen = false"
      class="tooltip-content pa-4"
    >
      <p class="mb-2 text-caption">
        This widget links directly to your public profile so that you can easily
        share your impact with your customers. Turn it off here if you do not
        want the badge to link to it.
      </p>
      <router-link
        to=""
        class="text-body-3 font-weight-bold text-decoration-none text-primary"
      >
        View Public Profile</router-link
      >
    </div>
  </v-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const keepOpen = ref(false);
</script>

<style scoped>
.tooltip-content {
  padding: 8px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 248px;
  text-align: center;
}
</style>
