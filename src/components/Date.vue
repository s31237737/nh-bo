<template>
  <div class="date-wrap">
    <v-date-input
      v-if="label"
      :model-value="modelValue"
      variant="outlined"
      :label="label"
      :width="width"
      @update:model-value="updateDate"
    />
    <v-date-input
      v-else
      :model-value="modelValue"
      variant="outlined"
      :width="width"
      @update:model-value="updateDate"
    />
    <v-btn
      color="secondary"
      @click="setToday"
    >
      TODAY
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
  width: {
    type: [Number, String],
    default: '300',
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
