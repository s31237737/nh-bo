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
      :width="width"
      multiple="range"
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
          :disabled="modelValue.length < 2"
          @click="saveAndClose"
        >
          선택완료
        </v-btn>
      </template>
    </v-date-picker>
  </v-menu>
</template>

<script setup>
import { defineProps, defineEmits, computed, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    default: "",
  },
  width: {
    type: [Number, String],
    default: "340",
  },
  placeholder: {
    type: String,
    default: "YYYY.MM.DD ~ YYYY.MM.DD",
  },
});

const emit = defineEmits(["update:modelValue"]);
const menu = ref(false);

// 🔥 날짜 포맷 함수 (날짜 배열을 받아 포맷 변경)
const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  if (isNaN(d.getTime())) return ""; // ✅ Invalid Date 방지
  return `${d.getFullYear()}.${(d.getMonth() + 1).toString().padStart(2, "0")}.${d.getDate().toString().padStart(2, "0")}`;
};

// 🔥 **입력 필드에는 첫 날짜와 마지막 날짜만 표시**
const formattedDate = computed(() => {
  if (props.modelValue.length < 2) return "";
  const startDate = formatDate(props.modelValue[0]);
  const endDate = formatDate(props.modelValue[props.modelValue.length - 1]);
  return `${startDate} ~ ${endDate}`;
});

// 🔥 날짜 선택 시 전체 범위를 업데이트
const updateDate = (newDates) => {
  if (newDates.length < 2) return;

  const startDate = new Date(newDates[0]);
  const endDate = new Date(newDates[newDates.length - 1]);
  const dateRange = [];

  for (
    let d = new Date(startDate);
    d <= endDate;
    d.setDate(d.getDate() + 1)
  ) {
    dateRange.push(new Date(d));
  }

  emit("update:modelValue", dateRange); // ✅ 선택한 전체 날짜를 업데이트
};

// 🔥 오늘 날짜 설정
const setToday = () => {
  const today = new Date();
  emit("update:modelValue", [today, today]);
};

// 🔥 선택 취소
const cancelDatePicker = () => {
  menu.value = false;
  emit("update:modelValue", []);
};

// 🔥 선택 완료
const saveAndClose = () => {
  menu.value = false;
};
</script>
