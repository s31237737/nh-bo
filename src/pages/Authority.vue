<template>
  <PageHeader title="권한관리" />

  <div class="page-contents">
    <div class="search-wrap">
      <v-form>
        <v-select
          v-model="select"
          label="사용 상태"
          :items="['전체', '타입1', '타입2']"
        />

        <v-text-field
          v-model="form"
          class="search-inp"
          placeholder="직원명, 개인번호로 검색해주세요."
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
    <v-row
      no-gutters
      justify="end"
    >
      <v-col cols="auto">
        <v-btn
          size="large"
          variant="outlined"
        >
          권한범위 설정
        </v-btn>
      </v-col>
    </v-row>
    <v-divider class="mt-4" />
    <div class="admin-wrap">
      <v-list class="admin-list">
        <template
          v-for="(item, index) in adminItems"
          :key="index"
        >
          <v-list-subheader v-if="item.type === 'subheader'">
            {{ item.title }}
          </v-list-subheader>

          <!-- 구분선 -->
          <v-divider v-else-if="item.type === 'divider'" />

          <!-- 클릭 가능한 리스트 아이템 -->
          <v-list-item
            v-else
            :class="{ 'selected': adminSelected === item.value }"
            @click="adminClick(item)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>

      <v-data-table
        v-model="checked"
        v-model:page="page"
        :headers="dataTableheaders"
        :items="dataTableItem"
        :items-per-page="itemsPerPage"
        @click:row="handleClick"
      >
        <template #top>
          <div class="flex-column mb-4">
            <p class="text-3">
              비즈니스 관리자
            </p>
            <strong class="title-2"> 김농협 관리자 </strong>
          </div>
          <div class="table-top">
            <div class="control">
              <strong class="control-total">전체 ({{ dataTableItem.length }})</strong>
            </div>
            <div class="btns">
              <v-btn
                size="large"
                color="warning"
                variant="outlined"
                prepend-icon="custom:remove"
                :disabled="!checked.length"
              >
                관리자 삭제
              </v-btn>
              <v-btn
                size="large"
                color="primary"
                prepend-icon="custom:plus"
              >
                관리자 추가
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
  </div>
</template>

<script setup>
import { ref } from "vue";

// 조회조건
const form = ref("");
const select = ref("전체");
const onAppendClick = () => {
  alert("Append icon clicked!");
};

const adminItems = [
  { type: "subheader", title: "슈퍼 관리자" },
  { type: "divider" },
  {
    title: "- 000관리자",
    value: 1,
  },
  { type: "divider" },
  { type: "subheader", title: "시스템 관리자" },
  { type: "divider" },
  {
    title: "- 000관리자",
    value: 2,
  },
  { type: "divider" },
  {
    title: "- 000관리자",
    value: 3,
  },
  { type: "divider" },
  { type: "subheader", title: "비즈니스 관리자" },
  { type: "divider" },
  {
    title: "- 000관리자",
    value: 4,
  },
  { type: "divider" },
  {
    title: "- 000관리자",
    value: 5,
  },
];
const adminSelected = ref(null);
const adminClick = (item) => {
  adminSelected.value = item.value;
   console.log(`클릭됨: ${item.title} (value: ${item.value})`);
};

// 데이터 테이블
const page = ref(1);
const itemsPerPage = ref(10);
const checked = ref([]);

const handleClick = (event, row) => {
  console.log("Clicked item: ", row.item);
};

const dataTableheaders = [
  { title: "순서", key: "id", width: "80px" },
  { title: "직원명", key: "name", sortable: false },
  { title: "사무소명", key: "office", sortable: false, width: "200px" },
  { title: "개인번호", key: "num", sortable: false, width: "200px" },
  { title: "등록일", key: "createdDate", sortable: false, width: "200px" },
];

const dataTableItem = ref([
  {
    id: 1,
    name: "김철수",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.10",
  },
  {
    id: 2,
    name: "이영희",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.15",
  },
  {
    id: 3,
    name: "박민수",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.02.01",
  },
  {
    id: 4,
    name: "최지훈",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.02.10",
  },
  {
    id: 5,
    name: "정지혜",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.20",
  },
  {
    id: 6,
    name: "이수진",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.02.05",
  },
  {
    id: 7,
    name: "김동희",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.12",
  },
  {
    id: 8,
    name: "임성민",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.02.02",
  },
  {
    id: 9,
    name: "황정우",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.18",
  },
  {
    id: 10,
    name: "오민석",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.25",
  },
  {
    id: 11,
    name: "윤지혜",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.02.07",
  },
  {
    id: 12,
    name: "고정호",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.30",
  },
  {
    id: 13,
    name: "전지영",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.02.08",
  },
  {
    id: 14,
    name: "한서진",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.28",
  },
  {
    id: 15,
    name: "곽지호",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.02.01",
  },
  {
    id: 16,
    name: "임지훈",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.22",
  },
  {
    id: 17,
    name: "김수빈",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.02.03",
  },
  {
    id: 18,
    name: "박지성",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.02.09",
  },
  {
    id: 19,
    name: "오준호",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.17",
  },
  {
    id: 20,
    name: "정한나",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.14",
  },
]);
</script>
