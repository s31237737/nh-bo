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
      <!-- 퍼블가이드 확인용 -->
      <v-btn
        size="x-small"
        class="ml-5"
        color="white"
        text="guide"
        to="/guide"
      />
      <!-- // 퍼블가이드 확인용 -->
    </template>
    <template #append>
      <!-- 로그인연장 -->
      <div class="login-session">
        <span class="timer">
          <v-icon
            size="32"
            color="white"
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
      <!-- 알림 -->
      <Alarm />

      <!-- 프로필 -->
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
        <v-menu
          activator="parent"
          content-class="popover"
        >
          <v-card>
            <v-list :items="items" />
          </v-card>
        </v-menu>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

// 남은 시간을 초 단위로 관리
const remainingTime = ref(5 * 60);
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
  remainingTime.value += 60 * 60;
};

// 프로필
 const items = ref([
  {
    title: '업스토어로 이동',
    value: 1,
  },
  {
    title: '로그아웃',
    value: 2,
  },
]);

</script>
