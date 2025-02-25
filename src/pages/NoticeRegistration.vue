<template>
  <PageHeader
    title="공지사항 등록"
    prev-link="Notice"
  />
  <div class="page-contents">
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%;">
            제목 <i class="required" />
          </th>
          <td colspan="7">
            <v-text-field placeholder="제목을 입력해주세요." />
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
            <v-switch
              v-model="isSwitch01"
            />
          </td>
          <th style="width: 10%">
            공개 여부
          </th>
          <td style="width: 15%">
            <v-switch
              v-model="isSwitch02"
            />
          </td>
          <th style="width: 10%">
            메인 노출 여부
          </th>
          <td style="width: 15%">
            <v-switch
              v-model="isSwitch03"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            내용 <i class="required" />
          </th>
          <td colspan="7">
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
          <td colspan="7">
            <v-file-input
              v-model="files"
              placeholder="글제목, 등록자를 검색해주세요."
              multiple
              persistent-hint
              hint="*첨부 가능 최대 용량은 100MB, 5개 까지 업로드 가능합니다."
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
            <v-list v-if="files.length">
              <v-list-item
                v-for="(file, index) in files"
                :key="index"
              >
                <v-list-item-title>{{ file.name }}</v-list-item-title>
                <v-list-item-action>
                  <v-btn
                    icon
                    @click="removeFile(index)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </td>
        </tr>
      </tbody>
    </v-table-row>
    <!-- 토스트 팝업 -->
    <v-snackbar
      v-model="snackbar"
      contained
      content-class="toast-pop"
    >
      <v-icon
        start
        size="24"
        icon="custom:alert"
      />
      {{ snackbarText }}
      <template #actions>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="snackbar = false"
        />
      </template>
    </v-snackbar>
    <!-- // 토스트 팝업 -->
  </div>
  <div class="page-actions">
    <v-btn
      color="secondary"
      size="large"
    >
      취소
    </v-btn>
    <v-btn
      color="primary"
      size="large"
      @click="snackbarOpen"
    >
      등록
    </v-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isSwitch01 = ref(false);
const isSwitch02 = ref(true);
const isSwitch03 = ref(false);

const snackbar = ref(false);
const snackbarText = ref('메인 공지사항은 5개까지 노출이 가능합니다. 노출 개수를 확인하고 다시 설정해 주세요.');
const snackbarOpen = () => {
  snackbar.value=true
    return;
}

const files = ref([]);

const removeFile = (index) => {
  files.value.splice(index, 1);
};
</script>
