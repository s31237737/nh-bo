<template>
  <PageHeader
    title="앱 관리"
    prev-link="/"
  />

  <div>
    서치
  </div>
  <div>
    필터
  </div>
  <div>
    테이블
  </div>
  <Pagination
    :total-items="80"
    :items-per-page="10"
    :current-page="3"
  />
</template>

<script setup>
import { ref } from 'vue';
  //
</script>
