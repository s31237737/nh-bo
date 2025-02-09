<template>
  <v-navigation-drawer
    width="252"
    permanent
    class="lnb"
  >
    <v-list v-model:opened="open">
      <v-list-item
        link
        prepend-icon="mdi-home"
        title="앱 관리"
        rounded="lg"
      />
      <v-list-item
        link
        prepend-icon="custom:mobile"
        title="앱 관리"
        rounded="lg"
      />

      <v-list-group value="apply">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="custom:apply"
            title="사용신청 관리"
          />
        </template>

        <v-list-item
          v-for="(title, i) in apply"
          :key="i"
          :title="title"
          :value="title"
          rounded="lg"
        />
      </v-list-group>
      <v-list-item
        to="/authority"
        prepend-icon="custom:authority"
        title="권한 관리"
        rounded="lg"
      />
      <v-list-item
        to="/display"
        prepend-icon="custom:display"
        title="전시 관리"
        rounded="lg"
      />
      <v-list-group value="board">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="custom:board"
            title="게시판 관리"
          />
        </template>

        <v-list-item
          v-for="(title, i) in board"
          :key="i"
          :title="title"
          :value="title"
          rounded="lg"
        />
      </v-list-group>
      <v-list-item
        to="/channel"
        prepend-icon="custom:channel"
        title="업스토어 채널 관리"
        rounded="lg"
      />
      <v-list-group value="monitoring">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="custom:monitoring"
            title="모니터링"
          />
        </template>

        <v-list-item
          v-for="(title, i) in monitoring"
          :key="i"
          :title="title"
          :value="title"
          rounded="lg"
        />
      </v-list-group>
      <v-list-item
        to="/terms"
        prepend-icon="custom:terms"
        title="약관 관리"
        rounded="lg"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
const open = ref([null]);
const apply = ref(["사용신청 관리", "사용내역 관리"]);

const board = ref([
  "공지사항",
  "자주 묻는 질문",
  "Q&A",
  "앱 가이드",
  "커뮤니티",
  "불편신고",
]);
const monitoring = ref(["앱 사용현황", "라이선스 현황"]);
</script>

<style scoped lang="sass">
</style>
