<template>
  <v-menu
    v-model="menu"
    transition="scale-transition"
    offset-y
    :close-on-content-click="false"
  >
    <template #activator="{ props }">
      <v-text-field
        v-bind="props"
        :model-value="formatDate(dateInp, 'MM/DD/YYYY')?.toString()"
        prepend-inner-icon="custom:calendar"
        readonly
        placeholder="YYYY.MM.DD"
        width="300px"
      />
    </template>

    <v-date-picker
      :model-value="dateInp"
      @update:model-value="dateInp = $event"
    >
      <template #actions>
        <v-btn
          text
          color="primary"
          @click="cancelDatePicker"
        >
          Cancel
        </v-btn>
        <v-btn
          text
          :disabled="!dateInp"
          @click="menu= false"
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
const dateInp = ref(null);

// 날짜 포맷 함수 예시
const formatDate = (date, format) => {
  if (!date) return null;

  const d = new Date(date);

  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');

  return `${year}.${month}.${day}`;
};

const cancelDatePicker = () => {
  menu.value = false;  // 메뉴 닫기
  dateInp.value = null;  // 선택된 날짜 초기화
};

</script>
