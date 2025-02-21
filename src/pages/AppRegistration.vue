<template>
  <PageHeader
    title="앱 등록"
    prev-link="/"
  />

  <div class="tit-wrap">
    <strong class="title-2">
      앱 정보
    </strong>
  </div>
  <v-table-row>
    <tbody>
      <tr>
        <th style="width: 10%;">
          앱 이름 <i class="required" />
        </th>
        <td style="width: 40%;">
          <v-text-field placeholder="앱 이름을 입력해주세요." />
        </td>
        <th
          style="width: 10%;"
          rowspan="3"
        >
          앱 아이콘
        </th>
        <td
          rowspan="3"
          style="width: 40%;"
        >
          A
        </td>
      </tr>
      <tr>
        <th style="width: 10%;">
          앱 코드
        </th>
        <td style="width: 40%;">
          APP001
        </td>
      </tr>
      <tr>
        <th style="width: 10%;">
          앱 타입 <i class="required" />
        </th>
        <td style="width: 40%;">
          <v-select
            v-model="select"
            :items="['대여']"
          />
        </td>
      </tr>
      <tr>
        <th style="width: 10%;">
          바로가기 링크 <i class="required" />
        </th>
        <td>
          <v-text-field placeholder="앱 바로가기, QR코드 링크를 입력해주세요." />
        </td>
        <th
          rowspan="3"
          style="width: 10%;"
        >
          메인 추천 이미지
        </th>
        <td
          style="width: 40%;"
          rowspan="3"
        >
          A
        </td>
      </tr>
      <tr>
        <th style="width: 10%;">
          사용 가이드 링크
        </th>
        <td style="width: 40%;">
          <v-text-field placeholder="사용 가이드 링크를 입력해주세요." />
        </td>
      </tr>
      <tr>
        <th style="width: 10%;">
          플래그
        </th>
        <td style="width: 40%;">
          <div class="d-flex ga-3">
            <v-checkbox
              v-model="flag1"
              label="추천"
            />
            <v-checkbox
              v-model="flag2"
              label="NEW"
            />
            <v-checkbox
              v-model="flag3"
              label="HOT"
            />
          </div>
        </td>
      </tr>
      <tr>
        <th style="width: 10%;">
          추천 정보
        </th>
        <td colspan="3">
          <div class="d-flex ga-3">
            <v-checkbox
              v-model="recomm1"
              label="앱 타입"
            />
            <v-checkbox
              v-model="recomm2"
              label="사용자 수"
            />
            <v-checkbox
              v-model="recomm3"
              label="좋아요 수"
            />
            <v-checkbox
              v-model="recomm4"
              label="카테고리 1"
            />
            <v-checkbox
              v-model="recomm5"
              label="카테고리 2"
            />
          </div>
        </td>
      </tr>
      <tr>
        <th style="width: 10%;">
          앱 사용 시기 <i class="required" />
        </th>
        <td colspan="3">
          <div class="d-flex ga-3">
            <v-checkbox
              v-model="month"
              label="상시"
            />
            <v-checkbox
              v-model="month1"
              label="1월"
            />
            <v-checkbox
              v-model="month2"
              label="2월"
            />
            <v-checkbox
              v-model="month3"
              label="3월"
            />
            <v-checkbox
              v-model="month4"
              label="4월"
            />
            <v-checkbox
              v-model="month5"
              label="5월"
            />
            <v-checkbox
              v-model="month6"
              label="6월"
            />
            <v-checkbox
              v-model="month7"
              label="7월"
            />
            <v-checkbox
              v-model="month8"
              label="8월"
            />
            <v-checkbox
              v-model="month9"
              label="9월"
            />
            <v-checkbox
              v-model="month10"
              label="10월"
            />
            <v-checkbox
              v-model="month11"
              label="11월"
            />
            <v-checkbox
              v-model="month12"
              label="12월"
            />
          </div>
        </td>
      </tr>
      <tr>
        <th style="width: 10%;">
          간단 설명 <i class="required" />
        </th>
        <td colspan="3">
          <v-textarea
            placeholder="간단 설명을 입력해주세요."
            :counter="70"
            :persistent-counter="true"
          />
        </td>
      </tr>
      <tr>
        <th style="width: 10%;">
          앱 상태
        </th>
        <td colspan="3">
          <v-switch
            v-model="isSwitch"
          />
        </td>
      </tr>
    </tbody>
  </v-table-row>

  <div class="tit-wrap">
    <strong class="title-2">
      카테고리 태그
    </strong>
  </div>
  <v-table-row>
    <tbody>
      <tr>
        <th style="width: 10%;">
          카테고리명
        </th>
        <td>
          <v-chip-group
            selected-class="acitive"
            multiple
          >
            <v-chip
              v-for="tag in tags"
              :key="tag"
              :text="tag"
            />
          </v-chip-group>
        </td>
      </tr>
      <tr>
        <th style="width: 10%;">
          카테고리명
        </th>
        <td>
          <v-chip-group
            selected-class="acitive"
            multiple
          >
            <v-chip
              v-for="tag in tags"
              :key="tag"
              :text="tag"
            />
          </v-chip-group>
        </td>
      </tr>
    </tbody>
  </v-table-row>

  <div class="tit-wrap">
    <strong class="title-2">
      상세 이미지/영상
    </strong>
  </div>
  <v-table-row>
    <tbody>
      <tr>
        <th
          style="width: 10%;"
          rowspan="2"
        >
          영상
        </th>
        <td>
          <v-text-field
            v-model="youtubeLink"
            class="prepend-text"
            placeholder="유튜브 영상 링크를 입력해주세요."
          >
            <template #prepend>
              유튜브 영상 링크
            </template>
          </v-text-field>
        </td>
      </tr>
      <tr>
        <td>
          <v-text-field
            v-model="thumbnailLink"
            class="prepend-text"
            placeholder="썸네일 링크를 입력해주세요."
            :disabled="!youtubeLink"
          >
            <template #prepend>
              썸네일 링크 <i class="required" />
            </template>
          </v-text-field>
        </td>
      </tr>
    </tbody>
  </v-table-row>

  <div class="tit-wrap">
    <strong class="title-2">
      앱 상세정보
    </strong>
  </div>
  <v-table-row>
    <tbody>
      <tr>
        <th style="width: 10%;">
          앱 상세정보  <i class="required" />
        </th>
        <td>
          <v-sheet
            class="d-flex align-center justify-center"
            color="secondary"
            width="100%"
            height="250"
          >
            에디터 영역
          </v-sheet>
        </td>
      </tr>
    </tbody>
  </v-table-row>

  <div class="tit-wrap">
    <div>
      <strong class="title-2">
        업데이트 정보

      </strong>
      <p class="text-2">
        최초 등록시에는 버전 관리를 통해 앱 버전을 등록해주세요.
      </p>
    </div>
    <v-btn
      color="tertiary"
      variant="outlined"
    >
      버전 관리
    </v-btn>
  </div>
  <v-table-row>
    <tbody>
      <tr>
        <th style="width: 10%;">
          앱 버전 <i class="required" />
        </th>
        <td>
          <v-select
            v-model="select2"
            :items="select2Items"
            width="640"
          >
            <template #append>
              <span>ver</span>
            </template>
          </v-select>
        </td>
      </tr>
      <tr>
        <th style="width: 10%;">
          업데이트 내용
        </th>
        <td>
          <p>
            1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용
            1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용
            1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용
            1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용
          </p>
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
  >
    <template #top>
      <div class="table-top">
        <div class="control">
          <strong class="control-total">전체 ({{ dataTableItem.length }})</strong>
        </div>
        <div class="btns">
          <v-btn
            size="large"
            color="tertiary"
            variant="outlined"
            append-icon="custom:new-window"
          >
            자주 묻는 질문 새창열기
          </v-btn>
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
            color="tertiary"
            variant="outlined"
          >
            불러오기
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
</template>

