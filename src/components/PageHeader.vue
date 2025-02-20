<template>
  <div class="page-header">
    <v-btn
      v-if="prevLink"
      :to="prevLink"
      density="comfortable"
      icon="custom:arrow-left"
      color="white"
    />
    <h1 class="title-1">
      {{ title }}
    </h1>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  prevLink: {
    type: String,
    default: null,
  },
});
</script>

