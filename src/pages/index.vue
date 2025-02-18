<template>
  <PageHeader
    title="앱 관리 작업중 미완성"
  />

  <div class="search-wrap">
    <v-form>
      <v-select
        v-model="select"
        label="앱 타입"
        :items="['전체','타입1','타입2']"
      />

      <v-select
        v-model="select"
        label="상태"
        :items="['전체','상태1','상태2']"
      />

      <Date v-model="date" />

      <v-text-field
        v-model="form"
        class="search-inp"
        placeholder="전체 앱 이름, 코드를 검색해주세요."
        append-inner-icon="custom:search"
        clearable
        @click:append-inner="onAppendClick"
      />

      <v-btn
        color="tertiary"
        variant="outlined"
        icon="custom:refresh"
      />
    </v-form>
  </div>

  <div class="table-top">
    <div class="control">
      <strong class="control-total">전체 (6,102)</strong>
      <div class="control-input">
        <v-select
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        />
        <v-select
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        />
      </div>
    </div>
    <div class="btns">
      <v-btn
        size="large"
        color="tertiary"
        variant="outlined"
      >
        앱 타입 설정
      </v-btn>
      <v-btn
        size="large"
        color="tertiary"
        variant="outlined"
      >
        카테고리 태그 설정
      </v-btn>
      <v-btn
        size="large"
        color="warning"
        variant="outlined"
        prepend-icon="custom:remove"
      >
        삭제
      </v-btn>
      <v-btn
        size="large"
        color="primary"
      >
        등록
      </v-btn>
    </div>
  </div>
  <v-data-table
    v-model="checked"
    :headers="headers"
    :items="apps"
    show-select
    hover
    hide-default-footer
  >
    <template #item.appName="{ item }">
      <div class="text-ellipsis">
        {{ item.appName }}
      </div>
    </template>
    <template #no-data>
      <v-empty-state
        text="검색결과가 없습니다."
        icon="custom:warning"
        size="60"
      />
    </template>
  </v-data-table>
  <Pagination
    :total-items="80"
    :items-per-page="10"
    :current-page="3"
  />
</template>

<script setup>
import { ref } from 'vue';
const date = ref(new Date());
const form = ref('');
const select = ref('전체');

const onAppendClick = () => {
  alert('Append icon clicked!');
}

const checked = ref([]);

const headers = [
  { title: "순서", key: "id", width: '80px'},
  { title: "앱 코드", key: "appCode", sortable: false, width: '110px'},
  { title: "앱 이름", key: "appName", sortable: false, minWidth: '500px' },
  { title: "앱 타입", key: "appType", sortable: false, width: '110px'},
  { title: "상태", key: "status", sortable: false, width: '110px'},
  { title: "등록자", key: "registrant", sortable: false, width: '150px' },
  { title: "등록 날짜", key: "createdDate", sortable: false, width: '150px'},
  { title: "업데이트 날짜", key: "updatedDate", sortable: false, width: '150px' },
  { title: "마지막 수정 날짜", key: "lastModifiedDate", sortable: false, width: '150px' },
];

const apps = ref([
  {
    id: 1,
    appCode: "APP001",
    appName: "테스트 앱 1",
    appType: "모바일",
    status: "활성",
    registrant: "홍길동",
    createdDate: "2024-01-01",
    updatedDate: "2024-02-01",
    lastModifiedDate: "2024-02-15",
  },
  {
    id: 2,
    appCode: "APP002",
    appName: "일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십",
    appType: "웹",
    status: "비활성",
    registrant: "김철수",
    createdDate: "2024-01-10",
    updatedDate: "2024-02-05",
    lastModifiedDate: "2024-02-16",
  },
]);
</script>
