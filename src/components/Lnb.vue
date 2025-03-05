<template>
  <v-navigation-drawer>
    <v-list>
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
          active-class="is-active"
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
import { ref } from 'vue';


const menuItems = ref([
  { to: "PopList", icon: "mdi-wrench", title: "팝업목록" },
  { to: "/", icon: "custom:mobile", title: "앱 관리" },
  {
    title: "사용신청 관리",
    icon: "custom:apply",
    submenu: [
      { title: "사용신청 관리", to: "Apply" },
      { title: "사용내역 관리", to: "ApplyHistory" }
    ],
    submenuProps: { value: "apply" },
  },
  { to: "Authority", icon: "custom:authority", title: "권한 관리" },
  { to: "Display", icon: "custom:display", title: "전시 관리" },
  {
    title: "게시판 관리",
    icon: "custom:board",
    submenu: [
      { title: "공지사항", to: "Notice" },
      { title: "자주 묻는 질문", to: "Faq" },
      { title: "Q&A", to: "Qna" },
      { title: "앱 가이드", to: "AppGuide" },
      { title: "커뮤니티", to: "Community" },
      { title: "불편신고", to: "Complain" },
    ],
    submenuProps: { value: "board" },
  },
  { to: "Terms", icon: "custom:terms", title: "약관 관리" },
  { to: "", icon: "custom:channel", title: "업스토어 채널 관리" },
  {
    title: "모니터링",
    icon: "custom:monitoring",
    submenu: [
      { title: "활성 사용자 수", to: "" },
      { title: "신규 사용자 유입률", to: "" },
      { title: "사용 빈도", to: "" },
      { title: "재방문율", to: "" },
      { title: "이탈률", to: "" },
      { title: "평균 세션 길이", to: "" },
      { title: "라이선스 현황", to: "" }
    ],
    submenuProps: { value: "monitoring" },
  },
]);

</script>
