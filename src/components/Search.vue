<template>
  <v-form>
    <v-row
      align="end"
    >
      <v-col>
        <label class="text-subtitle-1 text-medium-emphasis">
          Account
        </label>

        <v-text-field
          v-model="form"
          placeholder="Email address"
          :rules="rules"
        />
      </v-col>
      <v-col>
        <v-select
          class="mt-8"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        />
      </v-col>
    </v-row>
  </v-form>
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
