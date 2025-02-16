<template>
  <v-form>
    <v-row
      align="end"
    >
      <v-col>
        <v-select
          label="앱 타입"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        />
      </v-col>
      <v-col>
        <v-select
          label="상태"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="form"
          label="샘플"
          placeholder="Email address"
          :rules="rules"
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="form"
          label="샘플"
          class="required"
          placeholder="Email address"
          append-inner-icon="custom:search"
          :rules="rules"
        />
      </v-col>

      <v-btn
        color="tertiary"
        variant="outlined"
        icon="custom:refresh"
      />
      <v-col>
        <div class="date-wrap">
          <v-date-input
            variant="outlined"
            label="Date"
          />
          <v-btn
            color="secondary"
          >
            today
          </v-btn>
        </div>
      </v-col>
      <v-col>
        <Date />
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
