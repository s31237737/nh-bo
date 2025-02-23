<template>
  <PageHeader title="전시관리" />

  <div class="page-contents">
    <v-data-table
      v-model:page="page"
      :show-select="false"
      :headers="dataTableheaders"
      :items="dataTableItem"
      :items-per-page="itemsPerPage"
      @click:row="handleClick"
    >
      <template #top>
        <div class="table-top">
          <div class="control">
            <strong class="control-total">전체 ({{ dataTableItem.length }})</strong>
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

      <!-- <template #bottom>
         <Pagination
          :total-items="dataTableItem.length"
          :items-per-page="itemsPerPage"
          @paging="page = $event.page"
        />
      </template>-->
    </v-data-table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// 데이터 테이블
const page = ref(1);
const itemsPerPage = ref(10);

const router = useRouter();

const handleClick = (event, row) => {
  const itemId = row.item.id; // 클릭한 항목의 ID 가져오기
  router.push(`/DisplayDetails0${itemId}`)
  console.log("Clicked item: ", row.item);
};

const dataTableheaders = [
  { title: "순서", key: "id", width: "80px" },
  { title: "영역 코드", key: "code", sortable: false , width: "110px"},
  { title: "영역 이름", key: "name", sortable: false,},
  { title: "영역 타입", key: "type", sortable: false, width: "300px" },
  { title: "사용상태", key: "useStatus", sortable: false, width: "120px" },
];

const dataTableItem = ref([
  {
    id: 1,
    code: "B01",
    name: "메인 배너",
    type: "메인 슬라이드 배너(930px X 258px)",
    useStatus: "사용",
  },
  {
    id: 2,
    code: "B02",
    name: "APPs 슬라이드 배너",
    type: "APPs 슬라이드 배너(1920px X 548px)",
    useStatus: "사용",
  },
  {
    id: 3,
    code: "B03",
    name: "APPs 이미지 배너",
    type: "APPs 이미지 배너(1240px X 5140px)",
    useStatus: "사용",
  },
]);
</script>
