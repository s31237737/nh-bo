<template>
  <PageHeader
    title="전시 영역 상세"
    prev-link="Display"
  />

  <div class="page-contents">
    <!-- 전시 영역 정보 -->
    <div class="tit-wrap">
      <strong class="title-2">
        전시 영역 정보
      </strong>
    </div>
    <v-table-row>
      <tbody>
        <tr
          v-for="(row, index) in tableData"
          :key="index"
        >
          <th style="width: 10%">
            {{ row.label }}
          </th>
          <td style="width: 90%">
            {{ row.value }}
          </td>
        </tr>
      </tbody>
    </v-table-row>

    <v-data-table
      v-model="checked"
      v-model:page="page"
      :headers="dataTableheaders"
      :items="dataTableItem"
      :items-per-page="itemsPerPage"
      @click:row="handleClick"
    >
      <template #top>
        <strong class="title-2 mb-6">콘텐츠 리스트</strong>
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
              prepend-icon="custom:plus"
              to="DisplayRegistration03"
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
import { ref } from "vue";
import { useRouter } from 'vue-router';

const tableData = ref([
  {
    label: "영역 이름",
    value: "Apps 이미지 배너",
  },
  {
    label: "영역 코드",
    value: "B03",
  },
  {
    label: "영역 타입",
    value: "이미지 배너(930px X 258px)",
  },
  {
    label: "사용 상태",
    value: "사용",
  },
]);

// 데이터 테이블
const page = ref(1);
const itemsPerPage = ref(10);
const checked = ref([]);

const pageSort = ref([
  { title: "10개", value: 10 },
  { title: "20개", value: 20 },
  { title: "30개", value: 30 },
  { title: "50개", value: 50 },
  { title: "100개", value: 100 },
]);

const router = useRouter();
const handleClick = (event, row) => {
  router.push('DisplayDetails03');
  console.log("Clicked item: ", row.item);
}

const dataTableheaders = [
  { title: "순서", key: "id", width: "80px" },
  { title: "콘텐츠 제목", key: "contetnsTitle", sortable: false},
  { title: "콘텐츠 유형", key: "contetnsType", sortable: false , width: "150px" },
  { title: "사용 상태", key: "useStatus", sortable: false, width: "110px" },
  { title: "노출기간", key: "exposureTerm", sortable: false, width: "250px" },
];

const dataTableItem = ref([
  {
    id: 1,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "앱 추천",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
  {
    id: 2,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "이미지",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
  {
    id: 3,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "앱 추천",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
  {
    id: 4,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "앱 추천",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
  {
    id: 5,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "이미지",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
  {
    id: 6,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "앱 추천",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
  {
    id: 7,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "앱 추천",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
  {
    id: 8,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "앱 추천",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
  {
    id: 9,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "앱 추천",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
  {
    id: 10,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "앱 추천",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
  {
    id: 11,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "앱 추천",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
  {
    id: 12,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "앱 추천",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
  {
    id: 13,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "앱 추천",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
  {
    id: 14,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "앱 추천",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
  {
    id: 15,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "앱 추천",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
  {
    id: 16,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "앱 추천",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
  {
    id: 17,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "앱 추천",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
  {
    id: 18,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "앱 추천",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
  {
    id: 19,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "앱 추천",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
  {
    id: 20,
    contetnsTitle: "콘텐츠명을 노출합니다. 콘텐츠명을 노출합니다.",
    contetnsType: "앱 추천",
    useStatus: "사용",
    exposureTerm: "2025.09.06 ~ 2025.09.08",
  },
]);
</script>
