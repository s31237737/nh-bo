<template>
  <PageHeader
    title="자주 묻는 질문 등록"
    prev-link="Faq"
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
            <v-select
              v-model="select"
              :items="['앱 사용 질문', '업스토어 이용 질문', '기타']"
              style="width: 640px"
            />
          </td>
          <th>
            공개 여부
          </th>
          <td>
            <v-switch
              v-model="isSwitch"
            />
          </td>
        </tr>
        <tr>
          <th>
            앱
          </th>
          <td colspan="3">
            <div class="d-flex align-center ga-3">
              <v-btn color="primary">
                앱 검색
              </v-btn>
              <span>육묘대장</span>
            </div>
          </td>
        </tr>
        <tr>
          <th>
            질문 <i class="required" />
          </th>
          <td colspan="3">
            <v-text-field
              placeholder="질문을 입력해주세요."
            />
          </td>
        </tr>
        <tr>
          <th>
            내용 <i class="required" />
          </th>
          <td colspan="4">
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

const select = ref("앱 사용 질문");
</script>
