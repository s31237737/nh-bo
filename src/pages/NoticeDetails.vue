<template>
  <PageHeader
    title="공지사항 상세"
    prev-link="Notice"
  />

  <div class="page-contents">
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%">
            제목
          </th>
          <td colspan="7">
            공지사항 제목
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            등록자
          </th>
          <td style="width: 15%">
            김농협(05300300)
          </td>
          <th style="width: 10%">
            상단 고정 여부
          </th>
          <td style="width: 15%">
            고정
          </td>
          <th style="width: 10%">
            공개 여부
          </th>
          <td style="width: 15%">
            공개
          </td>
          <th style="width: 10%">
            메인 노출 여부
          </th>
          <td style="width: 15%">
            노출
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            내용
          </th>
          <td colspan="7">
            <v-img
              width="100%"
              aspect-ratio="16/9"
              cover
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            />
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            첨부파일
          </th>
          <td colspan="7">
            공지사항 제목
          </td>
        </tr>
      </tbody>
    </v-table-row>
  </div>
  <div class="page-actions">
    <v-spacer />
    <v-btn
      size="large"
      color="warning"
      variant="outlined"
      prepend-icon="custom:remove"
    >
      삭제
    </v-btn>
    <v-btn
      color="tertiary"
      size="large"
      variant="outlined"
      prepend-icon="custom:edit"
      to=""
    >
      수정
    </v-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

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
  router.push('DisplayRegistrationDetails01');
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
