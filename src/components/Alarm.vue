<template>
  <v-menu :close-on-content-click="false">
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        icon
      >
        <v-badge
          v-if="hasNotification"
          content="2"
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
</template>
<script setup>
import { ref } from 'vue';
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
