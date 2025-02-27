<template>
  <PageHeader title="약관 관리" />

  <div class="page-contents">
    <div class="search-wrap">
      <v-form>
        <v-select
          v-model="select01"
          label="약관종류"
          :items="['전체', '개인정보처리방침']"
        />

        <v-select
          v-model="select02"
          label="공개여부"
          :items="['전체', '공개', '비공개']"
        />

        <DateRange
          v-model="date"
          label="기간"
        />
        <v-text-field
          v-model="form"
          class="search-inp"
          placeholder="약관종류 및 업데이트 버전을 검색해 주세요."
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
              to="TermsRegistration"
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
import DateRange from "@/components/DateRange.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

// 조회조건
const date = ref([new Date(), new Date()]);
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

const pageSort = ref([
  { title: "10개", value: 10 },
  { title: "20개", value: 20 },
  { title: "30개", value: 30 },
  { title: "50개", value: 50 },
  { title: "100개", value: 100 },
]);

const router = useRouter();

const handleClick = (event, row) => {
  router.push("TermsDetails");
  console.log("Clicked item: ", row.item);
};
const dataTableheaders = [
  { title: "순서", key: "id", width: "80px" },
  { title: "약관종류", key: "termsType", sortable: false },
  { title: "업데이트 버전", key: "version", sortable: false, width: "150px" },
  { title: "등록자", key: "registrant", sortable: false, width: "150px" },
  { title: "공개 상태", key: "visibility", sortable: false, width: "120px" },
  { title: "시행일", key: "effectiveDate", sortable: false, width: "230px" },
  { title: "등록일", key: "createdDate", sortable: false, width: "150px" },
];

const dataTableItem = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  termsType: "개인정보처리방침",
  version: `0.${index + 1}`,
  registrant: "김농협",
  visibility: index % 2 === 0 ? "공개" : "비공개",
  effectiveDate: "0000.00.00 ~ 0000.00.00",
  createdDate: "0000.00.00",
}));

</script>
