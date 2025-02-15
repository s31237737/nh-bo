<template>
  <h1 class="title-1">
    App bars
  </h1>
  <div>
    서치
  </div>
  <div>
    필터
  </div>
  <div>
    테이블
  </div>
  <v-pagination
    v-model="page"
    show-first-last-page
    :length="10"
    :total-visible="5"
  />
</template>

<script setup>
import { ref } from 'vue';
 const page = ref(1)
  //
</script>
