<template>
  <v-dialog
    :model-value="modelValue"
    class="popup-lg"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <span>자주 묻는 질문 상세</span>
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
            <tr v-for="(row, index) in tableData" :key="index">
              <th style="width: 10%">
                {{ row.label }}
              </th>
              <td>{{ row.value }}</td>
              <th style="width: 10%">
                {{ row.label2 }}
              </th>
              <td>{{ row.value2 }}</td>
            </tr>
            <tr v-for="(row, index) in tableData2" :key="index">
              <th style="width: 10%">
                {{ row.label }}
              </th>
              <td colspan="3">{{ row.value }}</td>
            </tr>
          </tbody>
        </v-table-row>
        <!-- // dialog contents -->
      </v-card-text>
      <v-card-actions>
        <v-btn color="tertiary" size="large" variant="outlined"> 목록 </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const tableData = ref([
  { label: "등록자", value: "김농협", label2: "등록일", value2: "2025.09.09" },
  {
    label: "유형",
    value: "앱 사용 시 자주 문는 질문",
    label2: "공개여부",
    value2: "공개",
  },
]);
const tableData2 = ref([
  { label: "질문", value: "자주 묻는 질문 제목입니다." },
  {
    label: "내용",
    value:
      "자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다.",
  },
]);
</script>
