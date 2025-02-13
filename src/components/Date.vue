<template>
  <v-menu
    v-model="display"
    :close-on-content-click="false"
  >
    <template #activator="{ props }">
      <div class="date-wrap">
        <v-text-field
          v-bind="props"
          :model-value="formatted"
          density="compact"
          variant="outlined"
          label="Date"
          readonly
        />
        <v-btn
          size="x-small"
          color="secondary"
          @click="setToday"
        >
          today
        </v-btn>
      </div>
    </template>
    <v-date-picker
      v-model="date"
      @update:model-value="display = false"
    >
      <template #header />
    </v-date-picker>
  </v-menu>
</template>

<script setup>
import { ref, computed } from 'vue';

const display = ref(false);
const date = ref(new Date());
const formatted = computed(() => {
  const year = date.value.getFullYear();
  const month = (date.value.getMonth() + 1).toString().padStart(2, '0');
  const day = date.value.getDate().toString().padStart(2, '0');
  return `${year}.${month}.${day}`;
});
// Today
const setToday = () => {
  date.value = new Date();
};

</script>
