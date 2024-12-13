<template>
  <v-container class="px-3 px-md-0">
    <!-- Grid layout for widgets -->
    <v-row dense>
      <v-col
        v-for="widget in widgets"
        :key="widget.id"
        cols="12"
        md="4"
        class="pa-2"
      >
        <!-- Section Header -->
        <div
          :class="`pa-2 mx-n1 mb-0 rounded-lg custom-bg-${widget.selectedColor}`"
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
              :class="
                widget.selectedColor !== 'white' &&
                widget.selectedColor !== 'beige'
                  ? 'text-white'
                  : 'text-green'
              "
            >
              <div class="text-xs">This product {{ widget.action }}</div>
              <div class="text-lg">{{ widget.amount }} {{ widget.type }}</div>
            </v-col>
          </v-row>
        </div>

        <!-- Body Sections -->
        <v-row class="align-center" dense>
          <!-- متن -->
          <v-col cols="10">
            <span class="font-medium leading-none text-green">
              Link to Public Profile
            </span>
            <v-icon size="14" class="ml-0 mt-n3" color="#3B755F"
              >mdi-information</v-icon
            >
          </v-col>

          <!-- چک‌باکس -->
          <v-col cols="2" class="d-flex justify-end">
            <v-checkbox
              class="mr-n2"
              color="#3B755F"
              @checked="handleLinkToProfile"
              :value="widget.id"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row class="align-center" dense>
          <!-- متن -->
          <v-col cols="6">
            <span class="font-medium leading-none text-green">
              Badge Colour
            </span>
          </v-col>

          <!-- چک‌باکس -->
          <v-col cols="6" class="d-flex justify-end">
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

        <v-row class="align-center" dense>
          <!-- متن -->
          <v-col cols="6">
            <span class="font-medium leading-none text-green">
              Activate badge
            </span>
          </v-col>

          <!-- چک‌باکس -->
          <v-col cols="6" class="d-flex justify-end">
            <v-switch
              dense
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
const widgets1 = [{ id: 1 }, { id: 2 }, { id: 3 }]; // نمونه‌ای از داده‌ها

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
