<template>
  <v-dialog
    :model-value="modelValue"
    class="popup-md"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <span>앱 버전 등록</span>
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
              <th style="width: 20%">앱 버전 <i class="required" /></th>
              <td>
                <v-text-field placeholder="앱 버전을 입력해주세요." width="100%">
                  <template #append>
                    <span>ver</span>
                  </template>
                </v-text-field>
              </td>
            </tr>
            <tr>
              <th style="width: 20%">업데이트 내용 <i class="required" /></th>
              <td>
                <v-textarea
                  placeholder="업데이트 내용을 입력해주세요."
                  :counter="1000"
                  :persistent-counter="true"
                />
              </td>
            </tr>
            <tr>
              <th style="width: 20%">사용 여부</th>
              <td>
                <v-switch v-model="isSwitch" />
              </td>
            </tr>
          </tbody>
        </v-table-row>
        <!-- // dialog contents -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="secondary"
          size="large"
          @click="emit('update:modelValue', false)"
        >
          취소
        </v-btn>
        <v-btn color="primary" size="large" disabled> 등록 </v-btn>
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

const isSwitch = ref(false);
</script>
