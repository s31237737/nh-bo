<template>
  <PageHeader title="콘텐츠 등록" prev-link="/DisplayDetails01" />
  <div class="page-contents">
    <!-- 콘텐츠 유형 : 앱추천 -->
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%">콘텐츠 유형 <i class="required" /></th>
          <td style="width: 90%" colspan="4">
            <v-select
              v-model="select"
              :items="['앱 추천']"
              style="width: 500px"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">콘텐츠 제목 <i class="required" /></th>
          <td style="width: 90%" colspan="4">
            <v-text-field
              placeholder="콘텐츠 제목을 입력해주세요."
              style="width: 500px"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">배너 제목 <i class="required" /></th>
          <td style="width: 90%" colspan="4">
            <v-text-field
              placeholder="배너 제목을 입력해주세요."
              style="width: 500px"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">간단 설명 <i class="required" /></th>
          <td colspan="4">
            <v-textarea
              placeholder="간단 설명을 입력해주세요."
              :counter="70"
              :persistent-counter="true"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%" rowspan="3">앱 정보 <i class="required" /></th>
          <th class="th-sub" style="width: 10%">앱 검색</th>
          <td style="width: 30%">
            <v-btn color="primary"> 앱 검색 </v-btn>
          </td>
          <th style="width: 10%" rowspan="3">앱 아이콘</th>
          <td rowspan="3" style="width: 40%">
            <ImageUploader :images="uploaderList" readonly />
            <div class="upload-guide">
              <p>100px X 100px</p>
            </div>
          </td>
        </tr>
        <tr>
          <th style="width: 10%">앱 이름</th>
          <td>육모대장</td>
        </tr>
        <tr>
          <th style="width: 10%">앱 타입</th>
          <td>대여</td>
        </tr>
        <tr>
          <th style="width: 10%">바로가기 링크</th>
          <td colspan="4">
            <v-text-field placeholder="앱 바로가기 링크를 입력해주세요." />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">노출 기간</th>
          <td colspan="4">
            <DateRange v-model="dateRange" style="width: 500px" />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">사용 상태</th>
          <td colspan="4">
            <v-switch v-model="isSwitch" />
          </td>
        </tr>
      </tbody>
    </v-table-row>
    <!-- 콘텐츠 유형 : 이미지 -->
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%">콘텐츠 유형 <i class="required" /></th>
          <td style="width: 90%">
            <v-select
              v-model="select2"
              :items="['이미지']"
              style="width: 500px"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">콘텐츠 제목</th>
          <td style="width: 90%">
            <v-text-field
              placeholder="콘텐츠 제목을 입력해주세요."
              style="width: 500px"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">배너 제목</th>
          <td style="width: 90%">
            <v-text-field
              placeholder="배너 제목을 입력해주세요."
              style="width: 500px"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">간단 설명</th>
          <td>
            <v-textarea
              placeholder="간단 설명을 입력해주세요."
              :counter="70"
              :persistent-counter="true"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">이미지 <i class="required" /></th>
          <td style="width: 90%">
            <ImageUploader
              :images="appIconList"
              @update:images="updateAppIconList"
            />
            <div class="upload-guide">
              <p>권장크기:930px x 258px</p>
              <p>용량: 10MB 이하, 파일형식 JPG, PNG</p>
            </div>
          </td>
        </tr>
        <tr>
          <th style="width: 10%">바로가기 링크</th>
          <td>
            <v-text-field placeholder="앱 바로가기 링크를 입력해주세요." />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">노출 기간 <i class="required" /></th>
          <td>
            <DateRange v-model="dateRange" style="width: 500px" />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">사용 상태</th>
          <td>
            <v-switch v-model="isSwitch" />
          </td>
        </tr>
      </tbody>
    </v-table-row>
  </div>
  <div class="page-actions">
    <v-btn color="secondary" size="large"> 취소 </v-btn>
    <v-btn color="primary" size="large" :to="'/DisplayRegistrationDetails01'">
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
