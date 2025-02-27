<template>
  <PageHeader
    title="앱 가이드"
  />

  <div class="page-contents">
    <div class="search-wrap">
      <v-form>
        <v-select
          v-model="select01"
          label="사용가이드 제공 여부"
          :items="['전체','제공','미제공']"
        />

        <v-select
          v-model="select02"
          label="제공 여부"
          :items="['전체','제공','미제공']"
        />

        <Date
          v-model="date"
          label="기간"
        />
        <v-text-field
          v-model="form"
          class="search-inp"
          placeholder="글제목, 등록자, 앱이름을 검색해주세요."
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
              <v-select
                v-model="selectDate"
                :items="['최신순', '업데이트순']"
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
              to="AppGuideRegistration"
            >
              등록
            </v-btn>
          </div>
        </div>
      </template>
      <template #item.guide="{ item }">
        <v-icon
          size="32"
          icon="custom:file"
          :value="item.id"
        />
      </template>
      <template #item.tutorial="{ item }">
        <v-icon
          size="32"
          icon="custom:play"
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
const selectDate = ref(['최신순']);

const pageSort = ref([
  { title: '10개', value: 10 },
  { title: '20개', value: 20 },
  { title: '30개', value: 30 },
  { title: '50개', value: 50 },
  { title: '100개', value: 100 },
]);

const router = useRouter();

const handleClick = (event, row) => {
  router.push('AppGuideDetails');
  console.log("Clicked item: ", row.item);
}

const dataTableheaders = [
  { title: "순서", key: "id", width: '80px'},
  { title: "등록자", key: "registrant", sortable: false, width: '150px' },
  { title: "제목", key: "appTit", sortable: false, },
  { title: "앱이름", key: "appName", sortable: false, width: '120px',},
  { title: "사용가이드", key: "guide", sortable: false, width: '100px', align: 'center'},
  { title: "활용튜토리얼", key: "tutorial", sortable: false, width: '120px', align: 'center' },
  { title: "공개여부", key: "appType", sortable: false, width: '100px'},
  { title: "등록일", key: "createdDate", sortable: false, width: '150px'},
];

