<template>
  <PageHeader
    title="앱 가이드 상세 "
    prev-link="AppGuide"
  />
  <div class="page-contents">
    <!-- 앱 정보 -->
    <div class="tit-wrap">
      <strong class="title-2">
        앱 정보
      </strong>
    </div>
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%;">
            제목
          </th>
          <td style="width: 40%;">
            육묘대장 앱 가이드
          </td>
          <th style="width: 10%;">
            등록자
          </th>
          <td style="width: 40%;">
            김농협(05300300)
          </td>
        </tr>
        <tr>
          <th>
            앱
          </th>
          <td>
            육묘대장
          </td>
          <th>
            공개 여부
          </th>
          <td>
            공개
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            사용가이드<br>첨부파일
          </th>
          <td colspan="7">
            <ul
              class="file-list"
            >
              <li
                v-for="(file, index) in files"
                :key="index"
              >
                <v-icon icon="custom:file" />
                <span>{{ file.name }}</span>
                <em>{{ file.size }}</em>
                <v-btn
                  class="icon-md"
                  icon="custom:download"
                  @click="downloadFile(file)"
                />
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <th
            style="width: 10%;"
            rowspan="2"
          >
            영상
          </th>
          <td colspan="3">
            <p class="d-flex ga-2">
              유튜브 영상 링크
              <a
                href="https://nonghyup.com"
                target="_blank"
              >
                https://youtube.com+id값
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <p class="d-flex ga-2">
              썸네일 링크
              <a
                href="https://nonghyup.com"
                target="_blank"
              >
                https://youtube.com+id값
              </a>
            </p>
          </td>
        </tr>
      </tbody>
    </v-table-row>
  </div>
  <div class="page-actions">
    <v-spacer />
    <v-btn
      color="warning"
      size="large"
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
    >
      수정
    </v-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const files = ref([
  { name: "C:/Download/Filename.png", size: "10.3MB", url: "#" },
]);

const downloadFile = (files) => {
  console.log(files.name)
};

</script>
