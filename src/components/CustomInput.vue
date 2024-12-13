<template>
    <v-checkbox
      :value="inputValue"
      v-model="isChecked"
      @change="handleChange"
      class="custom-checkbox"
      hide-details
      density="compact"
    >
      <!-- Styled Checkbox -->
      <template #input>
        <div
          class="rounded-[2px] border-2 flex items-center justify-center transition-colors"
          :class="isChecked ? 'bg-checkbox border-checkbox' : 'border-gray-400'"
          style="width: 18px; height: 18px"
        >
          <!-- Check Icon -->
          <v-icon
            v-if="isChecked"
            color="white"
            size="16"
          >
            mdi-check
          </v-icon>
        </div>
      </template>
    </v-checkbox>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  // Define a reactive variable for checkbox state
  const isChecked = ref(false);
  
  // Define Props
  defineProps({
    inputValue: String,
  });
  
  // Define Emits
  const emits = defineEmits(["checked"]);
  
  // Handle checkbox change
  const handleChange = (event: Event) => {
    emits("checked", event);
  };
  </script>
  
  <style scoped>
  /* Custom Colors */
  .bg-checkbox {
    background-color: #3b755f; /* Green background for checked state */
  }
  
  .border-checkbox {
    border-color: #3b755f; /* Green border for checked state */
  }
  
  .custom-checkbox {
    transition: 0.3s;
  }
  
  .custom-checkbox:hover {
    box-shadow: 0px 0px 1px 8px rgba(175, 198, 189, 0.5);
  }
  </style>
  