const dataTableItem = ref([
  {
    id: 1,
    appCode: "APP001",
    appTit: "테스트 앱 1",
    appName: "육묘대장",
    appType: "공개",
    status: "노출",
    registrant: "홍길동",
    createdDate: "2025.01.01",
    updatedDate: "2025.02.01",
    lastModifiedDate: "2025.02.15",
  },
  {
    id: 2,
    appCode: "APP002",
    appTit: "일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십",
    appName: "육묘대장",
    appType: "공개",
    status: "미노출",
    registrant: "김철수",
    createdDate: "2025.01.10",
    updatedDate: "2025.02.05",
    lastModifiedDate: "2025.02.16",
  },
  {
    id: 3,
    appCode: "APP003",
    appTit: "앱3",
    appName: "육묘대장",
    appType: "공개",
    status: "노출",
    registrant: "이민수",
    createdDate: "2025.01.12",
    updatedDate: "2025.02.03",
    lastModifiedDate: "2025.02.10",
  },
  {
    id: 4,
    appCode: "APP004",
    appTit: "앱4",
    appName: "육묘대장",
    appType: "공개",
    status: "미노출",
    registrant: "박지은",
    createdDate: "2025.01.15",
    updatedDate: "2025.02.07",
    lastModifiedDate: "2025.02.12",
  },
  {
    id: 5,
    appCode: "APP005",
    appTit: "앱5",
    appName: "육묘대장",
    appType: "공개",
    status: "노출",
    registrant: "최영희",
    createdDate: "2025.01.20",
    updatedDate: "2025.02.08",
    lastModifiedDate: "2025.02.14",
  },
  {
    id: 6,
    appCode: "APP006",
    appTit: "앱6",
    appName: "육묘대장",
    appType: "공개",
    status: "미노출",
    registrant: "정호준",
    createdDate: "2025.01.25",
    updatedDate: "2025.02.09",
    lastModifiedDate: "2025.02.13",
  },
  {
    id: 7,
    appCode: "APP007",
    appTit: "앱7",
    appName: "육묘대장",
    appType: "공개",
    status: "노출",
    registrant: "홍길동",
    createdDate: "2025.02.01",
    updatedDate: "2025.02.10",
    lastModifiedDate: "2025.02.18",
  },
  {
    id: 8,
    appCode: "APP008",
    appTit: "앱8",
    appName: "육묘대장",
    appType: "공개",
    status: "미노출",
    registrant: "김철수",
    createdDate: "2025.02.02",
    updatedDate: "2025.02.11",
    lastModifiedDate: "2025.02.17",
  },
  {
    id: 9,
    appCode: "APP009",
    appTit: "앱9",
    appName: "육묘대장",
    appType: "공개",
    status: "노출",
    registrant: "이민수",
    createdDate: "2025.02.05",
    updatedDate: "2025.02.12",
    lastModifiedDate: "2025.02.19",
  },
  {
    id: 10,
    appCode: "APP010",
    appTit: "앱10",
    appName: "육묘대장",
    appType: "공개",
    status: "미노출",
    registrant: "박지은",
    createdDate: "2025.02.08",
    updatedDate: "2025.02.13",
    lastModifiedDate: "2025.02.18",
  },
  {
    id: 11,
    appCode: "APP011",
    appTit: "앱11",
    appName: "육묘대장",
    appType: "공개",
    status: "노출",
    registrant: "최영희",
    createdDate: "2025.02.10",
    updatedDate: "2025.02.14",
    lastModifiedDate: "2025.02.20",
  },
  {
    id: 12,
    appCode: "APP012",
    appTit: "앱12",
    appName: "육묘대장",
    appType: "공개",
    status: "미노출",
    registrant: "정호준",
    createdDate: "2025.02.12",
    updatedDate: "2025.02.15",
    lastModifiedDate: "2025.02.19",
  },
  {
    id: 13,
    appCode: "APP013",
    appTit: "앱13",
    appName: "육묘대장",
    appType: "공개",
    status: "노출",
    registrant: "홍길동",
    createdDate: "2025.02.15",
    updatedDate: "2025.02.16",
    lastModifiedDate: "2025.02.21",
  },
  {
    id: 14,
    appCode: "APP014",
    appTit: "앱14",
    appName: "육묘대장",
    appType: "공개",
    status: "미노출",
    registrant: "김철수",
    createdDate: "2025.02.16",
    updatedDate: "2025.02.17",
    lastModifiedDate: "2025.02.22",
  },
  {
    id: 15,
    appCode: "APP015",
    appTit: "앱15",
    appName: "육묘대장",
    appType: "공개",
    status: "노출",
    registrant: "이민수",
    createdDate: "2025.02.17",
    updatedDate: "2025.02.18",
    lastModifiedDate: "2025.02.23",
  },
  {
    id: 16,
    appCode: "APP016",
    appTit: "앱16",
    appName: "육묘대장",
    appType: "공개",
    status: "미노출",
    registrant: "박지은",
    createdDate: "2025.02.18",
    updatedDate: "2025.02.19",
    lastModifiedDate: "2025.02.24",
  },
  {
    id: 17,
    appCode: "APP017",
    appTit: "앱17",
    appName: "육묘대장",
    appType: "공개",
    status: "노출",
    registrant: "최영희",
    createdDate: "2025.02.20",
    updatedDate: "2025.02.21",
    lastModifiedDate: "2025.02.25",
  },
  {
    id: 18,
    appCode: "APP018",
    appTit: "앱18",
    appName: "육묘대장",
    appType: "공개",
    status: "미노출",
    registrant: "정호준",
    createdDate: "2025.02.22",
    updatedDate: "2025.02.23",
    lastModifiedDate: "2025.02.26",
  },
  {
    id: 19,
    appCode: "APP019",
    appTit: "앱19",
    appName: "육묘대장",
    appType: "공개",
    status: "노출",
    registrant: "홍길동",
    createdDate: "2025.02.25",
    updatedDate: "2025.02.26",
    lastModifiedDate: "2025.02.27",
  },
  {
    id: 20,
    appCode: "APP020",
    appTit: "앱20",
    appName: "육묘대장",
    appType: "공개",
    status: "미노출",
    registrant: "김철수",
    createdDate: "2025.02.28",
    updatedDate: "2025.02.29",
    lastModifiedDate: "2025.03.01",
  },
  {
    id: 21,
    appCode: "APP021",
    appTit: "앱21",
    appName: "육묘대장",
    appType: "공개",
    status: "노출",
    registrant: "이민수",
    createdDate: "2025.03.01",
    updatedDate: "2025.03.02",
    lastModifiedDate: "2025.03.03",
  },
  {
    id: 22,
    appCode: "APP022",
    appTit: "앱22",
    appName: "육묘대장",
    appType: "공개",
    status: "미노출",
    registrant: "박지은",
    createdDate: "2025.03.02",
    updatedDate: "2025.03.03",
    lastModifiedDate: "2025.03.04",
  },
  {
    id: 23,
    appCode: "APP023",
    appTit: "앱23",
    appName: "육묘대장",
    appType: "공개",
    status: "노출",
    registrant: "최영희",
    createdDate: "2025.03.03",
    updatedDate: "2025.03.04",
    lastModifiedDate: "2025.03.05",
  },
  {
    id: 24,
    appCode: "APP024",
    appTit: "앱24",
    appName: "육묘대장",
    appType: "공개",
    status: "미노출",
    registrant: "정호준",
    createdDate: "2025.03.04",
    updatedDate: "2025.03.05",
    lastModifiedDate: "2025.03.06",
  },
  {
    id: 25,
    appCode: "APP025",
    appTit: "앱25",
    appName: "육묘대장",
    appType: "공개",
    status: "노출",
    registrant: "홍길동",
    createdDate: "2025.03.05",
    updatedDate: "2025.03.06",
    lastModifiedDate: "2025.03.07",
  },
  {
    id: 26,
    appCode: "APP026",
    appTit: "앱26",
    appName: "육묘대장",
    appType: "공개",
    status: "미노출",
    registrant: "김철수",
    createdDate: "2025.03.06",
    updatedDate: "2025.03.07",
    lastModifiedDate: "2025.03.08",
  },
  {
    id: 27,
    appCode: "APP027",
    appTit: "앱27",
    appName: "육묘대장",
    appType: "공개",
    status: "노출",
    registrant: "이민수",
    createdDate: "2025.03.07",
    updatedDate: "2025.03.08",
    lastModifiedDate: "2025.03.09",
  },
  {
    id: 28,
    appCode: "APP028",
    appTit: "앱28",
    appName: "육묘대장",
    appType: "공개",
    status: "미노출",
    registrant: "박지은",
    createdDate: "2025.03.08",
    updatedDate: "2025.03.09",
    lastModifiedDate: "2025.03.10",
  },
  {
    id: 29,
    appCode: "APP029",
    appTit: "앱29",
    appName: "육묘대장",
    appType: "공개",
    status: "노출",
    registrant: "최영희",
    createdDate: "2025.03.09",
    updatedDate: "2025.03.10",
    lastModifiedDate: "2025.03.11",
  },
  {
    id: 30,
    appCode: "APP030",
    appTit: "앱30",
    appName: "육묘대장",
    appType: "공개",
    status: "미노출",
    registrant: "정호준",
    createdDate: "2025.03.10",
    updatedDate: "2025.03.11",
    lastModifiedDate: "2025.03.12",
  }
]);
</script>