<script setup>
import { ref } from 'vue';

const select = ref('대여');
const select2 = ref("1.1.1");
const select2Items = ["1.1.1", "1.2.0", "2.0.0"];

const flag1 = ref(false);
const flag2 = ref(false);
const flag3 = ref(false);

const recomm1 = ref(false);
const recomm2 = ref(false);
const recomm3 = ref(false);
const recomm4 = ref(false);
const recomm5 = ref(false);

const month = ref(true);
const month1 = ref(false);
const month2 = ref(false);
const month3 = ref(false);
const month4 = ref(false);
const month5 = ref(false);
const month6 = ref(false);
const month7 = ref(false);
const month8 = ref(false);
const month9 = ref(false);
const month10 = ref(false);
const month11 = ref(false);
const month12 = ref(false);

const youtubeLink = ref('');
const thumbnailLink = ref('');

const isSwitch = ref(true);

 const tags = [
    'Work',
    'Home Improvement',
    'Vacation',
    'Food',
    'Drawers',
    'Shopping',
    'Art',
    'Tech',
    'Creative Writing',
  ]



// 데이터 테이블
const page = ref(1);
const itemsPerPage = ref(10);
const checked = ref([]);

const dataTableheaders = [
  { title: "순서", key: "id", width: '80px'},
  { title: "등록자", key: "registrant", sortable: false, width: '150px' },
  { title: "제목", key: "appName", sortable: false, },
  { title: "유형", key: "appType", sortable: false, width: '110px'},
  { title: "공개여부", key: "status", sortable: false, width: '110px'},
  { title: "등록일", key: "createdDate", sortable: false, width: '200px'},
];

