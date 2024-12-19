<template>
  <div :class="`pa-2 mx-n1 mb-0 rounded-lg custom-bg-${selectedColor}`">
    <v-row dense>
      <v-col cols="3" md="3" sm="1" class="d-flex align-start">
        <customIcon
          :color="
            selectedColor !== 'white' && selectedColor !== 'beige'
              ? ''
              : '#3B755F'
          "
        />
      </v-col>
      <v-col
        cols="9"
        :class="
          selectedColor !== 'white' && selectedColor !== 'beige'
            ? 'text-white'
            : 'text-green'
        "
      >
        <div class="text-xs">This product {{ action }}</div>
        <div class="text-lg">{{ amount }} {{ type }}</div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import customIcon from '../../icons/customIcon.vue';
const props = defineProps({
  selectedColor: String,
  action: String,
  amount: Number,
  type: String,
});
</script>
