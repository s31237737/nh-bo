<template>
  <v-btn
    icon
    size="40"
  >
    <v-badge
      v-if="hasNotification"
      content="99"
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
    <v-menu
      activator="parent"
      content-class="popover"
      :close-on-content-click="false"
      width="300px"
    >
      <v-card
        class="alram"
        scrollable
      >
        <v-toolbar>
          <v-toolbar-title
            text="알림"
          />

          <v-btn
            size="24"
            icon="custom:setting"
          />
        </v-toolbar>
        <v-divider />
        <v-card-text>
          <v-list v-if="notifications.length">
            <v-list-item
              v-for="(item, index) in notifications"
              :key="index"
            >
              <v-list-item-title :class="{'dot':item.new}">
                {{ item.title }}
              </v-list-item-title>
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
        </v-card-text>
      </v-card>
    </v-menu>
  </v-btn>
</template>
<script setup>
import { ref } from 'vue';
const hasNotification = ref(true); // 알림이 있는지 여부
const activeTab = ref('general'); // 현재 활성화된 탭

// 더미 알림 데이터
const notifications = ref([
  {
    title: '알림 내용은 최대 2줄까지 제공 최대 글자 수 초과 시 닷(...) 처리 알림 내용은 최대 2줄까지',
    date: '2025-09-30 09:38',
    new: true,
  },
  {
    title: '알림내용',
    date: '2025-09-30 09:38',
    new: true,
  },
  {
    title: '업스토어 알림',
    date: '2025-09-30 09:38',
  },
  {
    title: '알림내용',
    date: '2025-09-30 09:38',
  },
  {
    title: '업스토어 알림',
    date: '2025-09-30 09:38',
  },
  {
    title: '알림내용',
    date: '2025-09-30 09:38',
  },
  {
    title: '업스토어 알림',
    date: '2025-09-30 09:38',
  },
  {
    title: '알림내용',
    date: '2025-09-30 09:38',
  },
  {
    title: '업스토어 알림',
    date: '2025-09-30 09:38',
  },
  {
    title: '알림내용',
    date: '2025-09-30 09:38',
  },
]);
</script>
