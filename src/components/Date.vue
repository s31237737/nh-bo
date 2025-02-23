<template>
  <div class="date-wrap">
    <v-date-input
      v-if="label"
      :model-value="modelValue"
      variant="outlined"
      :label="label"
      @update:model-value="updateDate"
    />
    <v-date-input
      v-else
      :model-value="modelValue"
      variant="outlined"
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
  label: {
    type: String,
    default: '',
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
