<template>
  <Header />
  <Lnb />
  <v-main>
    <v-container
      fluid
      :class="{'is-loading':loading}"
    >
      <!-- loading persistent속성 추가 필요-->
      <v-overlay
        :model-value="loading"
        contained
        @click="handleLoadingClose"
      >
        <v-progress-circular />
      </v-overlay>
      <!-- // loading -->

      <!-- contents 영역 -->
      <slot />
    </v-container>
  </v-main>
</template>

<script setup>
import { ref } from "vue";
const loading = ref(true);
const handleLoadingClose = () => {
  loading.value = false;
};
</script>

<style scoped>
</style>
