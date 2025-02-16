<template>
  <v-row
    align="end"
  >
    <v-col>
      <div class="text-subtitle-1 text-medium-emphasis">
        Account
      </div>

      <v-text-field
        v-model="form"
        density="comfortable"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        :rules="rules"
      />
    </v-col>
    <v-col>
      <v-select
        class="mt-8"
        label="Select"
        :persistent-placeholder="true"
        variant="outlined"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      />
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const form = ref('');

// email validation 규칙 정의
const rules = computed(() => [
  value => {
    if (value) return true;
    return 'You must enter a first name.';
  },
]);
</script>
