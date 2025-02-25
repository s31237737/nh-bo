<template>
  <PageHeader
    title="공지사항"
  />

  <div class="page-contents">
    <div class="search-wrap">
      <v-form>
        <v-select
          v-model="select01"
          label="고정 여부"
          :items="['전체','고정','미설정']"
        />

        <v-select
          v-model="select02"
          label="공개 여부"
          :items="['전체','공개','비공개']"
        />

        <Date
          v-model="date"
          label="기간"
        />
        <v-text-field
          v-model="form"
          class="search-inp"
          placeholder="글제목, 등록자를 검색해주세요."
          append-inner-icon="custom:search"
          @click:append-inner="onAppendClick"
        />

        <v-btn
          color="tertiary"
          variant="outlined"
          icon="custom:refresh"
        />
      </v-form>
    </div>

    <v-data-table
      v-model="checked"
      v-model:page="page"
      :headers="dataTableheaders"
      :items="dataTableItem"
      :items-per-page="itemsPerPage"
      @click:row="handleClick"
    >
      <template #top>
        <div class="table-top">
          <div class="control">
            <strong class="control-total">전체 ({{ dataTableItem.length }})</strong>
            <div class="control-input">
              <v-select
                v-model="itemsPerPage"
                :items="pageSort"
                item-title="title"
                item-value="value"
                density="compact"
              />
              <v-checkbox
                label="메인노출 공지사항만 모아보기"
                density="comfortable"
              />
            </div>
          </div>
          <div class="btns">
            <v-btn
              size="large"
              color="warning"
              variant="outlined"
              prepend-icon="custom:remove"
              :disabled="!checked.length"
            >
              삭제
            </v-btn>
            <v-btn
              size="large"
              color="primary"
              to="NoticeRegistration"
            >
              등록
            </v-btn>
          </div>
        </div>
      </template>
      <template #item.file="{ item }">
        <v-icon
          size="32"
          icon="custom:file"
          :value="item.id"
        />
      </template>
      <template #no-data>
        <v-empty-state
          text="검색결과가 없습니다."
          icon="custom:warning"
          size="60"
        />
      </template>

      <template #bottom>
        <Pagination
          :total-items="dataTableItem.length"
          :items-per-page="itemsPerPage"
          @paging="page = $event.page"
        />
      </template>
    </v-data-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 조회조건
const date = ref(new Date());
const form = ref('');
const select01 = ref('전체');
const select02 = ref('전체');
const onAppendClick = () => {
  alert('Append icon clicked!');
}

// 데이터 테이블
const page = ref(1);
const itemsPerPage = ref(10);
const checked = ref([]);

const pageSort = ref([
  { title: '10개', value: 10 },
  { title: '20개', value: 20 },
  { title: '30개', value: 30 },
  { title: '50개', value: 50 },
  { title: '100개', value: 100 },
]);

const router = useRouter();

const handleClick = (event, row) => {
  router.push('NoticeDetails');
  console.log("Clicked item: ", row.item);
}

const dataTableheaders = [
  { title: "순서", key: "id", width: '80px' },
  { title: "등록자", key: "registrant", sortable: false, width: '150px' },
  { title: "제목", key: "appName", sortable: false },
  { title: "파일", key: "file", sortable: false, width: '76px', align: 'center' },
  { title: "고정여부", key: "fixedStatus", sortable: false, width: '110px' },
  { title: "공개여부", key: "visibility", sortable: false, width: '110px' },
  { title: "메인노출여부", key: "mainExposure", sortable: false, width: '110px' },
  { title: "등록일", key: "createdDate", sortable: false, width: '150px' }
];

