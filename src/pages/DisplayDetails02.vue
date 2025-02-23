<template>
  <PageHeader
    title="콘텐츠 등록"
    prev-link="/Display"
  />
  <div class="page-contents">
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%">
            콘텐츠 유형 <i class="required" />
          </th>
          <td
            style="width: 90%"
            colspan="4"
          >
            <v-select
              v-model="select"
              :items="['앱 추천']"
              style="width: 500px"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            콘텐츠 제목<i class="required" />
          </th>
          <td
            style="width: 90%"
            colspan="4"
          >
            <v-text-field
              placeholder="콘텐츠 제목을 입력해주세요."
              style="width: 500px"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            배너 제목<i class="required" />
          </th>
          <td
            style="width: 90%"
            colspan="4"
          >
            <v-text-field
              placeholder="배너 제목을 입력해주세요."
              style="width: 500px"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            간단 설명 <i class="required" />
          </th>
          <td colspan="4">
            <v-textarea
              placeholder="간단 설명을 입력해주세요."
              :counter="70"
              :persistent-counter="true"
            />
          </td>
        </tr>
        <tr>
          <th
            style="width: 10%"
            rowspan="3"
          >
            앱 정보 <i class="required" />
          </th>
          <th
            class="th-sub"
            style="width: 10%"
          >
            앱 검색
          </th>
          <td style="width: 30%">
            <v-btn color="primary">
              앱 검색
            </v-btn>
          </td>
          <th
            style="width: 10%"
            rowspan="3"
          >
            앱 아이콘
          </th>
          <td
            rowspan="3"
            style="width: 40%"
          >
            <ImageUploader
              :images="appIconList"
              @update:images="updateAppIconList"
            />
            <div class="upload-guide">
              <p>100px X 100px</p>
            </div>
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            앱 이름 <i class="required" />
          </th>
          <td>육모대장</td>
        </tr>
        <tr>
          <th style="width: 10%">
            앱 타입 <i class="required" />
          </th>
          <td>대여</td>
        </tr>
        <tr>
          <th style="width: 10%">
            바로가기 링크 <i class="required" />
          </th>
          <td colspan="4">
            <v-text-field placeholder="앱 바로가기 링크를 입력해주세요." />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            노출 기간
          </th>
          <td colspan="4">
            <DateRange v-model="dateRange" />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            사용 상태
          </th>
          <td colspan="4">
            <v-switch v-model="isSwitch" />
          </td>
        </tr>
      </tbody>
    </v-table-row>
  </div>
  <div class="page-actions">
    <v-btn
      color="secondary"
      size="large"
    >
      취소
    </v-btn>
    <v-btn
      color="primary"
      size="large"
      disabled
      @click="snackbarOpen"
    >
      등록
    </v-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";

const appIconList = ref([]); // 초기 이미지 목록
const updateAppIconList = (newImages) => {
  appIconList.value = newImages;
};
const mainImgList = ref([]); // 초기 이미지 목록
const updateMainImgList = (newImages) => {
  mainImgList.value = newImages;
};

const updateImages = (newImages) => {
  uploaderList.value = newImages;
};
const uploaderList = ref([
  "https://cdn.pixabay.com/photo/2025/01/08/14/52/beach-9319305_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/08/26/23/38/maranhao-sheets-9000410_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/01/08/14/52/beach-9319305_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/08/26/23/38/maranhao-sheets-9000410_1280.jpg",
]);

// 사용 상태
const isSwitch = ref(false);

const select = ref("대여");
const select2 = ref("1.1.1");
const select2Items = ["1.1.1", "1.2.0", "2.0.0"];

const dateRange =ref([]);
</script>
