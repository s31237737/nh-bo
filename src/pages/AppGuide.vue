<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      item-value="id"
      class="elevation-1"
      hide-default-footer
    >
      <!-- 순서 변경 버튼 -->
      <template #item.move="{ item, index }">
        <v-btn
          icon
          size="small"
          @click="moveUp(index)"
          :disabled="index === 0"
        >
          ▲
        </v-btn>
        <v-btn
          icon
          size="small"
          @click="moveDown(index)"
          :disabled="index === items.length - 1"
        >
          ▼
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

// 데이터 목록 (초기값)
const items = ref([
  { id: 1, name: "이미지 1", type: "앱 추천", status: "사용", period: "2015.01.15 ~ 2015.01.15" },
  { id: 2, name: "앱 추천1", type: "이미지", status: "사용", period: "2015.01.15 ~ 2015.01.15" },
  { id: 3, name: "앱 추천2", type: "이미지", status: "사용", period: "2015.01.15 ~ 2015.01.15" },
  { id: 4, name: "앱 추천3", type: "이미지", status: "사용", period: "2015.01.15 ~ 2015.01.15" },
  { id: 5, name: "앱 추천4", type: "이미지", status: "사용", period: "2015.01.15 ~ 2015.01.15" },
]);

// 테이블 헤더 정의
const headers = [
  { title: "순서", key: "id", sortable: false },
  { title: "콘텐츠명", key: "name" },
  { title: "콘텐츠 유형", key: "type" },
  { title: "상태", key: "status" },
  { title: "노출 기간", key: "period" },
  { title: "노출 순서", key: "move", sortable: false },
];

// 순서 위로 이동
const moveUp = (index) => {
  if (index > 0) {
    const temp = items.value[index];
    items.value.splice(index, 1);
    items.value.splice(index - 1, 0, temp);
  }
};

// 순서 아래로 이동
const moveDown = (index) => {
  if (index < items.value.length - 1) {
    const temp = items.value[index];
    items.value.splice(index, 1);
    items.value.splice(index + 1, 0, temp);
  }
};
</script>

