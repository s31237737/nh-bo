<template>
  <v-menu
    v-model="menu"
    transition="scale-transition"
    offset-y
    :close-on-content-click="false"
  >
    <template #activator="{ props }">
      <div class="date-wrap">
        <v-text-field
          v-bind="props"
          :model-value="formattedDate"
          :label="label"
          prepend-inner-icon="custom:calendar"
          readonly
          :placeholder="placeholder"
          :width="width"
        />
        <v-btn
          color="secondary"
          @click="setToday"
        >
          TODAY
        </v-btn>
      </div>
    </template>
    <v-date-picker
      :model-value="modelValue"
      multiple="range"
      :width="width"
      @update:model-value="updateDate"
    >
      <template #actions>
        <v-btn
          text
          color="primary"
          @click="cancelDatePicker"
        >
          취소
        </v-btn>
        <v-btn
          text
          :disabled="!modelValue || modelValue.length === 0"
          @click="menu = false"
        >
          선택 완료
        </v-btn>
      </template>
    </v-date-picker>
  </v-menu>
</template>

<script setup>
import { ref, defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [new Date(), new Date()],
  },
  label: {
    type: String,
    default: '',
  },
  width: {
    type: [Number, String],
    default: '350',
  },
  placeholder: {
    type: String,
    default: 'YYYY.MM.DD~YYYY.MM.DD', // 잘려서 ~ 여백을 없앴음
  },
});

const emit = defineEmits(['update:modelValue']);

const menu = ref(false);

// 날짜 포맷 함수
const formatDate = (date) => {
  if (!date) return null;
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');
  return `${year}.${month}.${day}`;
};

// computed로 포맷된 날짜를 계산 (범위 정렬 후 표시)
const formattedDate = computed(() => {
  if (!props.modelValue || props.modelValue.length === 0) return '';

  const sortedDates = [...props.modelValue].sort((a, b) => new Date(a) - new Date(b)); // 날짜 정렬
  const startDate = formatDate(sortedDates[0]);
  const endDate = formatDate(sortedDates[sortedDates.length - 1]);

  return `${startDate} ~ ${endDate}`;
});

// 날짜 업데이트 (정렬해서 저장)
const updateDate = (newDate) => {
  const sortedDates = [...newDate].sort((a, b) => new Date(a) - new Date(b));
  emit('update:modelValue', sortedDates);
};

// 오늘 날짜 설정 (오늘 하루 범위)
const setToday = () => {
  const today = new Date();
  const todayRange = [today, today]; // 동일한 날짜를 배열로 보관
  emit('update:modelValue', [...todayRange]); // Vue 반응성을 유지하기 위해 새로운 배열 생성
};

// 메뉴 닫기 (취소 버튼 클릭 시)
const cancelDatePicker = () => {
  menu.value = false;
  setToday();
};
</script>

