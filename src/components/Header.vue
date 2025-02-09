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
      <div class="login-session">
        <span class="timer">
          <v-icon
            size="32"
          >
            custom:clock
          </v-icon>
          {{ timeLeftFormatted }}
        </span>
        <v-btn
          color="white"
          size="x-small"
          variant="outlined"
          @click="onExtendClick"
        >
          연장
        </v-btn>
      </div>

      <v-btn
        icon
        size="32"
      >
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
      <v-btn
        icon
        size="40"
      >
        <v-avatar>
          <img
            width="40"
            src="@/assets/images/profile.png"
          >
        </v-avatar>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

// 알림 상태 (알림유무로 true/false로 설정)
const hasNotification = ref(true);


// 남은 시간을 초 단위로 관리
const remainingTime = ref(30 * 60);
// 남은 시간을 "분:초" 형식으로 반환하는 계산된 속성
const timeLeftFormatted = computed(() => {
  const minutes = Math.floor(remainingTime.value / 60);
  const seconds = remainingTime.value % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
});

onMounted(() => {
  setInterval(() => {
    if (remainingTime.value > 0) {
      remainingTime.value -= 1;
    }
  }, 1000); // 1초마다 갱신
});

// 시간 연장
const onExtendClick = () => {
  remainingTime.value += 30 * 60;
};
</script>

<style scoped lang="sass">

</style>
