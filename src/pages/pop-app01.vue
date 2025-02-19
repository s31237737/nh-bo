<template>
  <v-dialog
    v-model="popApp01"
    class="popup-lg"
  >
    <v-card>
      <v-card-title>
        <span>popup-lg</span>
        <v-btn
          icon="mdi-close"
          density="comfortable"
          @click="dialog3 = false"
        />
      </v-card-title>

      <v-card-text>
        팝업텍스트팝업텍스트팝업텍스트팝업텍스트
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="secondary"
          size="large"
          @click="dialog3 = false"
        >
          취소
        </v-btn>
        <v-spacer />
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

  //
</script>
