<template>
  <PageHeader
    title="앱 관리 작업중 미완성"
  />

  <div class="search-wrap">
    <v-form>
      <v-select
        label="앱 타입"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"

      />

      <v-select
        label="상태"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      />

      <Date v-model="date" />

      <v-text-field
        v-model="form"
        class="search-inp"
        placeholder="Email address"
        append-inner-icon="custom:search"
        clearable
        @click:append-inner="onAppendClick"
      />

      <v-btn
        color="tertiary"
        variant="outlined"
        icon="custom:refresh"
      />
    </v-form>
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
const date = ref(new Date());
const form = ref('');
const onAppendClick = () => {
  alert('Append icon clicked!');
}
</script>
