<template>
  <PageHeader
    title="공지사항 상세"
    prev-link="Notice"
  />

  <div class="page-contents">
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%">
            제목
          </th>
          <td colspan="7">
            공지사항 제목
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            등록자
          </th>
          <td style="width: 15%">
            김농협(05300300)
          </td>
          <th style="width: 10%">
            상단 고정 여부
          </th>
          <td style="width: 15%">
            고정
          </td>
          <th style="width: 10%">
            공개 여부
          </th>
          <td style="width: 15%">
            공개
          </td>
          <th style="width: 10%">
            메인 노출 여부
          </th>
          <td style="width: 15%">
            노출
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            내용
          </th>
          <td colspan="7">
            <v-img
              width="100%"
              height="150px"
              cover
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            />
            <br>
            <p>
              Notice Text Notice Text Notice Text Notice Text<br>
              Notice Text Notice Text Notice Text Notice Text  Notice Text<br>
              Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text<br>
              Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text<br>
              Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text<br>

              Notice Text Notice Text Notice Text Notice Text<br>
              Notice Text Notice Text Notice Text Notice Text  Notice Text<br>
              Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text<br>
              Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text<br>
              Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text<br>
            </p>
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            첨부파일
          </th>
          <td colspan="7">
            <ul
              class="download-list"
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
      to=""
    >
      수정
    </v-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";

const files = ref([
  { name: "C:/Download/Filename.png", size: "10.3MB", url: "#" },
  { name: "C:/Download/Filename123.png", size: "10.3MB", url: "#" },
  { name: "C:/Download/Filename456.png", size: "10.3MB", url: "#" },
]);

const downloadFile = (files) => {
  console.log(files.name)
};

</script>
