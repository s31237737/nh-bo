<template>
  <v-menu
    v-model="menu"
    location="center"
  >
    <template #activator="{ props }">
      <v-text-field
        v-model="date"
        prepend-inner-icon="mdi-calendar"
        readonly
        v-bind="props"
      />
    </template>
    <div class="position-relative">
      <v-date-picker
        v-model="date"
        height="auto"
        show-adjacent-months
      />
      <v-btn
        class="position-absolute top-0 right-0"
        color="white"
        icon="mdi-close"
        size="small"
        variant="text"
        @click="menu = false"
      />
    </div>
  </v-menu>
</template>

<script setup>
import { ref } from 'vue';
const menu = ref(false);
const date = ref();
</script>
