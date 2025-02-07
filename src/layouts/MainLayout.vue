<!-- layouts/MainLayout.vue -->
<template>
  <v-container>
    <!-- 헤더 -->
    <v-app-bar
      color="grey-lighten-4"
      height="72"
      flat
    >
      <v-avatar
        class="ms-2"
        color="surface-variant"
        size="32"
        variant="flat"
      />
      <v-avatar
        class="mx-2"
        color="surface-variant"
        size="32"
        variant="flat"
      />

      <v-btn
        class="me-2"
        color="grey"
        height="40"
        variant="flat"
        width="80"
      />

      <v-btn
        class="me-2"
        color="grey"
        height="40"
        variant="flat"
        width="100"
      />

      <v-btn
        class="me-2"
        color="grey"
        height="40"
        variant="flat"
        width="120"
      />

      <v-btn
        class="me-2"
        color="grey"
        height="40"
        variant="flat"
        width="120"
      />

      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer floating>
      <div class="d-flex px-2 my-2">
        <v-btn
          class="flex-grow-1"
          color="grey"
          height="40"
          variant="flat"
        />

        <v-avatar
          class="ms-2"
          color="surface-variant"
          variant="flat"
          rounded
        />
      </div>

      <div class="d-flex px-2 my-2 align-center">
        <v-btn
          class="flex-grow-1 me-2"
          color="grey-lighten-4"
          height="40"
          variant="flat"
        />

        <v-avatar
          color="surface-variant"
          size="18"
        />

        <v-avatar
          class="ms-1"
          color="surface-variant"
          size="18"
        />
      </div>

      <div class="px-2 my-2">
        <v-text-field
          class="mb-4"
          density="compact"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
        />

        <v-sheet
          class="mb-2"
          color="surface-variant"
          height="24"
          rounded="pill"
          width="50%"
        />

        <v-sheet
          class="mb-1"
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="40%"
        />

        <v-sheet
          class="mb-1"
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="20%"
        />

        <v-sheet
          class="mb-1"
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="90%"
        />

        <v-sheet
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="70%"
        />

        <v-divider class="my-6" />

        <v-sheet
          class="mb-2"
          color="surface-variant"
          height="24"
          rounded="pill"
          width="30%"
        />

        <v-sheet
          class="mb-1"
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="65%"
        />

        <v-sheet
          class="mb-1"
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="70%"
        />

        <v-sheet
          class="mb-1"
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="40%"
        />

        <v-sheet
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="100%"
        />

        <v-divider class="my-6" />
      </div>
    </v-navigation-drawer>
    
    <!-- 메인 콘텐츠 영역 -->
    <v-main>
      <slot />
    </v-main>
  </v-container>
</template>

<script setup>
// 필요한 설정이나 로직을 추가할 수 있습니다.
</script>

<style scoped>
/* 필요한 스타일 */
</style>
