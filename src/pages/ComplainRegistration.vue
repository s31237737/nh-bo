<template>
  <PageHeader
    title="불편신고 답변 등록"
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
            미답변
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
              v-model="files"
              label="버튼을 클릭하여 파일을 첨부하거나 원하는 파일을 마우스로 끌어오세요."
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
              v-if="files.length"
              class="file-list"
            >
              <li
                v-for="(file, index) in files"
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

const files = ref([]);
const removeFile = (index) => {
  files.value.splice(index, 1);
};
</script>
