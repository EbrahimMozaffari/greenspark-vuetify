<template>
  <v-container class="px-5 md:px-0">
    <!-- Grid layout for widgets -->
    <v-row dense>
      <v-col
        v-for="widget in widgets"
        :key="widget.id"
        cols="12"
        md="4"
        class="pa-5" 
      >
        <!-- Section Header -->
        <v-container
          :class="`pa-3 mb-7 rounded-lg custom-bg-${widget.selectedColor}`"
        >
          <v-row dense>
            <v-col cols="3" class="d-flex align-start">
              <customIcon
                :color="
                  widget.selectedColor !== 'white' &&
                  widget.selectedColor !== 'beige'
                    ? ''
                    : '#3B755F'
                "
              />
            </v-col>
            <v-col
              cols="9"
              :class="widget.selectedColor !== 'white' &&
              widget.selectedColor !== 'beige'
                ? 'text-white'
                : 'text-green'"
            >
              <div class="text-xs">This product {{ widget.action }}</div>
              <div class="text-lg">{{ widget.amount }} {{ widget.type }}</div>
            </v-col>
          </v-row>
        </v-container>

        <!-- Body Sections -->
        <v-row dense>
          <v-col cols="9">
            <v-row class="">
              <span class="ont-medium leading-none text-green">
                Link to Public Profile
              </span>
              <v-icon size="14" class="ml-1" color="#3B755F">mdi-information</v-icon>
            </v-row>
          </v-col>
          <v-col cols="3" class="">
            <v-checkbox
            color="#3B755F"
             @checked="handleLinkToProfile"
            :value="widget.id"
            hide-details
          ></v-checkbox>
            <!-- <CustomInput
              :input-value="widget.id"
              @checked="handleLinkToProfile"
            /> -->
          </v-col>
        </v-row>

        <v-row dense class=" align-center pa-0">
          <v-col cols="6" class="font-medium text-green">
            Badge Colour
          </v-col>
          <v-col cols="6" class="d-flex justify-end ">
            <div
              v-for="color in ['blue', 'green', 'beige', 'white', 'black']"
              :key="color"
              :style="{ backgroundColor: color }"
              class="color-box"
              :class="{ selected: widget.selectedColor === color }"
              @click="updateWidgetColorById(widget.id, color)"
            ></div>
          </v-col>
        </v-row>

        <v-row dense class="align-center">
          <v-col cols="9" class="text-[14px] font-medium text-green">
            Activate badge
          </v-col>
          <v-col cols="3" class="d-flex justify-end">
            <v-switch
              v-model="widget.active"
              @change="() => toggleActiveWidget(widget)"
            ></v-switch>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const widgets1 = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
]; // نمونه‌ای از داده‌ها

import { onMounted, computed } from "vue";
import { Widget } from "../stores/index";
import store from "../stores/index";
import CustomInput from "./CustomInput.vue";
import customIcon from "./icons/customIcon.vue";

// Fetch widgets from the store when the component is mounted
onMounted(async () => {
  await store.dispatch("fetchWidgets");
});

// Computed property to get widgets from the Vuex store
const widgets = computed(() => {
  return store.getters["getWidgets"];
});

// Update the color of a specific widget
function updateWidgetColorById(id: number, color: string) {
  store.dispatch("updateWidgetColor", { id, color });
}

// Toggle the active state of a widget, ensuring only one widget is active
function toggleActiveWidget(selectedWidget: Widget) {
  store.dispatch("toggleActiveWidget", selectedWidget.id);
}

// Handle linking to the profile
function handleLinkToProfile(event: Event) {
  const target = event.target as HTMLInputElement;
  const isChecked = target.checked; // Check if the checkbox is checked
  const widgetId = target.value; // Get the widget ID

  store.dispatch("updateWidgetLink", { id: widgetId, isChecked });
}
</script>

<style scoped>
.color-box {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: border-color 0.3s ease;
}
.color-box.selected {
  border-color: #b0b0b0;
}
.color-box:hover {
  opacity: 0.7;
}
</style>
