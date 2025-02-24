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
            콘텐츠 유형
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
              <p>권장크기: 1240px x 140px</p>
              <p>용량 : 10MB 이하, 파일형식 JPG,PNG</p>
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
            <v-switch
              v-model="isSwitch"
              @change="snackbarOpen"
            />
          </td>
        </tr>
      </tbody>
    </v-table-row>
    <!-- 토스트 팝업 -->
    <v-snackbar
      v-model="snackbar"
      contained
      content-class="toast-pop"
    >
      <v-icon
        start
        size="24"
        icon="custom:alert"
      />
      {{ snackbarText }}
      <template #actions>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="snackbar = false"
        />
      </template>
    </v-snackbar>
    <!-- // 토스트 팝업 -->
  </div>
  <div class="page-actions">
    <v-btn
      color="secondary"
      size="large"
    >
      취소
    </v-btn>
    <!-- <v-btn
      color="tertiary"
      size="large"
      variant="outlined"
      prepend-icon="custom:edit"
    >
      수정
    </v-btn> -->
    <v-btn
      color="primary"
      size="large"
    >
      등록
    </v-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";

const snackbar = ref(false);
const snackbarText = ref(
  "콘텐츠는 1개까지 사용 가능합니다. 콘텐츠 사용 개수를 확인하고 다시 설정해 주세요."
);
const snackbarOpen = () => {
  snackbar.value = true;
  return;
};

const appIconList = ref([]); // 초기 이미지 목록
const updateAppIconList = (newImages) => {
  appIconList.value = newImages;
};


// 사용 상태
const isSwitch = ref(false);

const dateRange = ref(['2025.02.01', '2025.02.01']);
</script>
