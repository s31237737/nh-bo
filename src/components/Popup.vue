<template>
  <v-row>
    <v-col cols="auto">
      <v-btn @click="dialog1 = true">
        popup-sm(alert)
      </v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn @click="dialog2 = true">
        popup-md
      </v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn @click="dialog3 = true">
        popup-lg
      </v-btn>
    </v-col>
  </v-row>
  <v-dialog
    v-model="dialog1"
    class="popup-sm"
  >
    <v-card>
      <v-card-title>
        <span>Sm(312)얼럿</span>
        <v-btn
          icon="mdi-close"
          variant="text"
          @click="dialog1 = false"
        />
      </v-card-title>

      <v-card-text>
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
      </v-card-text>
      <template #actions>
        <v-btn
          text="Ok"
          @click="dialog1 = false"
        />
      </template>
    </v-card>
  </v-dialog>
  <v-dialog
    v-model="dialog2"
    class="popup-md"
  >
    <v-card>
      <v-card-title>
        <span>popup-md</span>
        <v-btn
          icon="mdi-close"
          variant="text"
          @click="dialog2 = false"
        />
      </v-card-title>

      <v-card-text>
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
      </v-card-text>
      <template #actions>
        <v-btn
          text="Ok"
          @click="dialog2 = false"
        />
      </template>
    </v-card>
  </v-dialog>
  <v-dialog
    v-model="dialog3"
    class="popup-lg"
  >
    <v-card>
      <v-card-title>
        <span>popup-lg</span>
        <v-btn
          icon="mdi-close"
          @click="dialog3 = false"
        />
      </v-card-title>

      <v-card-text>
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
      </v-card-text>
      <template #actions>
        <v-btn
          text="Ok"
          @click="dialog3 = false"
        />
      </template>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { ref } from 'vue';

const dialog1 = ref(false);
const dialog2 = ref(false);
const dialog3 = ref(false);
</script>
