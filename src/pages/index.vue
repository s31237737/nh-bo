<template>
  <v-row>
    <v-col>
      <h1>
        Title 1 (T1)
      </h1>
      <p class="body-1">
        This is a bold paragraph using body1 style (16px, 150% line height).
      </p>
      <h2>
        Title 2 (T2)
      </h2>
      <p class="body-2">
        This is a semi-bold paragraph using body2 style (16px, 150% line height).
      </p>
    </v-col>
  </v-row>

  <v-row>
    <v-col>
      <p class="body-1">
        P1 - Bold Paragraph
      </p>
      <p class="body-2">
        P2 - SemiBold Paragraph
      </p>
      <p class="body-3">
        P3 - Regular Paragraph
      </p>
    </v-col>
  </v-row>

  <v-row>
    <v-col>
      <p class="caption">
        Caption 1 (C1) - Regular Caption
      </p>
    </v-col>
  </v-row>

  <v-icon
    size="32"
    color="red"
  >
    mdi-home
  </v-icon>  <!-- 커스텀 아이콘 -->
  <v-icon
    size="48"
    color="red"
  >
    custom:arrow-up
  </v-icon>  <!-- 커스텀 아이콘 -->
  <v-row
    align="center"
    justify="center"
  >
    <v-col cols="auto">
      <v-btn
        size="x-small"
        color="primary"
      >
        Extra small Button
      </v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn
        size="small"
        color="red"
        variant="outlined"
      >
        Small Button
      </v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn variant="outlined">
        Regular Button
      </v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn
        size="large"
        color="state_warn"
      >
        Large Button
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
  //
</script>
