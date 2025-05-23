<template>
  <PageHeader
    title="사용신청 관리"
    prev-link="Apply"
  />

  <div class="page-contents">
    <v-table-row>
      <tbody>
        <tr
          v-for="(row, index) in tableData"
          :key="index"
        >
          <th style="width: 10%">
            {{ row.label1 }}
          </th>
          <td style="width: 23%">
            {{ row.value1 }}
          </td>
          <th style="width: 10%">
            {{ row.label2 }}
          </th>
          <td style="width: 23%">
            {{ row.value2 }}
          </td>
          <th
            style="width: 10%"
            v-html="row.label3"
          />
          <td style="width: 24%">
            {{ row.value3 }}
          </td>
        </tr>
      </tbody>
    </v-table-row>

    <div class="search-wrap-end">
      <v-text-field
        v-model="search"
        class="search-inp"
        placeholder="직원명, 개인번호, 사무소명으로 검색해주세요."
        append-inner-icon="custom:search"
      />
    </div>

    <v-data-table
      v-model="checked"
      v-model:page="page"
      :headers="dataTableheaders"
      :items="dataTableItem"
      :items-per-page="itemsPerPage"
      :search="search"
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
                :items="['사용자 업데이트 순', '사용순']"
                density="compact"
              />
              <v-checkbox
                label="신청대기중 모아보기"
                density="comfortable"
              />
            </div>
          </div>
          <div class="btns">
            <v-btn
              size="large"
              color="tertiary"
              variant="outlined"
              @click="dialog1 = true"
            >
              사용중단
            </v-btn>
            <v-btn
              size="large"
              color="tertiary"
              variant="outlined"
              @click="dialog2 = true"
            >
              사용허가
            </v-btn>
            <v-btn
              size="large"
              color="primary"
              prepend-icon="custom:plus"
            >
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
    <!-- 사용중단 alert -->
    <v-dialog
      v-model="dialog1"
      class="popup-sm"
    >
      <v-card>
        <v-card-title>
          <span>사용중단</span>
          <v-btn
            icon="custom:close"
            density="comfortable"
            @click="dialog1 = false"
          />
        </v-card-title>

        <v-card-text>
          <!-- dialog contents -->
          <p class="alert-txt">
            앱 사용을 중단하시겠습니까?
          </p>
        <!-- // dialog contents -->
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="secondary"
            size="large"
            @click="dialog1 = false"
          >
            취소
          </v-btn>
          <v-btn
            color="primary"
            size="large"
          >
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 사용허가 alert -->
    <v-dialog
      v-model="dialog2"
      class="popup-sm"
    >
      <v-card>
        <v-card-title>
          <span>사용허가</span>
          <v-btn
            icon="custom:close"
            density="comfortable"
            @click="dialog2 = false"
          />
        </v-card-title>

        <v-card-text>
          <!-- dialog contents -->
          <p class="alert-txt">
            앱 사용을 허가하시겠습니까?
          </p>
          <!-- <p class="alert-txt">
            해당 앱은 자동사용허가 상태입니다.<br>
            수동으로 변경하시겠습니까?
          </p> -->
        <!-- // dialog contents -->
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="secondary"
            size="large"
            @click="dialog2 = false"
          >
            취소
          </v-btn>
          <v-btn
            color="primary"
            size="large"
          >
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dialog1 = ref(false);
const dialog2 = ref(false);

// 조회조건
const search = ref("");

const tableData = ref([
  {
    label1: "앱 이름",
    value1: "육묘대장",
    label2: "앱 코드",
    value2: "000000",
    label3: "자동신청여부",
    value3: "수동",
  },
  {
    label1: "앱 버전",
    value1: "v.0.8",
    label2: "앱 타입",
    value2: "대여",
    label3: "사용신청<br />업데이트 날짜",
    value3: "2025.09.06",
  },
]);

// 데이터 테이블
const page = ref(1);
const itemsPerPage = ref(10);
const selectDate = ref("사용자 업데이트 순");
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
  { title: "사무소명", key: "officeName", sortable: false, width: "200px" },
  { title: "사용상태", key: "useStatus", sortable: false, width: "110px" },
  { title: "사용기간", key: "useTerm", sortable: false, width: "250px" },
  { title: "신청날짜", key: "applicationDate", sortable: false, width: "140px" },
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
