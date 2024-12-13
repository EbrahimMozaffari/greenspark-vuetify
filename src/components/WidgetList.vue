<template>
  <v-container class="px-3 px-md-0">
    <!-- Grid layout for widgets -->
    <v-row>
      <v-col
        v-for="(widget, index) in widgets"
        :key="widget.id"
        cols="12"
        md="4"
        :class="{
          'pr-md-6': index === 0,
          'pl-md-6': index === widgets.length - 1,
          'px-md-6': index !== 0 && index !== widgets.length - 1,
        }"
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
          <!-- text -->
          <v-col cols="10">
            <span class="font-medium leading-none text-green">
              Link to Public Profile
            </span>
            <v-icon size="14" class="ml-0 mt-n3" color="#3B755F"
              >mdi-information-outline</v-icon
            >
          </v-col>
          <!-- action -->
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

        <v-row class="align-center mt-n2" dense>
          <!-- text -->
          <v-col cols="6">
            <span class="font-medium leading-none text-green">
              Badge Colour
            </span>
          </v-col>
          <!-- action -->
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
        <v-row class="align-center mt-n2" dense>
          <!-- text -->
          <v-col cols="6" class="mt-n6">
            <span class="font-medium leading-none text-green">
              Activate badge
            </span>
          </v-col>

          <!-- action -->
          <v-col cols="6" class="d-flex justify-end">
            <v-switch
            inset
            thumb-color="red lighten-5"
            color="#3b755f"
            :model-value="widget.active"
            @change="() => toggleActiveWidget(widget)"
          ></v-switch>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import type { Widget } from "../stores/index";
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
  margin-left: 4px;
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
/* Style for toggle switch */
.switch {
  position: relative;
  display: inline-block;
  width: 46px;
  height: 23px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f9f9f9;
  outline: 1px solid rgba(175, 198, 189, 0.7);
  border-radius: 20px;
  transition: 0.4s;
}
/*
    border:solid 1px #AFC6BD;
      border:solid 1px #F2EBDB;
  
  */
.slider:before {
  position: absolute;
  content: "";
  height: 23px;
  width: 23px;
  left: -1px;
  bottom: 0px;
  background-color: white;
  outline: 1px solid rgba(242, 235, 219, 0.7);
  box-shadow: 1px 0px 0px 0px rgb(0 0 0 / 0.1);
  border-radius: 50%;
  transition: 0.4s;
}
.slider:hover::before {
  box-shadow: 0px 0px 1px 6px rgba(175, 198, 189, 0.5);
}
input:checked + .slider {
  background-color: #3b755f;
  outline: 1px solid #b0b0b0;
}

input:checked + .slider:before {
  outline: 1px solid #3b755f;
  transform: translateX(24px);
}
</style>
