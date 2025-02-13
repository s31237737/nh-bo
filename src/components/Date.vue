<template>
  <v-menu>
    <template #activator="{ props }">
      <div class="date-wrap">
        <v-text-field
          v-bind="props"
          v-model="date"
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
      hide-actions
    >
      <template #header />
    </v-date-picker>
  </v-menu>
</template>

<script setup>
import { ref, computed } from 'vue';

const menu = ref(false);
const date = ref(new Date());

// 오늘 날짜로 설정하는 함수
const setToday = () => {
  date.value = new Date(); // 오늘 날짜로 업데이트
};

</script>
