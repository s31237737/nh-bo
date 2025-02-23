<template>
  <PageHeader
    title="콘텐츠 등록"
    prev-link="/DisplayDetails01"
  />
  <div class="page-contents">
    <!-- 콘텐츠 유형 : 앱추천 -->
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%">
            콘텐츠 유형 <i class="required" />
          </th>
          <td
            style="width: 90%"
            colspan="2"
          >
            <v-select
              v-model="select"
              :items="['앱 추천']"
              style="width: 640px"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            콘텐츠 제목 <i class="required" />
          </th>
          <td
            style="width: 90%"
            colspan="2"
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
            style="width: 90%"
            colspan="2"
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
          <td
            style="width: 90%"
            colspan="2"
          >
            <v-textarea
              placeholder="간단 설명을 입력해주세요."
              :counter="70"
              :persistent-counter="true"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            이미지 <i class="required" />
          </th>
          <td
            style="width: 90%"
            colspan="2"
          >
            <ImageUploader
              :images="appIconList"
              @update:images="updateAppIconList"
            />
            <div class="upload-guide">
              <p>권장크기: 530px x 330px</p>
              <p>용량 : 10MB 이하, 파일형식 JPG,PNG</p>
            </div>
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
          <td style="width: 80%">
            <v-btn color="primary">
              앱 검색
            </v-btn>
          </td>
        </tr>
        <tr>
          <th
            class="th-sub"
            style="width: 10%"
          >
            앱 이름
          </th>
          <td style="width: 80%">
            육모대장
          </td>
        </tr>
        <tr>
          <th
            class="th-sub"
            style="width: 10%"
          >
            앱 타입
          </th>
          <td style="width: 80%">
            대여
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            바로가기 링크
          </th>
          <td
            style="width: 80%"
            colspan="2"
          >
            <v-text-field
              placeholder="앱 바로가기 링크를 입력해주세요."
              style="width: 640px"
            />
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
    <!-- 콘텐츠 유형 : 이미지 -->
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%">
            콘텐츠 유형 <i class="required" />
          </th>
          <td style="width: 90%">
            <v-select
              v-model="select2"
              :items="['이미지']"
              style="width: 640px"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            콘텐츠 제목
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
            간단 설명
          </th>
          <td>
            <v-textarea
              placeholder="간단 설명을 입력해주세요."
              :counter="100"
              :persistent-counter="true"
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
              <p>권장크기: 1920px x 548px</p>
              <p>용량 : 10MB 이하, 파일형식 JPG,PNG</p>
            </div>
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            바로가기 링크
          </th>
          <td style="width: 90%">
            <v-text-field
              placeholder="앱 바로가기 링크를 입력해주세요."
              style="width: 640px"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            노출 기간 <i class="required" />
          </th>
          <td style="width: 90%">
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
          <td style="width: 90%">
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


// 사용 상태
const isSwitch = ref(false);

const select = ref("앱 추천");
const select2 = ref("이미지");

const dateRange = ref([]);
</script>
