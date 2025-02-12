<template>
  <v-navigation-drawer
    width="253"
    permanent
    class="lnb"
  >
    <!-- 개발: v-list-item .is-active 클래스 추가 -->
    <v-list v-model:opened="open">
      <template
        v-for="(item, i) in menuItems"
        :key="i"
      >
        <!-- 하위 항목이 없으면 v-list-item로 표시 -->
        <v-list-item
          v-if="!item.submenu"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
          :class="{'is-active':item.isActive}"
        />

        <!-- 하위 항목이 있으면 v-list-group로 표시 -->
        <v-list-group
          v-else
          v-bind="item.submenuProps"
        >
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              :prepend-icon="item.icon"
              append-icon="custom:arrow-down"
              :title="item.title"
            />
          </template>

          <v-list-item
            v-for="(subItem, index) in item.submenu"
            :key="index"
            :to="subItem.to"
            :title="subItem.title"
            :class="['sub-menu',{'is-active':item.isActive}]"
          />
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";

const open = ref([null]);

const menuItems = ref([
  { to: "/app", icon: "custom:mobile", title: "앱 관리" , isActive: true },
  {
    title: "사용신청 관리",
    icon: "custom:apply",
    submenu: [
      { title: "사용신청 관리", to: "/apply" },
      { title: "사용내역 관리", to: "/apply-history" }
    ],
    submenuProps: { value: "apply" },
  },
  { to: "/authority", icon: "custom:authority", title: "권한 관리" },
  { to: "/display", icon: "custom:display", title: "전시 관리" },
  {
    title: "게시판 관리",
    icon: "custom:board",
    submenu: [
      { title: "공지사항", to: "/board/notice" },
      { title: "자주 묻는 질문", to: "/board/faq" },
      { title: "Q&A", to: "/board/qna" },
      { title: "앱 가이드", to: "/board/app-guide" },
      { title: "커뮤니티", to: "/board/community" },
      { title: "불편신고", to: "/board/complaint" },
    ],
    submenuProps: { value: "board" },
  },
  { to: "/channel", icon: "custom:channel", title: "업스토어 채널 관리" },
  {
    title: "모니터링",
    icon: "custom:monitoring",
    submenu: [
      { title: "앱 사용현황", to: "/monitoring/app-status" },
      { title: "라이선스 현황", to: "/monitoring/license-status" }
    ],
    submenuProps: { value: "monitoring" },
  },
  { to: "/terms", icon: "custom:terms", title: "약관 관리" },
]);
</script>

<style scoped lang="sass">
</style>
