<template>
  <div class="date-wrap">
    <v-date-input
      :model-value="modelValue"
      variant="outlined"
      label="기간"
      multiple="range"
      @update:model-value="updateDate"
    />
    <v-btn
      color="secondary"
      @click="setToday"
    >
      today
    </v-btn>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(['update:modelValue']);

const updateDate = (newDate) => {
  emit('update:modelValue', newDate);
};

const setToday = () => {
  const today = new Date();
  emit('update:modelValue', [today, today]);
};
</script>
