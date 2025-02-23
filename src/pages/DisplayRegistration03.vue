<template>
  <PageHeader
    title="콘텐츠 등록"
    prev-link="/DisplayDetails01"
  />
  <div class="page-contents">
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%">
            콘텐츠 유형 <i class="required" />
          </th>
          <td style="width: 90%">
            이미지
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            콘텐츠 제목 <i class="required" />
          </th>
          <td style="width: 90%">
            <v-text-field
              placeholder="콘텐츠 제목을 입력해주세요."
              style="width: 640px"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            배너 제목
          </th>
          <td style="width: 90%">
            <v-text-field
              placeholder="배너 제목을 입력해주세요."
              style="width: 640px"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            바로가기 링크
          </th>
          <td style="width: 80%">
            <v-text-field
              placeholder="앱 바로가기 링크를 입력해주세요."
              style="width: 640px"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            이미지 <i class="required" />
          </th>
          <td style="width: 90%">
            <ImageUploader
              :images="appIconList"
              @update:images="updateAppIconList"
            />
            <div class="upload-guide">
              <p>권장크기:1240px x 140px</p>
              <p>용량: 10MB 이하, 파일형식 JPG, PNG</p>
            </div>
          </td>
        </tr>

        <tr>
          <th style="width: 10%">
            노출 기간
          </th>
          <td
            style="width: 80%"
            colspan="2"
          >
            <DateRange
              v-model="dateRange"
              style="width: 640px"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            사용 상태
          </th>
          <td
            style="width: 80%"
            colspan="2"
          >
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
      :to="'/DisplayRegistrationDetails03'"
    >
      등록
    </v-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";

const snackbar = ref(false);
const snackbarText = ref(
  "코드 전송 오류로 인하여 등록이 불가합니다. 새로고침해주세요."
);
const snackbarOpen = () => {
  snackbar.value = true;
  return;
};

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
]);

// 사용 상태
const isSwitch = ref(false);

const select = ref("앱 추천");
const select2 = ref("이미지");

const dateRange = ref([]);
</script>
