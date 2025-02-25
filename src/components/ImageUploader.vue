<template>
  <!-- <ImageUploader
    :multiple="true"
    :images="imageList"
    :readonly="true"
    :draggable="true"
    :max-count="3"
    @update:images="updateImages"
  /> -->
  <div
    class="image-uploader"
    :class="$attrs.class"
  >
    <!-- 다건등록이면서 드래그 가능할 경우 VueDraggable 적용 -->
    <VueDraggable
      v-if="multiple && draggable"
      v-model="imageList"
      class="draggable"
      @end="updateImageOrder"
    >
      <div
        v-for="(image, index) in imageList"
        :key="index"
        class="image-box"
        :style="{ backgroundImage: `url(${image})` }"
      >
        <div class="btns">
          <v-btn
            icon="custom:zoom"
            class="icon-md"
            @click="openPreview(image)"
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
    </VueDraggable>

    <!-- 일반적인 이미지 리스트 (읽기 전용이 아니거나 드래그가 불가능할 때) -->
    <template v-else-if="readonly || multiple">
      <div
        v-for="(image, index) in imageList"
        :key="index"
        class="image-box"
        :style="{ backgroundImage: `url(${image})` }"
      >
        <div class="btns">
          <v-btn
            icon="custom:zoom"
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
            icon="custom:zoom"
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

    <!-- 새 이미지 추가 버튼 -->
    <div
      v-if="!readonly && (multiple || imageList.length === 0) && imageList.length < maxCount"
      class="image-box add-button"
      @click="triggerFileInput"
    >
      <v-icon size="24">
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
    class="popup-lg"
  >
    <v-card>
      <v-card-title>
        <span>preview</span>
        <v-btn
          icon="custom:close"
          variant="text"
          density="comfortable"
          @click="previewDialog = false"
        />
      </v-card-title>
      <v-card-text>
        <v-img
          :src="previewImage"
          contain
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, defineProps, watch, defineEmits } from "vue";
import { VueDraggable } from 'vue-draggable-plus'

const props = defineProps({

  multiple: { type: Boolean, default: false }, // 다중 이미지 여부
  readonly: { type: Boolean, default: false }, // 읽기 전용 모드
  draggable: { type: Boolean, default: false }, // 드래그 가능 여부
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

// 이미지 순서 변경 시 부모에게 업데이트 이벤트 전송
const updateImageOrder = () => {
  emit("update:images", imageList.value);
};
</script>
