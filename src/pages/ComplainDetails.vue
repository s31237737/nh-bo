<template>
  <PageHeader
    title="불편신고 상세"
    prev-link="Complain"
  />
  <div class="page-contents">
    <!-- 문의내용 -->
    <div class="tit-wrap">
      <strong class="title-2">
        문의 내용
      </strong>
    </div>
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%">
            등록자
          </th>
          <td colspan="5">
            김농협(05300300)
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            유형
          </th>
          <td style="width: 23%">
            앱 사용 시 불편사항
          </td>
          <th style="width: 10%">
            앱 이름
          </th>
          <td style="width: 23%">
            육묘 대장
          </td>
          <th style="width: 10%">
            답변상태
          </th>
          <td style="width: 24%">
            답변완료
          </td>
        </tr>
        <tr>
          <th>
            휴대전화
          </th>
          <td>
            010-0000-0000
          </td>
          <th>
            이메일
          </th>
          <td>
            Nonghyup@gmail.com
          </td>
          <th>
            작성일
          </th>
          <td>
            YYYY.MM.DD.hh.mm
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            제목
          </th>
          <td colspan="5">
            불편신고 제목입니다.
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            내용
          </th>
          <td colspan="5">
            <p>
              안녕하세요.<br>
              앱 사용할때 불편한점이 있어 문의드립니다.<br>
              불편신고 내용은 여기에 적으면 되나요?<br>
              답변 부탁드립니다.<br>
            </p>
          </td>
        </tr>
      </tbody>
    </v-table-row>
    <!-- 답변 -->
    <div class="tit-wrap">
      <strong class="title-2">
        답변
      </strong>
      <div class="btns">
        <v-btn
          size="large"
          color="warning"
          variant="outlined"
          prepend-icon="custom:remove"
        >
          답변 삭제
        </v-btn>
        <v-btn
          color="tertiary"
          size="large"
          variant="outlined"
          prepend-icon="custom:edit"
          to="ComplainRegistration"
        >
          답변 수정
        </v-btn>
      </div>
    </div>
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%;">
            답변자
          </th>
          <td style="width: 40%;">
            관리자
          </td>
          <th style="width: 10%;">
            답변일
          </th>
          <td style="width: 40%;">
            YYYY.MM.DD.hh.mm
          </td>
        </tr>
        <tr>
          <th>
            내용
          </th>
          <td colspan="3">
            <p>
              Q&A 내용입니다. Q&A 내용입니다.<br>
              Q&A 내용입니다. Q&A 내용입니다.<br>
              Q&A 내용입니다. Q&A 내용입니다.<br>
              Q&A 내용입니다. Q&A 내용입니다.<br>
              Q&A 내용입니다. Q&A 내용입니다.<br>
              Q&A 내용입니다. Q&A 내용입니다.<br>
              Q&A 내용입니다. Q&A 내용입니다.
            </p>
          </td>
        </tr>
        <tr>
          <th>
            첨부파일
          </th>
          <td colspan="3">
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
  </div>
</template>

<script setup>
import { ref } from 'vue';

const files = ref([
  { name: "C:/Download/Filename.png", size: "10.3MB", url: "#" },
  { name: "C:/Download/Filename123.png", size: "10.3MB", url: "#" },
  { name: "C:/Download/Filename456.png", size: "10.3MB", url: "#" },
]);

const downloadFile = (files) => {
  console.log(files.name)
};
</script>
