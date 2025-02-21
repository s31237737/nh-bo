<template>
  <div class="file-upload">
    <v-file-upload
      v-model="model"
      clearable
      multiple
      icon="mdi-plus"
    >
      <template #item="{ props: itemProps }">
        <v-file-upload-item
          v-bind="itemProps"
          file-icon="mdi-plus"
        >
          <template #clear="{ props: clearProps }">
            <v-btn
              color="primary"
              v-bind="clearProps"
            />
          </template>
        </v-file-upload-item>
      </template>
    </v-file-upload>
  </div>
</template>
<script setup>
  import { shallowRef } from 'vue'

  const model = shallowRef(null)
</script>
