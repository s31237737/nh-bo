<template>
  <div class="date-wrap">
    <v-date-input
      :model-value="modelValue"
      variant="outlined"
      label="기간"
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
defineProps({
  modelValue: {
    type: Date,
    default: () => new Date(),
  },
});

const emit = defineEmits(['update:modelValue']);

const updateDate = (newDate) => {
  emit('update:modelValue', newDate);
};

const setToday = () => {
  const today = new Date();
  emit('update:modelValue', today);
};
</script>
