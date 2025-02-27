<template>
  <PageHeader
    title="앱 가이드 등록"
    prev-link="AppGuide"
  />
  <div class="page-contents">
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%;">
            제목 <i class="required" />
          </th>
          <td style="width: 40%">
            <v-text-field placeholder="제목을 입력해주세요." />
          </td>
          <th style="width: 10%">
            등록자
          </th>
          <td style="width: 40%">
            김농협(05300300)
          </td>
        </tr>
        <tr>
          <th>
            앱 <i class="required" />
          </th>
          <td>
            <div class="d-flex align-center ga-3">
              <v-btn color="primary">
                앱 검색
              </v-btn>
              <span>육묘대장</span>
            </div>
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
          <th style="width: 10%;">
            사용가이드<br>
            첨부파일
          </th>
          <td colspan="3">
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
        <tr>
          <th
            style="width: 10%;"
            rowspan="2"
          >
            링크
          </th>
          <td colspan="3">
            <v-text-field
              v-model="youtubeLink"
              class="prepend-text"
              placeholder="유튜브 영상 링크를 입력해주세요."
            >
              <template #prepend>
                영상 링크
              </template>
            </v-text-field>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <v-text-field
              v-model="thumbnailLink"
              class="prepend-text"
              placeholder="썸네일 링크를 입력해주세요."
              :disabled="!youtubeLink"
            >
              <template #prepend>
                썸네일 링크 <i class="required" />
              </template>
            </v-text-field>
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
const isSwitch = ref(true);
const files = ref([]);
const removeFile = (index) => {
  files.value.splice(index, 1);
};

const youtubeLink = ref('');
const thumbnailLink = ref('');
</script>
