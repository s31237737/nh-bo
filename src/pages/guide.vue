<template>
  <v-row>
    <v-col>
      <p class="title-1">
        title-1 큰 제목입니다 (24px, Bold, 125%)
      </p>
      <p class="title-2">
        title-2 중간 크기 제목입니다 (18px, SemiBold, 125%)
      </p>

      <p class="text-1">
        text-1 큰 본문 텍스트입니다. (16px, Regular, 150%)
      </p>
      <p class="text-1-md">
        text-1-md 큰 본문 텍스트입니다. (16px, SemiBold, 150%)
      </p>
      <p class="text-1-bd">
        text-1-bd 큰 본문 Bold 700 텍스트입니다. (16px, Bold, 150%)
      </p>

      <p class="text-2">
        text-2 일반 본문 텍스트입니다. (14px, Regular, 150%)
      </p>
      <p class="text-2-md">
        text-2-md 일반 본문  텍스트입니다. (14px, SemiBold, 150%)
      </p>

      <p class="caption">
        caption 작은 캡션 스타일입니다. (14px, Regular, 150%) 
      </p>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="auto">
      <v-btn
        size="x-small"
        color="black"
      >
        Extra small Button
      </v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn
        size="small"
        color="red"
        variant="outlined"
      >
        Small Button
      </v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn variant="outlined">
        Regular Button
      </v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn
        size="large"
        color="state_warn"
      >
        Large Button
      </v-btn>
    </v-col>
  </v-row>
  <Popup />

  <v-row />
</template>

<script setup>
import Popup from '@/components/popup.vue';

  //
</script>
