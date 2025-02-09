<template>
  <v-app-bar
    height="80"
    scroll-behavior="elevate"
    class="header"
  >
    <template #prepend>
      <v-img
        width="100"
        src="@/assets/images/logo.png"
      />
    </template>
    <template #append>
      <v-btn icon>
        <!-- 알림이 있을 때만 v-badge가 보이도록 조건부 렌더링 -->
        <v-badge
          v-if="hasNotification"
          dot
          color="error"
        >
          <v-icon
            icon="custom:alarm"
            color="#c2c2c2"
            size="32"
          />
        </v-badge>
        <v-icon
          v-else
          icon="custom:alarm"
          color="white"
          size="32"
        />
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';

// 알림 상태 (알림유무로 true/false로 설정)
const hasNotification = ref(true);
</script>

<style scoped lang="sass">

</style>
