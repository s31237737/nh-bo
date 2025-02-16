<template>
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

      <v-text-field
        v-model="form"
        label="샘플"
        placeholder="Email address"
      />

      <v-text-field
        v-model="form"
        label="샘플"
        class="required"
        placeholder="Email address"
        append-inner-icon="custom:search"
      />

      <v-btn
        color="tertiary"
        variant="outlined"
        icon="custom:refresh"
      />

      <DateRange v-model="dateRange" />

      <Date v-model="date" />
    </v-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const form = ref('');
const date = ref(new Date());
const dateRange =  ref([new Date(), new Date()]);

</script>
