<template>
  <PageHeader
    title="사용신청 관리"
    prev-link="Apply"
  />
  <v-table-row>
    <tbody>
      <tr>
        <th style="width: 10%">앱 이름</th>
        <td style="width: 23%">육묘대장</td>
        <th style="width: 10%">앱 코드</th>
        <td style="width: 23%">000000</td>
        <th style="width: 10%">자동신청여부</th>
        <td style="width: 24%">수동</td>
      </tr>
      <tr>
        <th style="width: 10%">앱 버전</th>
        <td style="width: 23%">v.0.8</td>
        <th style="width: 10%">앱 타입</th>
        <td style="width: 23%">대여</td>
        <th style="width: 10%">사용신청<br />업데이트 날짜</th>
        <td style="width: 24%">2025.09.06</td>
      </tr>
    </tbody>
  </v-table-row>

  <div class="input-wrap">
    <v-text-field
      v-model="form"
      class="search-inp"
      placeholder="직원명, 개인번호, 사무소명으로 검색해주세요."
      append-inner-icon="custom:search"
      @click:append-inner="onAppendClick"
    />
  </div>

  <div class="page-contents">
    <v-data-table
      v-model="checked"
      v-model:page="page"
      :headers="dataTableheaders"
      :items="dataTableItem"
      :items-per-page="itemsPerPage"
    >
      <template #top>
        <div class="table-top">
          <div class="control">
            <strong class="control-total"
              >전체 ({{ dataTableItem.length }})</strong
            >
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
                :items="['최신순', '사용자 업데이트순', '마지막 수정순']"
                density="compact"
              />
              <v-checkbox label="신청대기중 모아보기" />
            </div>
          </div>
          <div class="btns">
            <v-btn size="large" color="tertiary" variant="outlined">
              사용중단
            </v-btn>
            <v-btn size="large" color="tertiary" variant="outlined">
              사용허가
            </v-btn>
            <v-btn size="large" color="primary" prepend-icon="mdi-plus">
              직원추가
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
const form = ref("");
const select = ref("전체");
const onAppendClick = () => {
  alert("Append icon clicked!");
};

// 데이터 테이블
const page = ref(1);
const itemsPerPage = ref(10);
const selectDate = ref("최신순");
const checked = ref([]);

const pageSort = ref([
  { title: "10개", value: 10 },
  { title: "20개", value: 20 },
  { title: "30개", value: 30 },
  { title: "50개", value: 50 },
  { title: "100개", value: 100 },
]);

const dataTableheaders = [
  { title: "순서", key: "id", width: "80px" },
  { title: "개인번호", key: "privateNum", sortable: false, width: "150px" },
  { title: "직원명", key: "userName", sortable: false },
  { title: "사무소명", key: "officeName", sortable: false, width: "150px" },
  { title: "사용상태", key: "useStatus", sortable: false, width: "150px" },
  { title: "사용기간", key: "useTerm", sortable: false, width: "230px" },
  {
    title: "신청날짜",
    key: "applicationDate",
    sortable: false,
    width: "130px",
  },
];

const dataTableItem = ref([
  {
    id: 1,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 2,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용대기",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 3,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 4,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용대기",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 5,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 6,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 7,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용대기",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 8,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },

  {
    id: 9,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 10,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 11,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 12,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 13,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용대기",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 14,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 15,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 16,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 17,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 18,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 19,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 20,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 21,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 12,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 22,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 23,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },

  {
    id: 24,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 25,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },{
    id: 26,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 27,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 28,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 29,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },
  {
    id: 30,
    privateNum: "123456",
    userName: "김농협",
    officeName: "사무소명",
    useStatus: "사용중",
    useTerm: "2025.09.06 ~ 2025.09.08",
    applicationDate: "2025.09.06",
  },

]);
</script>
