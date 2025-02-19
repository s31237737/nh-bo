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
        size="small"
        class="ml-5"
        color="white"
        text="pub"
        to="/guide"
      />
      <!-- // 퍼블가이드 확인용 -->
    </template>
    <template #append>
      <!-- 로그인 연장 팝업 -->
      <v-btn
        size="small"
        color="white"
        text="로그인 연장 팝업"
        @click="loginPop = true"
      />
      <v-dialog
        v-model="loginPop"
        class="popup-sm"
      >
        <v-card>
          <v-card-title>
            <span>로그인 연장</span>
            <v-btn
              icon="mdi-close"
              density="comfortable"
              variant="text"
              @click="loginPop = false"
            />
          </v-card-title>

          <v-card-text>
            <p class="text-2">
              로그인 연장을 원하지 않으실 경우<br>자동 로그아웃 됩니다.
            </p>
            <p class="text-1-md mt-5">
              남은 시간 : 60초
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="secondary"
              size="large"
              @click="loginPop = false"
            >
              취소
            </v-btn>
            <v-btn
              color="primary"
              size="large"
            >
              로그인 연장
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- // 로그인 연장 팝업 -->
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
          size="small"
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

const loginPop = ref(false);

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
