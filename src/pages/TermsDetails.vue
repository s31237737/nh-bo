<template>
  <PageHeader
    title="약관 상세"
    prev-link="Terms"
  />

  <div class="page-contents">
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%">
            공개상태
          </th>
          <td style="width: 40%">
            공개
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
            약관종류
          </th>
          <td>
            개인정보처리방침
          </td>
          <th>
            버전
          </th>
          <td>
            v0.8
          </td>
        </tr>
        <tr>
          <th>
            시행일
          </th>
          <td colspan="3">
            0000.00.00 ~ 0000.00.00
          </td>
        </tr>
        <tr>
          <th>
            내용
          </th>
          <td colspan="3">
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
      to="TermsRegistration"
    >
      수정
    </v-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";

</script>
