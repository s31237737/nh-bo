<template>
  <v-dialog
    :model-value="modelValue"
    class="popup-md"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <span>카테고리 태그 등록</span>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="emit('update:modelValue', false)"
        />
      </v-card-title>
      <v-card-text>
        <!-- dialog contents -->
        <v-table-row>
          <tbody>
            <tr>
              <th class="w-25">
                카테고리명 <i class="required" />
              </th>
              <td>
                <v-text-field placeholder="카테고리명을 입력해주세요." />
              </td>
            </tr>
            <tr>
              <th class="w-25">
                카테고리 코드
              </th>
              <td>C001</td>
            </tr>
            <tr>
              <th class="w-25">
                태그 등록 <i class="required" />
              </th>
              <td>
                <v-text-field
                  v-model="newTag"
                  placeholder="추가하실 태그명을 입력해주세요."
                  @keyup.enter="addTag"
                >
                  <template #append-inner>
                    <v-btn
                      color="primary"
                      size="small"
                      prepend-icon="mdi-plus"
                      @click="addTag"
                    >
                      추가
                    </v-btn>
                  </template>
                </v-text-field>
                <div
                  v-if="tags.length"
                  class="tag-add-list"
                >
                  <p>전체 <strong>{{ tags.length }}</strong></p>
                  <v-sheet>
                    <v-list>
                      <v-list-item
                        v-for="(tag, index) in tags"
                        :key="index"
                      >
                        <v-list-item-title>{{ tag }}</v-list-item-title>
                        <template #append>
                          <v-btn
                            icon="custom:close"
                            density="comfortable"
                            @click="removeTag(index)"
                          />
                        </template>
                      </v-list-item>
                    </v-list>
                  </v-sheet>
                </div>
              </td>
            </tr>
            <tr>
              <th class="w-25">
                카테고리 사용 상태
              </th>
              <td>
                <v-switch
                  v-model="isSwitch"
                />
              </td>
            </tr>
            <tr>
              <th class="w-25">
                추천 정보 사용 상태
              </th>
              <td>
                <v-switch
                  v-model="isSwitch02"
                />
              </td>
            </tr>
          </tbody>
        </v-table-row>
        <!-- // dialog contents -->
        <!-- 토스트 팝업 -->
        <v-snackbar
          v-model="snackbar"
          contained
          content-class="toast-info"
        >
          <v-icon
            start
            size="24"
            icon="custom:info"
          />
          {{ snackbarText }}
          <template #actions>
            <v-btn
              color="white"
              icon="custom:close"
              density="comfortable"
              @click="snackbar = false"
            />
          </template>
        </v-snackbar>
        <!-- // 토스트 팝업 -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="secondary"
          size="large"
          @click="emit('update:modelValue', false)"
        >
          취소
        </v-btn>
        <v-btn
          color="primary"
          size="large"
        >
          등록
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);
const isSwitch = ref(false);
const isSwitch02 = ref(false);

// 태그 추가
const newTag = ref('');
const tags = ref(['텍스트', '텍스트', '텍스트', '텍스트', '일이삼사오육칠팔구십'])
const snackbar = ref(false);
const snackbarText = ref('태그는 10개까지 추가 가능합니다. 추가한 태그를 확인하고 다시 진행해 주세요.');

const addTag = () => {
  if (tags.value.length >= 10) {
    snackbar.value=true
    return;
  }

  if (newTag.value.trim() !== '') {
    tags.value.push(newTag.value.trim());
    newTag.value = '';
  }
}

const removeTag = (index) => {
  tags.value.splice(index, 1);
}


</script>
