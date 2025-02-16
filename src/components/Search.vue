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
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="form"
          label="샘플"
          class="required"
          placeholder="Email address"
          append-inner-icon="custom:search"
        />
      </v-col>

      <v-btn
        color="tertiary"
        variant="outlined"
        icon="custom:refresh"
      />
      <v-col>
        <DateRange v-model="dateRange" />
      </v-col>
      <v-col>
        <Date v-model="date" />
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
const form = ref('');
const date = ref(new Date());
const dateRange =  ref([new Date(), new Date()]);

</script>
