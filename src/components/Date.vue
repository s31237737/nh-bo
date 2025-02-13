<template>
  <v-menu>
    <template #activator="{ props }">
      <v-row>
        <v-col>
          <v-text-field
            v-bind="props"
            v-model="date"
            density="compact"
            variant="outlined"
            label="Date"
            readonly
          />
        </v-col>
        <v-col>
          <v-btn size="x-small" color="secondary" @click="setToday">
            today
          </v-btn>
        </v-col>
      </v-row>
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
import { ref } from 'vue';

// `date`를 Date 객체로 초기화
const date = ref(new Date());

// 오늘 날짜로 설정하는 함수
const setToday = () => {
  date.value = new Date(); // 오늘 날짜로 업데이트
};
</script>
