<template>
  <div class="image-uploader">
    <!-- 업로드된 이미지 리스트 -->
    <template v-if="readonly || multiple">
      <div
        v-for="(image, index) in imageList"
        :key="index"
        class="image-box"
        :style="{ backgroundImage: `url(${image})` }"
      >
        <div class="btns">
          <v-btn
            icon="custom:search-plus"
            class="icon-md"
            @click="openPreview(image)"
          />
          <v-btn
            v-if="!readonly"
            icon="custom:remove"
            class="icon-md"
            variant="text"
            color="warning"
            @click="removeImage(index)"
          />
        </div>
      </div>
    </template>
    <template v-else>
      <div
        v-if="imageList.length > 0"
        class="image-box"
        :style="{ backgroundImage: `url(${imageList[0]})` }"
      >
        <div
          v-if="!readonly"
          class="btns"
        >
          <v-btn
            icon="custom:search-plus"
            class="icon-md"
            @click="openPreview(imageList[0])"
          />
          <v-btn
            icon="custom:remove"
            class="icon-md"
            variant="text"
            color="warning"
            @click="removeImage(0)"
          />
        </div>
      </div>
    </template>

    <!-- 새 이미지 추가 버튼 (readonly=false이고, 조건 충족 시 보임) -->
    <div
      v-if="!readonly && (multiple || imageList.length === 0) && imageList.length < maxCount"
      class="image-box add-button"
      @click="triggerFileInput"
    >
      <v-icon size="40">
        custom:plus
      </v-icon>
      <input
        v-if="!readonly"
        ref="fileInput"
        type="file"
        :multiple="multiple"
        accept="image/png, image/jpeg"
        hidden
        @input="onFileChange"
      >
    </div>
  </div>

  <!-- 확대된 이미지 다이얼로그 -->
  <v-dialog
    v-model="previewDialog"
    max-width="500"
  >
    <v-card>
      <v-img
        :src="previewImage"
        contain
      />
      <v-card-actions>
        <v-spacer />
        <v-btn
          text="닫기"
          @click="previewDialog = false"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, defineProps, watch, defineEmits } from "vue";

const props = defineProps({
  multiple: { type: Boolean, default: false }, // 다중 이미지 여부
  readonly: { type: Boolean, default: false }, // 읽기 전용 모드
  images: { type: Array, default: () => [] }, // 초기 이미지 목록
  maxCount: { type: Number, default: 5 } // 최대 이미지 개수 (기본값 5개)
});

const emit = defineEmits(["update:images"]);

const imageList = ref([...props.images]);
const fileInput = ref(null);
const previewDialog = ref(false);
const previewImage = ref("");

// props.images 변경 시 imageList 업데이트
watch(() => props.images, (newImages) => {
  imageList.value = [...newImages];
}, { deep: true });

const onFileChange = (event) => {
  if (props.readonly) return; // 읽기 전용 모드에서는 동작하지 않음

  const newFiles = Array.from(event.target.files);
  newFiles.forEach((file) => {
    if (imageList.value.length >= props.maxCount) return; // 최대 개수 초과 방지

    const reader = new FileReader();
    reader.onload = (e) => {
      if (!props.multiple) {
        imageList.value = [e.target.result]; // 단일 파일 모드에서는 하나만 유지
      } else {
        imageList.value.push(e.target.result);
      }
      emit("update:images", imageList.value); // 부모 컴포넌트로 업데이트 이벤트 전달
    };
    reader.readAsDataURL(file);
  });

  fileInput.value.value = ""; // 같은 파일을 다시 추가할 수 있도록 초기화
};

const removeImage = (index) => {
  if (props.readonly) return; // 읽기 전용 모드에서는 삭제 불가
  imageList.value.splice(index, 1);
  emit("update:images", imageList.value); // 부모 컴포넌트로 업데이트 이벤트 전달
};

const openPreview = (image) => {
  previewImage.value = image;
  previewDialog.value = true;
};

const triggerFileInput = () => {
  if (!props.readonly) fileInput.value.click();
};
</script>
