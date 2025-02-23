<template>
  <PageHeader title="사용신청 관리" />

  <div class="page-contents">
    <div class="search-wrap">
      <v-form>
        <v-select
          v-model="select"
          label="앱 타입"
          :items="['전체', '타입1', '타입2']"
        />

        <v-select
          v-model="select"
          label="자동사용여부"
          :items="['전체', '상태1', '상태2']"
        />

        <v-text-field
          v-model="form"
          class="search-inp"
          placeholder="앱코드, 앱 이름을 검색해주세요."
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
                :items="['사용자 업데이트 순', '사용순']"
                density="compact"
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
              수동 사용허가
            </v-btn>
            <v-btn
              size="large"
              color="tertiary"
              variant="outlined"
              @click="dialog2 = true"
            >
              자동 사용허가
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

    <!-- 수동 사용허가 alert -->
    <v-dialog
      v-model="dialog1"
      class="popup-sm"
    >
      <v-card>
        <v-card-title>
          <span>수동 사용허가</span>
          <v-btn
            icon="custom:close"
            density="comfortable"
            @click="dialog1 = false"
          />
        </v-card-title>

        <v-card-text>
          <!-- dialog contents -->
          <p class="text-2 alert-txt">
            앱 사용을 수동으로 허용하시겠습니까?
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
    <!-- 자동 사용허가 alert -->
    <v-dialog
      v-model="dialog2"
      class="popup-sm"
    >
      <v-card>
        <v-card-title>
          <span>자동 사용허가</span>
          <v-btn
            icon="custom:close"
            density="comfortable"
            @click="dialog2 = false"
          />
        </v-card-title>

        <v-card-text>
          <!-- dialog contents -->
          <p class="text-2 alert-txt">
            앱 사용을 자동으로 허용하시겠습니까?
          </p>
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
import { useRouter } from "vue-router";

const dialog1 = ref(false);
const dialog2 = ref(false);

// 조회조건
const form = ref("");
const select = ref("전체");
const onAppendClick = () => {
  alert("Append icon clicked!");
};

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

const router = useRouter();

const handleClick = (event, row) => {
  router.push("/ApplyDetails");
  console.log("Clicked item: ", row.item);
};

const dataTableheaders = [
  { title: "순서", key: "id", width: "80px" },
  { title: "앱 코드", key: "appCode", sortable: false, width: "150px" },
  { title: "앱 이름", key: "appName", sortable: false },
  { title: "앱 타입", key: "appType", sortable: false, width: "150px" },
  { title: "자동사용여부", key: "status", sortable: false, width: "150px" },
  { title: "사용자 수", key: "registrant", sortable: false, width: "150px" },
];

const dataTableItem = ref([
  {
    id: 1,
    appCode: "APP001",
    appName: "앱 이름 노출합니다.",
    appType: "모바일",
    status: "수동",
    registrant: "999",
  },
  {
    id: 2,
    appCode: "APP002",
    appName:
      "일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십",
    appType: "웹",
    status: "자동",
    registrant: "999",
  },
  {
    id: 3,
    appCode: "APP003",
    appName: "앱3",
    appType: "대여",
    status: "수동",
    registrant: "999",
  },
  {
    id: 4,
    appCode: "APP004",
    appName: "앱4",
    appType: "대여",
    status: "자동",
    registrant: "999",
  },
  {
    id: 5,
    appCode: "APP005",
    appName: "앱5",
    appType: "대여",
    status: "수동",
    registrant: "999",
  },
  {
    id: 6,
    appCode: "APP006",
    appName: "앱6",
    appType: "대여",
    status: "자동",
    registrant: "999",
  },
  {
    id: 7,
    appCode: "APP007",
    appName: "앱7",
    appType: "대여",
    status: "수동",
    registrant: "999",
  },
  {
    id: 8,
    appCode: "APP008",
    appName: "앱8",
    appType: "대여",
    status: "자동",
    registrant: "999",
  },
  {
    id: 9,
    appCode: "APP009",
    appName: "앱9",
    appType: "모바일",
    status: "자동",
    registrant: "999",
  },
  {
    id: 10,
    appCode: "APP010",
    appName: "앱10",
    appType: "웹",
    status: "수동",
    registrant: "999",
  },
  {
    id: 11,
    appCode: "APP011",
    appName: "앱11",
    appType: "웹",
    status: "수동",
    registrant: "999",
  },
  {
    id: 12,
    appCode: "APP012",
    appName: "앱12",
    appType: "웹",
    status: "수동",
    registrant: "999",
  },
  {
    id: 13,
    appCode: "APP013",
    appName: "앱13",
    appType: "모바일",
    status: "수동",
    registrant: "999",
  },
  {
    id: 14,
    appCode: "APP014",
    appName: "앱14",
    appType: "웹",
    status: "수동",
    registrant: "999",
  },
  {
    id: 15,
    appCode: "APP015",
    appName: "앱15",
    appType: "모바일",
    status: "자동",
    registrant: "999",
  },
  {
    id: 16,
    appCode: "APP016",
    appName: "앱16",
    appType: "웹",
    status: "수동",
    registrant: "999",
  },
  {
    id: 17,
    appCode: "APP017",
    appName: "앱17",
    appType: "모바일",
    status: "수동",
    registrant: "999",
  },
  {
    id: 18,
    appCode: "APP018",
    appName: "앱18",
    appType: "웹",
    status: "수동",
    registrant: "999",
  },
  {
    id: 19,
    appCode: "APP019",
    appName: "앱19",
    appType: "모바일",
    status: "수동",
    registrant: "999",
  },
  {
    id: 20,
    appCode: "APP020",
    appName: "앱20",
    appType: "웹",
    status: "수동",
    registrant: "999",
  },
  {
    id: 21,
    appCode: "APP021",
    appName: "앱21",
    appType: "모바일",
    status: "수동",
    registrant: "999",
  },
  {
    id: 22,
    appCode: "APP022",
    appName: "앱22",
    appType: "웹",
    status: "수동",
    registrant: "999",
  },
  {
    id: 23,
    appCode: "APP023",
    appName: "앱23",
    appType: "모바일",
    status: "수동",
    registrant: "999",
  },
  {
    id: 24,
    appCode: "APP024",
    appName: "앱24",
    appType: "웹",
    status: "수동",
    registrant: "999",
  },
  {
    id: 25,
    appCode: "APP025",
    appName: "앱25",
    appType: "모바일",
    status: "수동",
    registrant: "999",
  },
  {
    id: 26,
    appCode: "APP026",
    appName: "앱26",
    appType: "웹",
    status: "수동",
    registrant: "999",
  },
  {
    id: 27,
    appCode: "APP027",
    appName: "앱27",
    appType: "모바일",
    status: "수동",
    registrant: "999",
  },
  {
    id: 28,
    appCode: "APP028",
    appName: "앱28",
    appType: "웹",
    status: "수동",
    registrant: "999",
  },
  {
    id: 29,
    appCode: "APP029",
    appName: "앱29",
    appType: "모바일",
    status: "수동",
    registrant: "999",
  },
  {
    id: 30,
    appCode: "APP030",
    appName: "앱30",
    appType: "웹",
    status: "수동",
    registrant: "999",
  },
]);
</script>