const dataTableItem = ref([
  {
    id: 1,
    appCode: "APP001",
    appName: "테스트 앱 1",
    appType: "모바일",
    status: "공개",
    registrant: "홍길동",
    createdDate: "25.01.01",
    updatedDate: "25.02.01",
    lastModifiedDate: "25.02.15",
  },
  {
    id: 2,
    appCode: "APP002",
    appName: "일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십",
    appType: "웹",
    status: "비공개",
    registrant: "김철수",
    createdDate: "25.01.10",
    updatedDate: "25.02.05",
    lastModifiedDate: "25.02.16",
  },
  {
    id: 3,
    appCode: "APP003",
    appName: "앱3",
    appType: "모바일",
    status: "공개",
    registrant: "이민수",
    createdDate: "25.01.12",
    updatedDate: "25.02.03",
    lastModifiedDate: "25.02.10",
  },
  {
    id: 4,
    appCode: "APP004",
    appName: "앱4",
    appType: "웹",
    status: "비공개",
    registrant: "박지은",
    createdDate: "25.01.15",
    updatedDate: "25.02.07",
    lastModifiedDate: "25.02.12",
  },
  {
    id: 5,
    appCode: "APP005",
    appName: "앱5",
    appType: "모바일",
    status: "공개",
    registrant: "최영희",
    createdDate: "25.01.20",
    updatedDate: "25.02.08",
    lastModifiedDate: "25.02.14",
  },
  {
    id: 6,
    appCode: "APP006",
    appName: "앱6",
    appType: "웹",
    status: "비공개",
    registrant: "정호준",
    createdDate: "25.01.25",
    updatedDate: "25.02.09",
    lastModifiedDate: "25.02.13",
  },
  {
    id: 7,
    appCode: "APP007",
    appName: "앱7",
    appType: "모바일",
    status: "공개",
    registrant: "홍길동",
    createdDate: "25.02.01",
    updatedDate: "25.02.10",
    lastModifiedDate: "25.02.18",
  },
  {
    id: 8,
    appCode: "APP008",
    appName: "앱8",
    appType: "웹",
    status: "비공개",
    registrant: "김철수",
    createdDate: "25.02.02",
    updatedDate: "25.02.11",
    lastModifiedDate: "25.02.17",
  },
  {
    id: 9,
    appCode: "APP009",
    appName: "앱9",
    appType: "모바일",
    status: "공개",
    registrant: "이민수",
    createdDate: "25.02.05",
    updatedDate: "25.02.12",
    lastModifiedDate: "25.02.19",
  },
  {
    id: 10,
    appCode: "APP010",
    appName: "앱10",
    appType: "웹",
    status: "비공개",
    registrant: "박지은",
    createdDate: "25.02.08",
    updatedDate: "25.02.13",
    lastModifiedDate: "25.02.18",
  },
  {
    id: 11,
    appCode: "APP011",
    appName: "앱11",
    appType: "모바일",
    status: "공개",
    registrant: "최영희",
    createdDate: "25.02.10",
    updatedDate: "25.02.14",
    lastModifiedDate: "25.02.20",
  },
  {
    id: 12,
    appCode: "APP012",
    appName: "앱12",
    appType: "웹",
    status: "비공개",
    registrant: "정호준",
    createdDate: "25.02.12",
    updatedDate: "25.02.15",
    lastModifiedDate: "25.02.19",
  },
  {
    id: 13,
    appCode: "APP013",
    appName: "앱13",
    appType: "모바일",
    status: "공개",
    registrant: "홍길동",
    createdDate: "25.02.15",
    updatedDate: "25.02.16",
    lastModifiedDate: "25.02.21",
  },
  {
    id: 14,
    appCode: "APP014",
    appName: "앱14",
    appType: "웹",
    status: "비공개",
    registrant: "김철수",
    createdDate: "25.02.16",
    updatedDate: "25.02.17",
    lastModifiedDate: "25.02.22",
  },
  {
    id: 15,
    appCode: "APP015",
    appName: "앱15",
    appType: "모바일",
    status: "공개",
    registrant: "이민수",
    createdDate: "25.02.17",
    updatedDate: "25.02.18",
    lastModifiedDate: "25.02.23",
  },
  {
    id: 16,
    appCode: "APP016",
    appName: "앱16",
    appType: "웹",
    status: "비공개",
    registrant: "박지은",
    createdDate: "25.02.18",
    updatedDate: "25.02.19",
    lastModifiedDate: "25.02.24",
  },
  {
    id: 17,
    appCode: "APP017",
    appName: "앱17",
    appType: "모바일",
    status: "공개",
    registrant: "최영희",
    createdDate: "25.02.20",
    updatedDate: "25.02.21",
    lastModifiedDate: "25.02.25",
  },
  {
    id: 18,
    appCode: "APP018",
    appName: "앱18",
    appType: "웹",
    status: "비공개",
    registrant: "정호준",
    createdDate: "25.02.22",
    updatedDate: "25.02.23",
    lastModifiedDate: "25.02.26",
  },
  {
    id: 19,
    appCode: "APP019",
    appName: "앱19",
    appType: "모바일",
    status: "공개",
    registrant: "홍길동",
    createdDate: "25.02.25",
    updatedDate: "25.02.26",
    lastModifiedDate: "25.02.27",
  },
  {
    id: 20,
    appCode: "APP020",
    appName: "앱20",
    appType: "웹",
    status: "비공개",
    registrant: "김철수",
    createdDate: "25.02.28",
    updatedDate: "25.02.29",
    lastModifiedDate: "25.03.01",
  },
  {
    id: 21,
    appCode: "APP021",
    appName: "앱21",
    appType: "모바일",
    status: "공개",
    registrant: "이민수",
    createdDate: "25.03.01",
    updatedDate: "25.03.02",
    lastModifiedDate: "25.03.03",
  },
  {
    id: 22,
    appCode: "APP022",
    appName: "앱22",
    appType: "웹",
    status: "비공개",
    registrant: "박지은",
    createdDate: "25.03.02",
    updatedDate: "25.03.03",
    lastModifiedDate: "25.03.04",
  },
  {
    id: 23,
    appCode: "APP023",
    appName: "앱23",
    appType: "모바일",
    status: "공개",
    registrant: "최영희",
    createdDate: "25.03.03",
    updatedDate: "25.03.04",
    lastModifiedDate: "25.03.05",
  },
  {
    id: 24,
    appCode: "APP024",
    appName: "앱24",
    appType: "웹",
    status: "비공개",
    registrant: "정호준",
    createdDate: "25.03.04",
    updatedDate: "25.03.05",
    lastModifiedDate: "25.03.06",
  },
  {
    id: 25,
    appCode: "APP025",
    appName: "앱25",
    appType: "모바일",
    status: "공개",
    registrant: "홍길동",
    createdDate: "25.03.05",
    updatedDate: "25.03.06",
    lastModifiedDate: "25.03.07",
  },
  {
    id: 26,
    appCode: "APP026",
    appName: "앱26",
    appType: "웹",
    status: "비공개",
    registrant: "김철수",
    createdDate: "25.03.06",
    updatedDate: "25.03.07",
    lastModifiedDate: "25.03.08",
  },
  {
    id: 27,
    appCode: "APP027",
    appName: "앱27",
    appType: "모바일",
    status: "공개",
    registrant: "이민수",
    createdDate: "25.03.07",
    updatedDate: "25.03.08",
    lastModifiedDate: "25.03.09",
  },
  {
    id: 28,
    appCode: "APP028",
    appName: "앱28",
    appType: "웹",
    status: "비공개",
    registrant: "박지은",
    createdDate: "25.03.08",
    updatedDate: "25.03.09",
    lastModifiedDate: "25.03.10",
  },
  {
    id: 29,
    appCode: "APP029",
    appName: "앱29",
    appType: "모바일",
    status: "공개",
    registrant: "최영희",
    createdDate: "25.03.09",
    updatedDate: "25.03.10",
    lastModifiedDate: "25.03.11",
  },
  {
    id: 30,
    appCode: "APP030",
    appName: "앱30",
    appType: "웹",
    status: "비공개",
    registrant: "정호준",
    createdDate: "25.03.10",
    updatedDate: "25.03.11",
    lastModifiedDate: "25.03.12",
  }
]);

</script>
