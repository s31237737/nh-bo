<template>
  <PageHeader
    title="콘텐츠 상세"
    prev-link="Display02"
  />

  <div class="page-contents">
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%">
            콘텐츠 유형
          </th>
          <td
            colspan="2"
          >
            앱 추천
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            콘텐츠 제목
          </th>
          <td
            colspan="2"
          >
            육묘대장
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            배너 제목
          </th>
          <td
            colspan="2"
          >
            육묘대장
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            간단 설명
          </th>
          <td
            colspan="2"
          >
            간편하고 편리한 '육묘대장'으로 손쉽게 관리하실 수 있습니다.
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            이미지
          </th>
          <td
            colspan="2"
          >
            <ImageUploader
              class="type02"
              :images="uploaderList"
              readonly
            />
            <div class="upload-guide">
              <p>530px X 330px</p>
            </div>
          </td>
        </tr>
        <tr>
          <th
            style="width: 10%"
            rowspan="2"
          >
            앱 정보
          </th>
          <th
            style="width: 10%"
            class="th-sub"
          >
            앱 이름
          </th>
          <td style="width: 80%">
            육묘대장
          </td>
        </tr>
        <tr>
          <th
            style="width: 10%"
            class="th-sub"
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
            colspan="2"
          >
            <a
              href="https://nonghyup.com"
              target="_blank"
            >https://nonghyup.com</a>
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            노출 기간
          </th>
          <td
            colspan="2"
          >
            2025.01.21 ~ 2025.01.30
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            사용 상태
          </th>
          <td
            colspan="2"
          >
            미사용
          </td>
        </tr>
      </tbody>
    </v-table-row>
  </div>
  <div class="page-actions">
    <v-spacer />
    <v-btn
      size="large"
      color="warning"
      variant="outlined"
      prepend-icon="custom:remove"
    >
      삭제
    </v-btn>
    <v-btn
      color="tertiary"
      size="large"
      variant="outlined"
      prepend-icon="custom:edit"
      to="DisplayRegistration02"
    >
      수정
    </v-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";

const uploaderList = ref([
  "https://cdn.pixabay.com/photo/2025/01/08/14/52/beach-9319305_1280.jpg",
]);
</script>
