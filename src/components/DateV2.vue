<template>
  <v-menu
    v-model="menu"
    v-model:return-value="date"
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
    <v-date-picker
      v-model="date"
      hide-header
      scrollable
      show-adjacent-months
    >
      <template #actions>
        <v-btn
          text
          color="primary"
          @click="menu = false"
        >
          Cancel
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="$refs.menu.save(date)"
        >
          OK
        </v-btn>
      </template>
    </v-date-picker>
  </v-menu>
</template>

<script setup>
import { ref } from 'vue';
const menu = ref(false);
const date = ref();
</script>
