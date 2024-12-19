<template>
  <!-- Section Header -->
  <WidgetCardHeader
    :selectedColor="widget.selectedColor"
    :action="widget.action"
    :amount="widget.amount"
    :type="widget.type"
  />

  <!-- Body Sections -->
  <v-row class="align-center" dense>
    <!-- text -->
    <v-col cols="10">
      <span class="font-medium leading-none text-green">
        Link to Public Profile
      </span>
      <Tooltip />
    </v-col>
    <!-- action -->
    <v-col cols="2" class="d-flex justify-end">
      <CustomCeckbox
        :id="widget.id"
        :checked="widget.linked"
        @update="emithandleLinkToProfile"
      />
    </v-col>
  </v-row>
  <v-row class="align-center mt-n2" dense>
    <!-- text -->
    <v-col cols="6">
      <span class="font-medium leading-none text-green"> Badge Colour </span>
    </v-col>
    <!-- action -->
    <v-col cols="6" class="d-flex justify-end">
      <CustomColorPicker
        :id="widget.id"
        :widgetSelectedColor="widget.selectedColor"
        @updateWidgetColorById="emitUpdateWidgetColorById"
      />
    </v-col>
  </v-row>

  <v-row class="align-center mt-n2" dense>
    <!-- text -->
    <v-col cols="6" class="mt-n6">
      <span class="font-medium leading-none text-green"> Activate badge </span>
    </v-col>

    <!-- action -->
    <v-col cols="6" class="d-flex justify-end">
      <CustomSwitch
        :id="widget.id"
        :widgetActive="widget.active"
        @toggleActiveWidget="emitToggleActiveWidget"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import type { Widget } from "../../stores/index";
import Tooltip from "./UI/Tooltip.vue";
import CustomCeckbox from "./UI/CustomCheckbox.vue";
import CustomColorPicker from "./UI/CustomColorPicker.vue";
import CustomSwitch from "./UI/CustomSwitch.vue";
import WidgetCardHeader from "./UI/WidgetCardHeader.vue";
// Define Props
defineProps<{
  widget: Widget;
}>();
// Define Emits

const emits = defineEmits<{
  (e: "handleLinkToProfile", data: { id: number; isChecked: boolean }): any;
  (e: "updateWidgetColorById", data: { id: number; color: string }): void;
  (e: "toggleActiveWidget", id: number): void;
}>();

// Handle checkbox change
const emithandleLinkToProfile = (data: { id: number; isChecked: boolean }) => {
  emits("handleLinkToProfile", data);
};
const emitUpdateWidgetColorById = (data: { id: number; color: string }) => {
  emits("updateWidgetColorById", data);
};
const emitToggleActiveWidget = (id: number) => {
  emits("toggleActiveWidget", id);
};
</script>

<style scoped></style>
