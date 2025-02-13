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
      <v-btn
        size="x-small"
        class="ml-5"
        color="white"
        text="guide"
        to="/guide"
      />
    </template>
    <template #append>
      <!-- 로그인연장 -->
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
      <!-- 알림 -->
      <v-menu :close-on-content-click="false">
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            icon
          >
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
              color="#c2c2c2"
              size="32"
            />
          </v-btn>
        </template>

        <v-card
          width="300"
          max-height="300"
        >
          <v-toolbar
            :floating="true"
            class="position-sticky bg-red top-0"
          >
            <v-btn
              icon
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>알림</v-toolbar-title>
            <v-btn
              icon
            >
              <v-icon>mdi-cog</v-icon> <!-- 설정 아이콘 -->
            </v-btn>
          </v-toolbar>
          <!-- 알림 헤더 -->

          <!-- 탭 메뉴 -->
          <v-tabs
            v-model="activeTab"
          >
            <v-tab value="general">
              일반 알림
            </v-tab>
            <v-tab value="admin">
              관리자 알림
            </v-tab>
          </v-tabs>

          <!-- 알림 리스트 -->
          <v-window
            v-model="activeTab"
          >
            <!-- 일반 알림 -->
            <v-window-item value="general">
              <v-list v-if="notifications.length">
                <v-list-item
                  v-for="(item, index) in notifications"
                  :key="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
                </v-list-item>
              </v-list>
              <v-container
                v-else
                class="text-center py-6"
              >
                <v-icon size="48">
                  mdi-bell-off-outline
                </v-icon>
                <p>알림이 없습니다.</p>
              </v-container>
            </v-window-item>

            <!-- 관리자 알림 -->
            <v-window-item value="admin">
              <v-container class="text-center py-6">
                <v-icon size="48">
                  mdi-bell-off-outline
                </v-icon>
                <p>알림이 없습니다.</p>
              </v-container>
            </v-window-item>
          </v-window>
        </v-card>
      </v-menu>
      <!-- 프로필 -->
      <v-menu>
        <template #activator="{ props }">
          <v-btn
            icon
            size="40"
            v-bind="props"
          >
            <v-avatar>
              <img
                width="40"
                src="@/assets/images/profile.png"
              >
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
  { title: '업스토어로 이동' },
  { title: '로그아웃' },
]);

const hasNotification = ref(true); // 알림이 있는지 여부
const activeTab = ref('general'); // 현재 활성화된 탭

// 더미 알림 데이터
const notifications = ref([
  { title: '업스토어 알림', date: 'YYYY-MM-DD 00:00' },
  { title: '알림내용', date: 'YYYY-MM-DD 00:00' },
  { title: '업스토어 알림', date: 'YYYY-MM-DD 00:00' },
  { title: '알림내용', date: 'YYYY-MM-DD 00:00' },
  { title: '업스토어 알림', date: 'YYYY-MM-DD 00:00' },
  { title: '알림내용', date: 'YYYY-MM-DD 00:00' },
  { title: '업스토어 알림', date: 'YYYY-MM-DD 00:00' },
  { title: '알림내용', date: 'YYYY-MM-DD 00:00' },
  { title: '업스토어 알림', date: 'YYYY-MM-DD 00:00' },
  { title: '알림내용', date: 'YYYY-MM-DD 00:00' },
]);


</script>

<style scoped lang="sass">

</style>
