<template>
  <p class="t1">
    typography
  </p>
  <p class="t2">
    typography
  </p>
  <p class="p1 bold">
    typography
  </p>
  <p class="p1 semibold">
    typography
  </p>
  <p class="p2">
    typography
  </p>
  <p class="p2 regular">
    typography
  </p>
  <p class="c1">
    typography
  </p>

  <v-row
    align="center"
    justify="center"
  >
    <v-col cols="auto">
      <v-btn size="x-small" color="primary" flat>
        Extra small Button
      </v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn size="small" color="red" flat variant="outlined">
        Small Button
      </v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn variant="outlined">Regular Button</v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn size="large">
        Large Button
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
  //
</script>
