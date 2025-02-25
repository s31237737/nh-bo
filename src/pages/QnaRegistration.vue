<template>
  <PageHeader
    title="Q&A 답변 등록"
    prev-link="Qna"
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
          <td style="width: 23%">
            김농협(05300300)
          </td>
          <th style="width: 10%">
            공개여부
          </th>
          <td style="width: 23%">
            공개
          </td>
          <th style="width: 10%">
            답변상태
          </th>
          <td style="width: 24%">
            미답변
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            휴대전화
          </th>
          <td style="width: 23%">
            010-0000-0000
          </td>
          <th style="width: 10%">
            이메일
          </th>
          <td style="width: 23%">
            Nonghyup@gmail.com
          </td>
          <th style="width: 10%">
            작성일
          </th>
          <td style="width: 24%">
            YYYY.MM.DD.hh.mm
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            문의유형
          </th>
          <td style="width: 23%">
            앱 문의
          </td>
          <th style="width: 10%">
            앱
          </th>
          <td colspan="3">
            육묘대장
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            제목
          </th>
          <td colspan="5">
            Q&A 질문 제목입니다.
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            내용
          </th>
          <td colspan="5">
            <p>
              안녕하세요.<br>
              앱 사용할때 궁금한점이 있어 문의드립니다.<br>
              Q&A 내용은 여기에 적으면 되나요?<br>
              답변 부탁드립니다.<br>
            </p>
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            첨부파일
          </th>
          <td colspan="5">
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
    <!-- 답변 -->
    <div class="tit-wrap">
      <strong class="title-2">
        답변
      </strong>
    </div>
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%;">
            답변자
          </th>
          <td>
            관리자
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            내용 <i class="required" />
          </th>
          <td>
            <v-sheet
              class="d-flex align-center justify-center"
              color="secondary"
              width="100%"
              height="250"
            >
              에디터 영역
            </v-sheet>
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            첨부파일
          </th>
          <td>
            <v-file-input
              v-model="files02"
              placeholder="글제목, 등록자를 검색해주세요."
              multiple
            >
              <template #append-inner>
                <v-btn
                  color="secondary"
                >
                  파일첨부
                </v-btn>
              </template>
            </v-file-input>
            <!-- 첨부된 파일 목록 표시 -->
            <div class="upload-guide">
              <p>*첨부 가능 최대 용량은 100MB, 5개 까지 업로드 가능합니다.</p>
            </div>
            <ul
              v-if="files02.length"
              class="file-list"
            >
              <li
                v-for="(file, index) in files02"
                :key="index"
              >
                <v-icon icon="custom:file" />
                <span>{{ file.name }}</span>
                <v-btn
                  class="icon-md"
                  icon="custom:close"
                  @click="removeFile(index)"
                />
              </li>
            </ul>
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
      size="large"
      color="warning"
      variant="outlined"
      prepend-icon="custom:remove"
    >
      삭제
    </v-btn>
    <!-- <v-btn
      color="tertiary"
      size="large"
      variant="outlined"
      prepend-icon="custom:edit"
    >
      답변 수정
    </v-btn> -->
    <v-btn
      color="primary"
      size="large"
      disabled
    >
      답변 등록
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

const files02 = ref([]);
const removeFile = (index) => {
  files02.value.splice(index, 1);
};
</script>
