<template>
  <PageHeader
    title="콘텐츠 등록"
    prev-link="Display01"
  />
  <div class="page-contents">
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%">
            콘텐츠 유형 <i class="required" />
          </th>
          <td

            colspan="4"
          >
            <v-select
              v-model="selectedType"
              :items="['앱 추천','이미지']"
              style="width: 640px"
            />
          </td>
        </tr>
        <template v-if="selectedType === '앱 추천'">
          <tr>
            <th style="width: 10%">
              콘텐츠 제목 <i class="required" />
            </th>
            <td
              colspan="4"
            >
              <v-text-field
                placeholder="콘텐츠 제목을 입력해주세요."
                style="width: 640px"
              />
            </td>
          </tr>
          <tr>
            <th style="width: 10%">
              배너 제목 <i class="required" />
            </th>
            <td
              colspan="4"
            >
              <v-text-field
                placeholder="배너 제목을 입력해주세요."
                style="width: 640px"
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
                :counter="30"
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
            <td style="width: 35%">
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
              style="width: 35%"
            >
              <ImageUploader
                :images="uploaderList"
                readonly
              />
              <div class="upload-guide">
                <p>200px X 200px</p>
              </div>
            </td>
          </tr>
          <tr>
            <th
              class="th-sub"
              style="width: 10%"
            >
              앱 이름
            </th>
            <td>육묘대장</td>
          </tr>
          <tr>
            <th
              class="th-sub"
              style="width: 10%"
            >
              앱 타입
            </th>
            <td>대여</td>
          </tr>
          <tr>
            <th style="width: 10%">
              바로가기 링크
            </th>
            <td colspan="4">
              <v-text-field
                placeholder="바로가기 링크를 입력해주세요."
                style="width: 640px"
              />
            </td>
          </tr>
          <tr>
            <th style="width: 10%">
              노출 기간 <i class="required" />
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
              <v-switch
                v-model="isSwitch01"
                @change="snackbarOpen"
              />
            </td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <th style="width: 10%">
              콘텐츠 제목
            </th>
            <td colspan="4">
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
            <td colspan="4">
              <v-text-field
                placeholder="배너 제목을 입력해주세요."
                style="width: 640px"
              />
            </td>
          </tr>
          <tr>
            <th style="width: 10%">
              간단 설명
            </th>
            <td colspan="4">
              <v-textarea
                placeholder="간단 설명을 입력해주세요."
                :counter="30"
                :persistent-counter="true"
              />
            </td>
          </tr>
          <tr>
            <th style="width: 10%">
              이미지 <i class="required" />
            </th>
            <td colspan="4">
              <ImageUploader
                :images="appIconList"
                @update:images="updateAppIconList"
              />
              <div class="upload-guide">
                <p>권장크기: 930px x 258px</p>
                <p>용량 : 10MB 이하, 파일형식 JPG,PNG</p>
              </div>
            </td>
          </tr>
          <tr>
            <th style="width: 10%">
              바로가기 링크
            </th>
            <td colspan="4">
              <v-text-field
                placeholder="바로가기 링크를 입력해주세요."
                style="width: 640px"
              />
            </td>
          </tr>
          <tr>
            <th style="width: 10%">
              노출 기간 <i class="required" />
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
              <v-switch
                v-model="isSwitch02"
                @change="snackbarOpen"
              />
            </td>
          </tr>
        </template>
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
  "콘텐츠는 5개까지 사용 가능합니다. 콘텐츠 사용 개수를 확인하고 다시 설정해 주세요."
);
const snackbarOpen = () => {
  snackbar.value = true;
  return;
};

const appIconList = ref([]); // 초기 이미지 목록
const updateAppIconList = (newImages) => {
  appIconList.value = newImages;
};

const uploaderList = ref([
  "https://cdn.pixabay.com/photo/2025/01/08/14/52/beach-9319305_1280.jpg",
]);

// 사용 상태
const isSwitch01 = ref(false);
const isSwitch02 = ref(false);

const selectedType = ref("앱 추천");

const dateRange = ref([new Date(), new Date()]);
</script>
