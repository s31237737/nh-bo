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
            <div
              style="height: 400px;"
              class="terms-add-box"
            >
              <div class="terms-add">
                <v-btn
                  color="primary"
                  size="large"
                  prepend-icon="custom:plus"
                  @click="addSection"
                >
                  섹션 추가
                </v-btn>
              </div>
              <!-- 섹션 리스트 -->
              <div
                v-for="(section, index) in sections"
                :key="section.id"
                class="terms-section"
              >
                <v-text-field
                  v-model="section.title"
                  placeholder="섹션명을 입력해주세요."
                >
                  <template #append>
                    <v-btn
                      color="tertiary"
                      size="large"
                      prepend-icon="custom:minus"
                      variant="outlined"
                      :disabled="sections.length === 1"
                      @click="removeSection(section.id)"
                    >
                      섹션 삭제
                    </v-btn>
                  </template>
                </v-text-field>

                <v-sheet
                  class="d-flex align-center justify-center"
                  color="secondary"
                  width="100%"
                  height="200"
                >
                  에디터 영역
                </v-sheet>
                <v-divider v-if="index < sections.length - 1" />
              </div>
            </div>
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
      color="tertiary"
      size="large"
      variant="outlined"
      prepend-icon="custom:refresh"
    >
      초기화
    </v-btn>
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

const dateRange = ref([new Date(), new Date()]);

const sections = ref([{ id: 1, title: "" }]);

const addSection = () => {
  sections.value.push({
    id: Date.now(),
    title: "",
  });
};

const removeSection = (id) => {
  if (sections.value.length > 1) {
    sections.value = sections.value.filter(section => section.id !== id);
  }
};
</script>
