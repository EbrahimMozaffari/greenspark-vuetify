<template>
  <v-container class="px-3 px-md-0">
    <!-- Grid layout for widgets -->
    <v-row>
      <v-col
        v-for="(widget, index) in widgets"
        :key="widget.id"
        class="pb-0"
        cols="12"
        md="4"
        :class="{
          'pr-md-6': index === 0,
          'pl-md-6': index === widgets.length - 1,
          'px-md-6': index !== 0 && index !== widgets.length - 1,
        }"
      >
        <WidgetComponent
          :widget="widget"
          @handleLinkToProfile="LinkToProfileStore"
          @updateWidgetColorById="updateWidgetColorByIdStore"
          @toggleActiveWidget="toggleActiveWidget"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import store from "../stores/index";
import WidgetComponent from "./Layout/WidgetComponent.vue";

// Fetch widgets from the store when the component is mounted
onMounted(async () => {
  await store.dispatch("fetchWidgets");
});

// Computed property to get widgets from the Vuex store
const widgets = computed(() => {
  return store.getters["getWidgets"];
});

// Update the color of a specific widget
function updateWidgetColorByIdStore(data: { id: number; color: string }) {
  store.dispatch("updateWidgetColor", data);
}

// Toggle the active state of a widget, ensuring only one widget is active
const toggleActiveWidget = (selectedWidgetId: Number) => {
  store.dispatch("toggleActiveWidget", selectedWidgetId);
};

function LinkToProfileStore(data: { id: number; isChecked: boolean }) {
  store.dispatch("updateWidgetLink", data);
}
</script>
