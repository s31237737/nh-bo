<template>
  <v-dialog v-model="visible" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <slot></slot> <!-- 내용은 부모 컴포넌트에서 전달 -->
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" @click="closeDialog">확인</v-btn>
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);  // 팝업 상태 (열림/닫힘)
const title = ref('');       // 팝업 제목

// 팝업 열기 함수
const openDialog = (popupTitle) => {
  title.value = popupTitle;
  visible.value = true;
};

// 팝업 닫기 함수
const closeDialog = () => {
  visible.value = false;
};

defineExpose({
  openDialog,
  closeDialog,
});
</script>




<template>
  <v-btn @click="openFirstPopup">첫 번째 팝업 열기</v-btn>
  <v-btn @click="openSecondPopup">두 번째 팝업 열기</v-btn>
  <v-btn @click="openThirdPopup">세 번째 팝업 열기</v-btn>

  <!-- 각 팝업 컴포넌트를 임포트하고, 참조를 통해 제어 -->
  <Popup ref="popup1">
    <template #default>
      <div>첫 번째 팝업의 내용</div>
    </template>
  </Popup>

  <Popup2 ref="popup2">
    <template #default>
      <div>두 번째 팝업의 내용</div>
    </template>
  </Popup2>

  <Popup3 ref="popup3">
    <template #default>
      <div>세 번째 팝업의 내용</div>
    </template>
  </Popup3>
</template>

<script setup>
import { ref } from 'vue';
import Popup from './Popup.vue';     // 첫 번째 팝업 임포트
import Popup2 from './Popup2.vue';   // 두 번째 팝업 임포트
import Popup3 from './Popup3.vue';   // 세 번째 팝업 임포트

// 각 팝업의 참조
const popup1 = ref(null);
const popup2 = ref(null);
const popup3 = ref(null);

// 각 팝업을 여는 함수들
const openFirstPopup = () => {
  popup1.value.openDialog('첫 번째 팝업');
};

const openSecondPopup = () => {
  popup2.value.openDialog('두 번째 팝업');
};

const openThirdPopup = () => {
  popup3.value.openDialog('세 번째 팝업');
};
</script>
