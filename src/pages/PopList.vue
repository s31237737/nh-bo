<template>
  <div>
    <div class="d-flex ga-1">
      <v-btn
        v-for="popup in popups"
        :key="popup.name"
        color="primary"
        @click="popOpen(popup.name)"
      >
        {{ popup.label }}
      </v-btn>
    </div>

    <component
      :is="popup.component"
      v-for="popup in popups"
      :key="popup.name"
      v-model="popupVisible[popup.name]"
    />
  </div>
</template>

<script setup>
import { ref,shallowRef  } from 'vue';

import PopupAppType01 from '@/pages/popup/PopupAppType01.vue'
import PopupAppType02 from '@/pages/popup/PopupAppType02.vue'
import PopupAppType03 from '@/pages/popup/PopupAppType03.vue'
import PopupAppType04 from '@/pages/popup/PopupAppType04.vue'
import PopupCategoryTag01 from '@/pages/popup/PopupCategoryTag01.vue'
import PopupCategoryTag02 from '@/pages/popup/PopupCategoryTag02.vue'
import PopupCategoryTag03 from '@/pages/popup/PopupCategoryTag03.vue'
import PopupAppVersion01 from '@/pages/popup/PopupAppVersion01.vue'
import PopupAppVersion02 from '@/pages/popup/PopupAppVersion02.vue'
import PopupAppVersion03 from '@/pages/popup/PopupAppVersion03.vue'
import PopupOftenQuestion from '@/pages/popup/PopupOftenQuestion.vue'
import PopupOftenQuestionDetail from '@/pages/popup/PopupOftenQuestionDetail.vue'

const popups = ref([
  { name: 'PopupAppType01', label: '앱 타입 설정', component: shallowRef(PopupAppType01) },
  { name: 'PopupAppType02', label: '앱 타입 등록', component: shallowRef(PopupAppType02) },
  { name: 'PopupAppType03', label: '앱 타입 수정', component: shallowRef(PopupAppType03) },
  { name: 'PopupAppType04', label: '앱 타입 상세', component: shallowRef(PopupAppType04) },
  { name: 'PopupCategoryTag01', label: '카테고리 태그 설정', component: shallowRef(PopupCategoryTag01) },
  { name: 'PopupCategoryTag02', label: '카테고리 태그 등록', component: shallowRef(PopupCategoryTag02) },
  { name: 'PopupCategoryTag03', label: '카테고리 태그 상세', component: shallowRef(PopupCategoryTag03) },      
  { name: 'PopupAppVersion01 ', label: '앱 버전 관리', component: shallowRef(PopupAppVersion01) },      
  { name: 'PopupAppVersion02 ', label: '앱 버전 등록', component: shallowRef(PopupAppVersion02) },      
  { name: 'PopupAppVersion03 ', label: '앱 버전 상세', component: shallowRef(PopupAppVersion03) },      
  { name: 'PopupOftenQuestion ', label: '자주 묻는 질문', component: shallowRef(PopupOftenQuestion) },      
  { name: 'PopupOftenQuestionDetail ', label: '자주 묻는 질문 상세', component: shallowRef(PopupOftenQuestionDetail) },      
]);


const popupVisible = ref({
  PopupAppType01: false,
  PopupAppType02: false,
  PopupAppType03: false,
  PopupAppType04: false,
  PopupCategoryTag01: false,
  PopupCategoryTag02: false,
  PopupCategoryTag03: false,
  PopupAppVersion01: false,
  PopupAppVersion02: false,
  PopupAppVersion03: false,
  PopupOftenQuestion: false,
  PopupOftenQuestionDetail: false,
});

const popOpen = (name) => {
  popupVisible.value[name] = true;
};
</script>