const dataTableItem = ref([
  {
    id: 1,
    registrant: "홍길동",
    appName: "테스트 앱 1",
    file: "파일명1",
    fixedStatus: "고정",
    visibility: "공개",
    mainExposure: "노출",
    createdDate: "2025.01.01",
    updatedDate: "2025.02.01",
    lastModifiedDate: "2025.02.15"
  },
  {
    id: 2,
    registrant: "김철수",
    appName: "앱2",
    file: "파일명2",
    fixedStatus: "비고정",
    visibility: "비공개",
    mainExposure: "비노출",
    createdDate: "2025.01.10",
    updatedDate: "2025.02.05",
    lastModifiedDate: "2025.02.10"
  },
  {
    id: 3,
    registrant: "박영희",
    appName: "앱3",
    file: "파일명3",
    fixedStatus: "고정",
    visibility: "공개",
    mainExposure: "노출",
    createdDate: "2025.02.05",
    updatedDate: "2025.02.07",
    lastModifiedDate: "2025.02.12"
  },
  {
    id: 4,
    registrant: "이민호",
    appName: "앱4",
    file: "파일명4",
    fixedStatus: "비고정",
    visibility: "공개",
    mainExposure: "노출",
    createdDate: "2025.02.08",
    updatedDate: "2025.02.10",
    lastModifiedDate: "2025.02.14"
  },
  {
    id: 5,
    registrant: "정수영",
    appName: "앱5",
    file: "파일명5",
    fixedStatus: "고정",
    visibility: "비공개",
    mainExposure: "비노출",
    createdDate: "2025.02.12",
    updatedDate: "2025.02.14",
    lastModifiedDate: "2025.02.16"
  },
  {
    id: 6,
    registrant: "최지훈",
    appName: "앱6",
    file: "파일명6",
    fixedStatus: "비고정",
    visibility: "공개",
    mainExposure: "노출",
    createdDate: "2025.01.20",
    updatedDate: "2025.02.05",
    lastModifiedDate: "2025.02.11"
  },
  {
    id: 7,
    registrant: "박지수",
    appName: "앱7",
    file: "파일명7",
    fixedStatus: "고정",
    visibility: "비공개",
    mainExposure: "비노출",
    createdDate: "2025.02.01",
    updatedDate: "2025.02.06",
    lastModifiedDate: "2025.02.09"
  },
  {
    id: 8,
    registrant: "김하늘",
    appName: "앱8",
    file: "파일명8",
    fixedStatus: "비고정",
    visibility: "공개",
    mainExposure: "노출",
    createdDate: "2025.02.14",
    updatedDate: "2025.02.17",
    lastModifiedDate: "2025.02.18"
  },
  {
    id: 9,
    registrant: "송유진",
    appName: "앱9",
    file: "파일명9",
    fixedStatus: "고정",
    visibility: "비공개",
    mainExposure: "비노출",
    createdDate: "2025.01.25",
    updatedDate: "2025.02.07",
    lastModifiedDate: "2025.02.12"
  },
  {
    id: 10,
    registrant: "조민재",
    appName: "앱10",
    file: "파일명10",
    fixedStatus: "비고정",
    visibility: "공개",
    mainExposure: "노출",
    createdDate: "2025.01.30",
    updatedDate: "2025.02.03",
    lastModifiedDate: "2025.02.06"
  },
  {
    id: 11,
    registrant: "이수정",
    appName: "앱11",
    file: "파일명11",
    fixedStatus: "고정",
    visibility: "비공개",
    mainExposure: "비노출",
    createdDate: "2025.02.02",
    updatedDate: "2025.02.04",
    lastModifiedDate: "2025.02.08"
  },
  {
    id: 12,
    registrant: "서지영",
    appName: "앱12",
    file: "파일명12",
    fixedStatus: "비고정",
    visibility: "공개",
    mainExposure: "노출",
    createdDate: "2025.01.18",
    updatedDate: "2025.02.01",
    lastModifiedDate: "2025.02.04"
  },
  {
    id: 13,
    registrant: "한준호",
    appName: "앱13",
    file: "파일명13",
    fixedStatus: "고정",
    visibility: "비공개",
    mainExposure: "비노출",
    createdDate: "2025.01.22",
    updatedDate: "2025.02.08",
    lastModifiedDate: "2025.02.13"
  },
  {
    id: 14,
    registrant: "문지후",
    appName: "앱14",
    file: "파일명14",
    fixedStatus: "비고정",
    visibility: "공개",
    mainExposure: "노출",
    createdDate: "2025.02.03",
    updatedDate: "2025.02.06",
    lastModifiedDate: "2025.02.09"
  },
  {
    id: 15,
    registrant: "고윤서",
    appName: "앱15",
    file: "파일명15",
    fixedStatus: "고정",
    visibility: "비공개",
    mainExposure: "비노출",
    createdDate: "2025.02.07",
    updatedDate: "2025.02.09",
    lastModifiedDate: "2025.02.14"
  },
  {
    id: 16,
    registrant: "김유정",
    appName: "앱16",
    file: "파일명16",
    fixedStatus: "비고정",
    visibility: "공개",
    mainExposure: "노출",
    createdDate: "2025.02.06",
    updatedDate: "2025.02.08",
    lastModifiedDate: "2025.02.12"
  },
  {
    id: 17,
    registrant: "하민규",
    appName: "앱17",
    file: "파일명17",
    fixedStatus: "고정",
    visibility: "비공개",
    mainExposure: "비노출",
    createdDate: "2025.01.28",
    updatedDate: "2025.02.02",
    lastModifiedDate: "2025.02.06"
  },
  {
    id: 18,
    registrant: "정하늘",
    appName: "앱18",
    file: "파일명18",
    fixedStatus: "비고정",
    visibility: "공개",
    mainExposure: "노출",
    createdDate: "2025.01.25",
    updatedDate: "2025.02.03",
    lastModifiedDate: "2025.02.05"
  },
  {
    id: 19,
    registrant: "이채원",
    appName: "앱19",
    file: "파일명19",
    fixedStatus: "고정",
    visibility: "비공개",
    mainExposure: "비노출",
    createdDate: "2025.01.17",
    updatedDate: "2025.02.04",
    lastModifiedDate: "2025.02.07"
  },
  {
    id: 20,
    registrant: "강현주",
    appName: "앱20",
    file: "파일명20",
    fixedStatus: "비고정",
    visibility: "공개",
    mainExposure: "노출",
    createdDate: "2025.02.10",
    updatedDate: "2025.02.12",
    lastModifiedDate: "2025.02.14"
  }
]);

</script>
