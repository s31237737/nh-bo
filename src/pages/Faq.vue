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
  { title: "순서", key: "id", width: '80px'},
  { title: "등록자", key: "registrant", sortable: false, width: '150px' },
  { title: "제목", key: "appName", sortable: false, },
  { title: "유형", key: "appType", sortable: false, width: '110px'},
  { title: "공개여부", key: "status", sortable: false, width: '110px'},
  { title: "등록일", key: "createdDate", sortable: false, width: '150px'},
];

const dataTableItem = ref([
  {
    id: 1,
    appCode: "APP001",
    appName: "테스트 앱 1",
    appType: "업스토어",
    status: "공개",
    registrant: "홍길동",
    createdDate: "YYYY.MM.DD",
    updatedDate: "YYYY.MM.DD",
    lastModifiedDate: "YYYY.MM.DD",
  },
  {
    id: 2,
    appCode: "APP002",
    appName: "일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십",
    appType: "웹",
    status: "비공개",
    registrant: "김철수",
    createdDate: "YYYY.MM.DD",
    updatedDate: "YYYY.MM.DD",
    lastModifiedDate: "25.02.16",
  },
  {
    id: 3,
    appCode: "APP003",
    appName: "앱3",
    appType: "업스토어",
    status: "공개",
    registrant: "이민수",
    createdDate: "YYYY.MM.DD",
    updatedDate: "25.02.03",
    lastModifiedDate: "25.02.10",
  },
  {
    id: 4,
    appCode: "APP004",
    appName: "앱4",
    appType: "웹",
    status: "비공개",
    registrant: "박지은",
    createdDate: "25.01.15",
    updatedDate: "25.02.07",
    lastModifiedDate: "25.02.12",
  },
  {
    id: 5,
    appCode: "APP005",
    appName: "앱5",
    appType: "업스토어",
    status: "공개",
    registrant: "최영희",
    createdDate: "25.01.20",
    updatedDate: "25.02.08",
    lastModifiedDate: "25.02.14",
  },
  {
    id: 6,
    appCode: "APP006",
    appName: "앱6",
    appType: "웹",
    status: "비공개",
    registrant: "정호준",
    createdDate: "25.01.25",
    updatedDate: "25.02.09",
    lastModifiedDate: "25.02.13",
  },
  {
    id: 7,
    appCode: "APP007",
    appName: "앱7",
    appType: "업스토어",
    status: "공개",
    registrant: "홍길동",
    createdDate: "YYYY.MM.DD",
    updatedDate: "25.02.10",
    lastModifiedDate: "25.02.18",
  },
  {
    id: 8,
    appCode: "APP008",
    appName: "앱8",
    appType: "웹",
    status: "비공개",
    registrant: "김철수",
    createdDate: "25.02.02",
    updatedDate: "25.02.11",
    lastModifiedDate: "25.02.17",
  },
  {
    id: 9,
    appCode: "APP009",
    appName: "앱9",
    appType: "업스토어",
    status: "공개",
    registrant: "이민수",
    createdDate: "YYYY.MM.DD",
    updatedDate: "25.02.12",
    lastModifiedDate: "25.02.19",
  },
  {
    id: 10,
    appCode: "APP010",
    appName: "앱10",
    appType: "웹",
    status: "비공개",
    registrant: "박지은",
    createdDate: "25.02.08",
    updatedDate: "25.02.13",
    lastModifiedDate: "25.02.18",
  },
  {
    id: 11,
    appCode: "APP011",
    appName: "앱11",
    appType: "업스토어",
    status: "공개",
    registrant: "최영희",
    createdDate: "25.02.10",
    updatedDate: "25.02.14",
    lastModifiedDate: "25.02.20",
  },
  {
    id: 12,
    appCode: "APP012",
    appName: "앱12",
    appType: "웹",
    status: "비공개",
    registrant: "정호준",
    createdDate: "25.02.12",
    updatedDate: "YYYY.MM.DD",
    lastModifiedDate: "25.02.19",
  },
  {
    id: 13,
    appCode: "APP013",
    appName: "앱13",
    appType: "업스토어",
    status: "공개",
    registrant: "홍길동",
    createdDate: "YYYY.MM.DD",
    updatedDate: "25.02.16",
    lastModifiedDate: "25.02.21",
  },
  {
    id: 14,
    appCode: "APP014",
    appName: "앱14",
    appType: "웹",
    status: "비공개",
    registrant: "김철수",
    createdDate: "25.02.16",
    updatedDate: "25.02.17",
    lastModifiedDate: "25.02.22",
  },
  {
    id: 15,
    appCode: "APP015",
    appName: "앱15",
    appType: "업스토어",
    status: "공개",
    registrant: "이민수",
    createdDate: "25.02.17",
    updatedDate: "25.02.18",
    lastModifiedDate: "25.02.23",
  },
  {
    id: 16,
    appCode: "APP016",
    appName: "앱16",
    appType: "웹",
    status: "비공개",
    registrant: "박지은",
    createdDate: "25.02.18",
    updatedDate: "25.02.19",
    lastModifiedDate: "25.02.24",
  },
  {
    id: 17,
    appCode: "APP017",
    appName: "앱17",
    appType: "업스토어",
    status: "공개",
    registrant: "최영희",
    createdDate: "25.02.20",
    updatedDate: "25.02.21",
    lastModifiedDate: "25.02.25",
  },
  {
    id: 18,
    appCode: "APP018",
    appName: "앱18",
    appType: "웹",
    status: "비공개",
    registrant: "정호준",
    createdDate: "25.02.22",
    updatedDate: "25.02.23",
    lastModifiedDate: "25.02.26",
  },
  {
    id: 19,
    appCode: "APP019",
    appName: "앱19",
    appType: "업스토어",
    status: "공개",
    registrant: "홍길동",
    createdDate: "25.02.25",
    updatedDate: "25.02.26",
    lastModifiedDate: "25.02.27",
  },
  {
    id: 20,
    appCode: "APP020",
    appName: "앱20",
    appType: "웹",
    status: "비공개",
    registrant: "김철수",
    createdDate: "25.02.28",
    updatedDate: "25.02.29",
    lastModifiedDate: "YYYY.MM.DD",
  },
  {
    id: 21,
    appCode: "APP021",
    appName: "앱21",
    appType: "업스토어",
    status: "공개",
    registrant: "이민수",
    createdDate: "YYYY.MM.DD",
    updatedDate: "25.03.02",
    lastModifiedDate: "25.03.03",
  },
  {
    id: 22,
    appCode: "APP022",
    appName: "앱22",
    appType: "웹",
    status: "비공개",
    registrant: "박지은",
    createdDate: "25.03.02",
    updatedDate: "25.03.03",
    lastModifiedDate: "25.03.04",
  },
  {
    id: 23,
    appCode: "APP023",
    appName: "앱23",
    appType: "업스토어",
    status: "공개",
    registrant: "최영희",
    createdDate: "25.03.03",
    updatedDate: "25.03.04",
    lastModifiedDate: "25.03.05",
  },
  {
    id: 24,
    appCode: "APP024",
    appName: "앱24",
    appType: "웹",
    status: "비공개",
    registrant: "정호준",
    createdDate: "25.03.04",
    updatedDate: "25.03.05",
    lastModifiedDate: "25.03.06",
  },
  {
    id: 25,
    appCode: "APP025",
    appName: "앱25",
    appType: "업스토어",
    status: "공개",
    registrant: "홍길동",
    createdDate: "25.03.05",
    updatedDate: "25.03.06",
    lastModifiedDate: "25.03.07",
  },
  {
    id: 26,
    appCode: "APP026",
    appName: "앱26",
    appType: "웹",
    status: "비공개",
    registrant: "김철수",
    createdDate: "25.03.06",
    updatedDate: "25.03.07",
    lastModifiedDate: "25.03.08",
  },
  {
    id: 27,
    appCode: "APP027",
    appName: "앱27",
    appType: "업스토어",
    status: "공개",
    registrant: "이민수",
    createdDate: "25.03.07",
    updatedDate: "25.03.08",
    lastModifiedDate: "25.03.09",
  },
  {
    id: 28,
    appCode: "APP028",
    appName: "앱28",
    appType: "웹",
    status: "비공개",
    registrant: "박지은",
    createdDate: "25.03.08",
    updatedDate: "25.03.09",
    lastModifiedDate: "25.03.10",
  },
  {
    id: 29,
    appCode: "APP029",
    appName: "앱29",
    appType: "업스토어",
    status: "공개",
    registrant: "최영희",
    createdDate: "25.03.09",
    updatedDate: "25.03.10",
    lastModifiedDate: "25.03.11",
  },
  {
    id: 30,
    appCode: "APP030",
    appName: "앱30",
    appType: "웹",
    status: "비공개",
    registrant: "정호준",
    createdDate: "25.03.10",
    updatedDate: "25.03.11",
    lastModifiedDate: "25.03.12",
  }
]);
</script>
