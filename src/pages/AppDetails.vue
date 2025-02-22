<template>
  <PageHeader
    title="앱 상세 "
    prev-link="/"
  />
  <div class="page-contents">
    <!-- 앱 정보 -->
    <div class="tit-wrap">
      <strong class="title-2">
        앱 정보
      </strong>
    </div>
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%;">
            앱 이름
          </th>
          <td style="width: 40%;">
            앱 이름
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
            앱 타입
          </th>
          <td style="width: 40%;">
            앱 타입
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            바로가기 링크
          </th>
          <td>
            <a
              variant="text"
              href="https://nonghyup.com"
              target="_blank"
            >
              https://nonghyup.com
            </a>
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
            <a
              href="https://nonghyup.com"
              target="_blank"
            >
              https://nonghyup.com
            </a>
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            플래그
          </th>
          <td style="width: 40%;">
            <div class="d-flex ga-3">
              <v-chip
                color="secondary"
                variant="flat"
              >
                추천
              </v-chip>
              <v-chip
                color="secondary"
                variant="flat"
              >
                NEW
              </v-chip>
              <v-chip
                color="secondary"
                variant="flat"
              >
                HOT
              </v-chip>
            </div>
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            추천 정보
          </th>
          <td colspan="3">
            앱 타입 / 사용자 수 / 좋아요 수
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            앱 사용 시기
          </th>
          <td colspan="3">
            상시
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            간단 설명
          </th>
          <td colspan="3">
            농협 및 축협 이용 시 필수 예약 과정으로 편리한
            예약 신청 및 관리를 도와주는 편리한 농협 앱
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            앱 상태
          </th>
          <td colspan="3">
            활성화
          </td>
        </tr>
      </tbody>
    </v-table-row>
    <!-- 카테고리 태그 -->
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
            <div class="d-flex ga-3">
              <v-chip
                v-for="tag in tags"
                :key="tag"
                color="primary"
                variant="flat"
                :text="tag"
              />
            </div>
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            카테고리명
          </th>
          <td>
            <div class="d-flex ga-3">
              <v-chip
                v-for="tag in tags"
                :key="tag"
                color="primary"
                variant="flat"
                :text="tag"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </v-table-row>
    <!-- 상세 이미지/영상 -->
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
            <p class="d-flex ga-2">
              유튜브 영상 링크
              <a
                href="https://nonghyup.com"
                target="_blank"
              >
                https://youtube.com+id값
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="d-flex ga-2">
              썸네일 링크
              <a
                href="https://nonghyup.com"
                target="_blank"
              >
                https://youtube.com+id값
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <th
            style="width: 10%;"
            rowspan="2"
          >
            이미지 (0/5)
          </th>
          <td>
            <p>
              <v-icon
                left
                size="16"
                style="vertical-align: -2px;"
              >
                custom:move
              </v-icon>
              노출 순서를 바꾸시려면 이미지를 원하는 곳에 끌어다 놓으세요 (드래그&amp;드롭)
            </p>
          </td>
        </tr>
      </tbody>
    </v-table-row>
    <!-- 앱 상세정보 -->
    <div class="tit-wrap">
      <strong class="title-2">
        앱 상세정보
      </strong>
    </div>
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%;">
            앱 상세정보
          </th>
          <td>
            <p>
              앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용<br>
              앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용<br>
              앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용<br>
              앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용 앱 정보 내용<br>
            </p>
          </td>
        </tr>
      </tbody>
    </v-table-row>
    <!-- 업데이트 정보 -->
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
        size="large"
      >
        버전 관리
      </v-btn>
    </div>
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%;">
            앱 버전
          </th>
          <td>
            0.1 ver
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            업데이트 내용
          </th>
          <td>
            <p>
              1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용<br>
              1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용<br>
              1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용<br>
              1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용<br>
              1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용<br>
              1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용<br>
              1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용<br>
              1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용<br>
              1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용 1.1.1 업데이트 내용<br>
            </p>
          </td>
        </tr>
      </tbody>
    </v-table-row>
    <!-- 자주 묻는 질문 -->
    <div class="tit-wrap">
      <strong class="title-2">
        자주 묻는 질문
      </strong>
    </div>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel
        v-for="i in 3"
        :key="i"
        text="질의사항 답변 내용"
        title="질의사항을 노출합니다.질의사항을 노출합니다."
      />
    </v-expansion-panels>
  </div>
  <div class="page-actions">
    <v-spacer />
    <v-btn
      color="warning"
      size="large"
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
    >
      수정
    </v-btn>
  </div>
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

const snackbar = ref(false);
const snackbarText = ref('코드 전송 오류로 인하여 등록이 불가합니다. 새로고침해주세요.');
const snackbarOpen = () => {
  snackbar.value=true
    return;
}

// 데이터 테이블
const page = ref(1);
const itemsPerPage = ref(10);
const checked = ref([]);

const handleClick = (event, row) => {
  console.log("Clicked item: ", row.item);
}

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
