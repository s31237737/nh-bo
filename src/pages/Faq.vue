<template>
  <PageHeader
    title="자주 묻는 질문"
  />

  <div class="page-contents">
    <div class="search-wrap">
      <v-form>
        <v-select
          v-model="select01"
          label="유형"
          :items="['전체','앱','업스토어','기타']"
        />

        <v-select
          v-model="select02"
          label="공개여부"
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
              to="FaqRegistration"
            >
              등록
            </v-btn>
          </div>
        </div>
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
  router.push('FaqDetails');
  console.log("Clicked item: ", row.item);
}

const dataTableheaders = [
  { title: "순서", key: "order", width: '80px' },
  { title: "등록자", key: "registrant", sortable: false, width: '150px' },
  { title: "제목", key: "title", sortable: false },
  { title: "유형", key: "type", sortable: false, width: '110px' },
  { title: "공개여부", key: "status", sortable: false, width: '110px' },
  { title: "등록일", key: "createdDate", sortable: false, width: '150px' },
];

const dataTableItem = ref([
  {
    order: 1,
    registrant: "김철수",
    title: "앱1",
    type: "기타",
    status: "공개",
    createdDate: "2025.02.01",
    modifiedDate: "2025.02.05",
  },
  {
    order: 2,
    registrant: "박영희",
    title: "앱2",
    type: "앱",
    status: "비공개",
    createdDate: "2025.01.15",
    modifiedDate: "2025.02.02",
  },
  {
    order: 3,
    registrant: "이민호",
    title: "앱3",
    type: "업스토어",
    status: "공개",
    createdDate: "2025.02.10",
    modifiedDate: "2025.02.12",
  },
  {
    order: 4,
    registrant: "정수영",
    title: "앱4",
    type: "기타",
    status: "공개",
    createdDate: "2025.02.11",
    modifiedDate: "2025.02.15",
  },
  {
    order: 5,
    registrant: "최지훈",
    title: "앱5",
    type: "기타",
    status: "비공개",
    createdDate: "2025.01.22",
    modifiedDate: "2025.02.04",
  },
  {
    order: 6,
    registrant: "박지수",
    title: "앱6",
    type: "업스토어",
    status: "공개",
    createdDate: "2025.01.25",
    modifiedDate: "2025.02.06",
  },
  {
    order: 7,
    registrant: "김하늘",
    title: "앱7",
    type: "앱",
    status: "비공개",
    createdDate: "2025.02.03",
    modifiedDate: "2025.02.08",
  },
  {
    order: 8,
    registrant: "송유진",
    title: "앱8",
    type: "기타",
    status: "공개",
    createdDate: "2025.02.13",
    modifiedDate: "2025.02.14",
  },
  {
    order: 9,
    registrant: "조민재",
    title: "앱9",
    type: "기타",
    status: "비공개",
    createdDate: "2025.01.30",
    modifiedDate: "2025.02.01",
  },
  {
    order: 10,
    registrant: "이수정",
    title: "앱10",
    type: "업스토어",
    status: "공개",
    createdDate: "2025.02.05",
    modifiedDate: "2025.02.07",
  },
  {
    order: 11,
    registrant: "서지영",
    title: "앱11",
    type: "기타",
    status: "비공개",
    createdDate: "2025.01.28",
    modifiedDate: "2025.02.04",
  },
  {
    order: 12,
    registrant: "한준호",
    title: "앱12",
    type: "앱",
    status: "공개",
    createdDate: "2025.02.09",
    modifiedDate: "2025.02.11",
  },
  {
    order: 13,
    registrant: "문지후",
    title: "앱13",
    type: "기타",
    status: "비공개",
    createdDate: "2025.01.20",
    modifiedDate: "2025.02.03",
  },
  {
    order: 14,
    registrant: "고윤서",
    title: "앱14",
    type: "업스토어",
    status: "공개",
    createdDate: "2025.02.06",
    modifiedDate: "2025.02.10",
  },
  {
    order: 15,
    registrant: "김유정",
    title: "앱15",
    type: "기타",
    status: "공개",
    createdDate: "2025.02.08",
    modifiedDate: "2025.02.12",
  },
  {
    order: 16,
    registrant: "하민규",
    title: "앱16",
    type: "앱",
    status: "비공개",
    createdDate: "2025.01.18",
    modifiedDate: "2025.02.05",
  },
  {
    order: 17,
    registrant: "정하늘",
    title: "앱17",
    type: "기타",
    status: "공개",
    createdDate: "2025.02.02",
    modifiedDate: "2025.02.06",
  },
  {
    order: 18,
    registrant: "이채원",
    title: "앱18",
    type: "업스토어",
    status: "비공개",
    createdDate: "2025.02.07",
    modifiedDate: "2025.02.09",
  },
  {
    order: 19,
    registrant: "강현주",
    title: "앱19",
    type: "기타",
    status: "공개",
    createdDate: "2025.02.12",
    modifiedDate: "2025.02.14",
  },
  {
    order: 20,
    registrant: "송지훈",
    title: "앱20",
    type: "앱",
    status: "비공개",
    createdDate: "2025.01.29",
    modifiedDate: "2025.02.02",
  }
]);
</script>
