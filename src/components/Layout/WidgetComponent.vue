<template>
  <!-- Section Header -->
  <div :class="`pa-2 mx-n1 mb-0 rounded-lg custom-bg-${widget.selectedColor}`">
    <v-row dense>
      <v-col cols="3"  md="3"  sm="1" class="d-flex align-start">
        <customIcon
          :color="
            widget.selectedColor !== 'white' && widget.selectedColor !== 'beige'
              ? ''
              : '#3B755F'
          "
        />
      </v-col>
      <v-col
        cols="9"
        :class="
          widget.selectedColor !== 'white' && widget.selectedColor !== 'beige'
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
</template>

<script setup lang="ts">
import type { Widget } from "../../stores/index";
import Tooltip from "./UI/Tooltip.vue";
import CustomCeckbox from "./UI/CustomCeckbox.vue";
// Define Props
 defineProps<{
  widget: Widget;
}>();
// Define Emits

const emits = defineEmits<{
  (
    e: "update-status",
    id: number,
    status: "pending" | "in-progress" | "completed"
  ): void;
  (e: "handleLinkToProfile", data: { id: number; isChecked: boolean }): any;
  (e: "delete-task", id: number): void;
}>();

// Handle checkbox change
const emithandleLinkToProfile = (data: { id: number; isChecked: boolean }) => {
  emits("handleLinkToProfile", data);
};
</script>

<style scoped></style>
