<template>
  <PageHeader title="커뮤니티" />

  <div class="page-contents">
    <div class="search-wrap">
      <v-form>
        <v-select
          v-model="select01"
          label="검토여부"
          :items="['전체', '검토전', '검토중', '반영완료']"
        />

        <v-select
          v-model="select02"
          label="댓글 신고 여부"
          :items="['전체', '신고', '신고없음']"
        />

        <Date
          v-model="date"
          label="기간"
        />
        <v-text-field
          v-model="form"
          class="search-inp"
          placeholder="앱 이름, 등록자를 검색해주세요"
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
            <strong class="control-total">
              전체 ({{ dataTableItem.length }})
            </strong>
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
                :items="['최신순', '댓글순', '좋아요순']"
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
import { ref } from "vue";
import { useRouter } from "vue-router";

// 조회조건
const date = ref(new Date());
const form = ref("");
const select01 = ref("전체");
const select02 = ref("전체");
const onAppendClick = () => {
  alert("Append icon clicked!");
};

// 데이터 테이블
const page = ref(1);
const itemsPerPage = ref(10);
const checked = ref([]);
const selectDate = ref(["최신순"]);

const pageSort = ref([
  { title: "10개", value: 10 },
  { title: "20개", value: 20 },
  { title: "30개", value: 30 },
  { title: "50개", value: 50 },
  { title: "100개", value: 100 },
]);

const router = useRouter();

const handleClick = (event, row) => {
  router.push("CommunityDetails");
  console.log("Clicked item: ", row.item);
};
const dataTableheaders = [
  { title: "순서", key: "id", width: "80px" },
  { title: "등록자", key: "registrant", sortable: false, width: "150px" },
  { title: "등록 앱", key: "appName", sortable: false },
  { title: "검토여부", key: "reviewStatus", sortable: false, width: "150px" },
  { title: "댓글", key: "comments", sortable: false, width: "120px" },
  { title: "신고댓글", key: "reportedComments", sortable: false, width: "120px" },
  { title: "좋아요", key: "likes", sortable: false, width: "120px" },
  { title: "등록일", key: "createdDate", sortable: false, width: "150px" },
];

const dataTableItem = [
  {
    id: 1,
    registrant: "홍길동",
    appName: "육묘대장",
    reviewStatus: "검토중",
    comments: 23,
    reportedComments: 2,
    likes: 10,
    createdDate: "2025.02.26",
  },
  {
    id: 2,
    registrant: "홍길동",
    appName: "육묘대장",
    reviewStatus: "반영완료",
    comments: 23,
    reportedComments: 2,
    likes: 10,
    createdDate: "2025.02.26",
  },
  {
    id: 3,
    registrant: "홍길동",
    appName: "육묘대장",
    reviewStatus: "검토중",
    comments: 23,
    reportedComments: 2,
    likes: 10,
    createdDate: "2025.02.26",
  },
  {
    id: 4,
    registrant: "홍길동",
    appName: "육묘대장",
    reviewStatus: "검토중",
    comments: 15,
    reportedComments: 1,
    likes: 8,
    createdDate: "2025.02.25",
  },
  {
    id: 5,
    registrant: "홍길동",
    appName: "육묘대장",
    reviewStatus: "반영완료",
    comments: 19,
    reportedComments: 3,
    likes: 12,
    createdDate: "2025.02.24",
  },
  {
    id: 6,
    registrant: "김철수",
    appName: "육묘대장",
    reviewStatus: "검토중",
    comments: 21,
    reportedComments: 5,
    likes: 14,
    createdDate: "2025.02.24",
  },
  {
    id: 7,
    registrant: "이영희",
    appName: "육묘대장",
    reviewStatus: "검토중",
    comments: 27,
    reportedComments: 2,
    likes: 9,
    createdDate: "2025.02.23",
  },
  {
    id: 8,
    registrant: "박민수",
    appName: "육묘대장",
    reviewStatus: "반영완료",
    comments: 12,
    reportedComments: 0,
    likes: 7,
    createdDate: "2025.02.23",
  },
  {
    id: 9,
    registrant: "최지우",
    appName: "육묘대장",
    reviewStatus: "검토중",
    comments: 30,
    reportedComments: 4,
    likes: 18,
    createdDate: "2025.02.22",
  },
  {
    id: 10,
    registrant: "오승환",
    appName: "육묘대장",
    reviewStatus: "반영완료",
    comments: 14,
    reportedComments: 1,
    likes: 5,
    createdDate: "2025.02.21",
  },
  {
    id: 11,
    registrant: "홍길동",
    appName: "육묘대장",
    reviewStatus: "검토중",
    comments: 23,
    reportedComments: 2,
    likes: 10,
    createdDate: "2025.02.20",
  },
  {
    id: 12,
    registrant: "김철수",
    appName: "육묘대장",
    reviewStatus: "반영완료",
    comments: 18,
    reportedComments: 3,
    likes: 9,
    createdDate: "2025.02.19",
  },
  {
    id: 13,
    registrant: "이영희",
    appName: "육묘대장",
    reviewStatus: "검토중",
    comments: 25,
    reportedComments: 4,
    likes: 11,
    createdDate: "2025.02.18",
  },
  {
    id: 14,
    registrant: "박민수",
    appName: "육묘대장",
    reviewStatus: "반영완료",
    comments: 20,
    reportedComments: 1,
    likes: 15,
    createdDate: "2025.02.17",
  },
  {
    id: 15,
    registrant: "최지우",
    appName: "육묘대장",
    reviewStatus: "검토중",
    comments: 29,
    reportedComments: 6,
    likes: 22,
    createdDate: "2025.02.16",
  },
  {
    id: 16,
    registrant: "오승환",
    appName: "육묘대장",
    reviewStatus: "반영완료",
    comments: 13,
    reportedComments: 2,
    likes: 6,
    createdDate: "2025.02.15",
  },
  {
    id: 17,
    registrant: "홍길동",
    appName: "육묘대장",
    reviewStatus: "검토중",
    comments: 22,
    reportedComments: 1,
    likes: 9,
    createdDate: "2025.02.14",
  },
  {
    id: 18,
    registrant: "김철수",
    appName: "육묘대장",
    reviewStatus: "반영완료",
    comments: 17,
    reportedComments: 2,
    likes: 8,
    createdDate: "2025.02.13",
  },
  {
    id: 19,
    registrant: "이영희",
    appName: "육묘대장",
    reviewStatus: "검토중",
    comments: 26,
    reportedComments: 3,
    likes: 13,
    createdDate: "2025.02.12",
  },
  {
    id: 20,
    registrant: "박민수",
    appName: "육묘대장",
    reviewStatus: "반영완료",
    comments: 21,
    reportedComments: 2,
    likes: 11,
    createdDate: "2025.02.11",
  },
];
</script>
