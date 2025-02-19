<template>
  <v-btn
    size="small"
    color="blue"
    @click="dialog = true"
  >
    앱 타입 등록
  </v-btn>
  <v-dialog
    v-model="dialog"
    class="popup-md"
  >
    <v-card>
      <v-card-title>
        <span>앱 타입 등록</span>
        <v-btn
          icon="mdi-close"
          density="comfortable"
          @click="dialog = false"
        />
      </v-card-title>
      <v-card-text>
        <!-- dialog contents -->
        <v-table-row>
          <tbody>
            <tr>
              <th width="20%">
                앱 타입명
              </th>
              <td>d</td>
            </tr>
            <tr>
              <th width="20%">
                앱 타입 코드
              </th>
              <td>d</td>
            </tr>
            <tr>
              <th width="20%">
                사용 여부
              </th>
              <td>
                <v-switch
                  v-model="isSwitch"
                  class="swich-flip"
                />
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
          @click="dialog = false"
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

const dialog = ref(true);
const isSwitch = ref(true);

</script>
