<template>
  <!--
    개발 : 날짜 포멧 변경해야함
    2025. 02. 27. - 2025. 02. 27.  -> 2025.02.27 ~ 2025.02.27
  -->
  <div class="date-wrap">
    <v-date-input
      v-if="label"
      :model-value="modelValue"
      variant="outlined"
      :label="label"
      multiple="range"
      :width="width"
      @update:model-value="updateDate"
    />
    <v-date-input
      v-else
      :model-value="modelValue"
      variant="outlined"
      multiple="range"
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
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    default: '',
  },
   width: {
    type: [Number, String],
    default: '350',
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
