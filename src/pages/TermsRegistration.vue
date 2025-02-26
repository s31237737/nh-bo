<template>
  <PageHeader
    title="약관 등록"
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
            <v-switch
              v-model="isSwitch"
            />
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
            버전 <i class="required" />
          </th>
          <td>
            <v-text-field
              placeholder="버전을 입력해주세요."
            />
          </td>
        </tr>
        <tr>
          <th>
            시행일
          </th>
          <td colspan="3">
            <DateRange
              v-model="dateRange"
              style="width: 340px"
            />
          </td>
        </tr>
        <tr>
          <th>
            내용 <i class="required" />
          </th>
          <td colspan="3">
            <v-textarea
              placeholder="내용을 입력해주세요."
              :counter="1000"
              :persistent-counter="true"
            />
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
      disabled
    >
      등록
    </v-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 사용 상태
const isSwitch = ref(false);

const dateRange = ref([new Date(), new Date()]);
</script>
