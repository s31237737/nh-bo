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
        color="gray"
        size="32"
      />
    </v-badge>
    <v-icon
      v-else
      icon="custom:alarm"
      color="gray"
      size="32"
    />
    <v-menu
      activator="parent"
      content-class="popover"
      :close-on-content-click="false"
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
        <!-- 일반 알림 -->
        <v-card-text v-if="!isAdmin">
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
          <v-empty-state
            v-else
            text="알림이 없습니다."
            icon="custom:warning"
            size="40"
          />
        </v-card-text>
        <!-- // 일반 알림 -->
        <!-- 관리자 알림 -->
        <template v-else>
          <v-chip-group
            v-model="activeTab"
            variant="outlined"
            class="popover-tab"
            selected-class="selected"
            mandatory
          >
            <v-chip
              size="small"
              value="store"
            >
              업스토어 알림
            </v-chip>
            <v-chip
              size="small"
              value="admin"
            >
              관리자 알림
            </v-chip>
          </v-chip-group>
          <v-card-text
            style="height:319px"
          >
            <v-window
              v-model="activeTab"
            >
              <v-window-item value="store">
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
                <v-empty-state
                  v-else
                  text="알림이 없습니다."
                  icon="custom:warning"
                  size="40"
                />
              </v-window-item>

              <v-window-item value="admin">
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
                <v-empty-state
                  v-else
                  text="알림이 없습니다."
                  icon="custom:warning"
                  size="40"
                />
              </v-window-item>
            </v-window>
          </v-card-text>
        </template>
        <!-- // 관리자 알림 -->
      </v-card>
    </v-menu>
  </v-btn>
</template>
<script setup>
import { ref } from 'vue';
const hasNotification = ref(true); // 알림이 있는지 여부
const isAdmin= ref(true); // 관리자 권한이 있는지 여부
const activeTab = ref('store'); // 현재 활성화된 탭
console.log(activeTab)
// 더미 알림 데이터
const notifications = ref([
  {
    title: '알림 내용은 최대 2줄까지 제공 최대 글자 수 초과 시 닷(...) 처리 알림 내용은 최대 2줄까지',
    date: '2025-09-30 09:38',
    new: true,
  },
  {
    title: '업스토어 신규 앱 출시에 따라 땡땡땡땡 앱 업데이트 버전이 출시되었습니다. 지금 바로',
    date: '2025-09-30 09:38',
    new: true,
  },
  {
    title: '신규가입이 완료되었습니다.',
    date: '2025-09-30 09:38',
  },
  {
    title: 'NH QR 앱 사용 신청이 수락되었습니다.',
    date: '2025-09-30 09:38',
  },
  {
    title: '사용중이신 [앱 이름] 앱이 업데이트 되었습니다. : 댓글기능 개선, 작성 입력 시 오류 최소화',
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
