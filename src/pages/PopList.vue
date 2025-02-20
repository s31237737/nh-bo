
<template>
  <div>
    <div class="d-flex ga-1">
      <v-btn
        v-for="popup in popups"
        :key="popup.name"
        color="primary"
        @click="popOpen(popup.name)"
      >
        {{ popup.label }} 열기
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

const popups = ref([
  { name: 'popup1', label: '앱 타입 설정', component: shallowRef(PopupAppType01) },
]);

// 팝업 상태를 객체로 관리
const popupVisible = ref({
  popup1: false,
  popup2: false,
  popup3: false,
});

// 특정 팝업 열기
const popOpen = (name) => {
  popupVisible.value[name] = true;
};
</script>
