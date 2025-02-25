<template>
  <PageHeader
    title="자주 묻는 질문 상세"
    prev-link="Fap"
  />

  <div class="page-contents">
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%">
            등록자
          </th>
          <td style="width: 40%">
            김농협(05300300)
          </td>
          <th style="width: 10%">
            등록일
          </th>
          <td style="width: 40%">
            YYYY.MM.DD
          </td>
        </tr>
        <tr>
          <th>
            유형
          </th>
          <td>
            앱 사용 질문
          </td>
          <th>
            공개 여부
          </th>
          <td>
            공개
          </td>
        </tr>
        <tr>
          <th>
            앱 검색
          </th>
          <td>
            육묘대장
          </td>
        </tr>
        <tr>
          <th>
            질문 <i class="required" />
          </th>
          <td colspan="3">
            texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
          </td>
        </tr>
        <tr>
          <th>
            내용 <i class="required" />
          </th>
          <td colspan="4">
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
      to="NoticeRegistration"
    >
      수정
    </v-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";

</script>
