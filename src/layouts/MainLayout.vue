<template>
  <Header />
  <Lnb />
  <v-main>
    <v-container fluid>
      <!-- loading persistent속성 추가 필요-->
      <v-overlay
        :model-value="overlay"
        contained
      >
        <v-progress-circular
          :size="35"
          :width="5"
          color="white"
          indeterminate
        />
      </v-overlay>
      <!-- // loading -->
      <slot />
    </v-container>
  </v-main>
</template>

<script setup>
import { ref } from "vue";
const overlay = ref(true);
</script>

<style scoped>
</style>
