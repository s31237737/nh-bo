<template>
  <v-container>
    <div class="image-container">
      <!-- 업로드된 이미지 리스트 -->
      <div
        v-for="(image, index) in imageList"
        :key="index"
        class="image-box"
        :style="{ backgroundImage: `url(${image})` }"
      >
        <!-- 확대 버튼 -->
        <v-btn
          icon="mdi-magnify-plus-outline"
          variant="text"
          class="zoom-btn"
          @click="openPreview(image)"
        />
        <!-- 삭제 버튼 -->
        <v-btn
          icon="mdi-trash-can"
          variant="text"
          class="delete-btn"
          @click="removeImage(index)"
        />
      </div>

      <!-- 새 이미지 추가 버튼 -->
      <div
        class="image-box add-button"
        @click="triggerFileInput"
      >
        <v-icon size="40">
          mdi-plus
        </v-icon>
      </div>
    </div>

    <!-- 숨겨진 파일 입력 -->
    <input
      ref="fileInput"
      type="file"
      multiple
      accept="image/png, image/jpeg"
      hidden
      @input="onFileChange"
    >

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
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const imageList = ref([]);
const fileInput = ref(null);
const previewDialog = ref(false);
const previewImage = ref("");

const onFileChange = (event) => {
  const newFiles = Array.from(event.target.files);
  newFiles.forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      imageList.value.push(e.target.result);
    };
    reader.readAsDataURL(file);
  });

  // 같은 파일을 다시 추가할 수 있도록 input 초기화
  fileInput.value.value = "";
};

const removeImage = (index) => {
  imageList.value.splice(index, 1);
};

const openPreview = (image) => {
  previewImage.value = image;
  previewDialog.value = true;
};

const triggerFileInput = () => {
  fileInput.value.click();
};
</script>

<style scoped>
.image-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.image-box {
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}

.zoom-btn {
  position: absolute;
  bottom: 5px;
  left: 5px;
  color: blue;
}

.delete-btn {
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: red;
}

.add-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  cursor: pointer;
  background: #f9f9f9;
}
</style>
