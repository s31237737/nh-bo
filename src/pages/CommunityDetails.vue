<template>
  <PageHeader
    title="커뮤니티"
    prev-link="Community"
  />
  <div class="page-contents">
    <!-- 문의내용 -->
    <div class="tit-wrap">
      <strong class="title-2">
        문의 내용
      </strong>
    </div>
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%">
            등록자
          </th>
          <td style="width: 23%">
            김농협(05300300)
          </td>
          <th style="width: 10%">
            검토여부
          </th>
          <td style="width: 23%">
            <v-radio-group
              v-model="radio"
              inline
            >
              <v-radio
                v-for="(option, index) in radioOptions"
                :key="index"
                :label="option.label"
                :value="option.value"
              />
            </v-radio-group>
          </td>
          <th style="width: 10%">
            이메일
          </th>
          <td style="width: 24%">
            Nonghyup@gmail.com
          </td>
        </tr>
        <tr>
          <th style="width: 10%">
            좋아요 수
          </th>
          <td style="width: 23%">
            23
          </td>
          <th style="width: 10%">
            댓글 수
          </th>
          <td style="width: 23%">
            24
          </td>
          <th style="width: 10%">
            작성일
          </th>
          <td style="width: 24%">
            YYYY.MM.DD.hh.mm
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            내용
          </th>
          <td colspan="5">
            <v-img
              width="100%"
              height="150px"
              cover
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            />
            <br>
            <p>
              Notice Text Notice Text Notice Text Notice Text<br>
              Notice Text Notice Text Notice Text Notice Text  Notice Text<br>
              Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text<br>
              Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text<br>
              Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text<br>

              Notice Text Notice Text Notice Text Notice Text<br>
              Notice Text Notice Text Notice Text Notice Text  Notice Text<br>
              Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text<br>
              Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text<br>
              Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text Notice Text<br>
            </p>
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            첨부파일
          </th>
          <td colspan="5">
            <ul
              class="file-list"
            >
              <li
                v-for="(file, index) in files"
                :key="index"
              >
                <v-icon icon="custom:file" />
                <span>{{ file.name }}</span>
                <em>{{ file.size }}</em>
                <v-btn
                  class="icon-md"
                  icon="custom:download"
                  @click="downloadFile(file)"
                />
              </li>
            </ul>
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
      height="100%"
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
              <v-select
                v-model="selectDate"
                :items="['최신순', '인기순', '답글많은순']"
                density="compact"
              />
              <v-checkbox
                label="신고댓글 모아보기"
                density="comfortable"
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
              댓글삭제
            </v-btn>
          </div>
        </div>
      </template>

      <template #item.commentContent="{ item }">
        <div class="comment">
          <v-chip
            v-if="item.hasReply"
            label
          >
            <v-icon
              icon="custom:comment"
              size="16"
              start
            />
            답글
          </v-chip>
          <p class="text-ellipsis3">
            {{ item.commentContent }}
          </p>
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
  </div>
</template>

<script setup>
import { ref } from 'vue';

const radio = ref("radio-1");
const radioOptions = [
  { label: "검토전", value: "radio-1" },
  { label: "검토중", value: "radio-2" },
  { label: "반영완료", value: "radio-3" },
];


const files = ref([
  { name: "C:/Download/Filename.png", size: "10.3MB", url: "#" },
  { name: "C:/Download/Filename123.png", size: "10.3MB", url: "#" },
  { name: "C:/Download/Filename456.png", size: "10.3MB", url: "#" },
]);

const downloadFile = (files) => {
  console.log(files.name)
};
// 데이터 테이블
const page = ref(1);
const itemsPerPage = ref(10);
const checked = ref([]);
const selectDate = ref(["최신순"]);

const pageSort = ref([
  { title: "10개", value: 10 },
  { title: "20개", value: 20 },
  { title: "30개", value: 30 },
  { title: "50개", value: 50 },
  { title: "100개", value: 100 },
]);

const dataTableheaders = [
  { title: "순서", key: "id", width: "80px" },
  { title: "댓글(답글) 내용", key: "commentContent", sortable: false },
  { title: "등록자", key: "registrant", sortable: false, width: "150px" },
  { title: "답글수", key: "replyCount", sortable: false, width: "120px" },
  { title: "좋아요", key: "likes", sortable: false, width: "120px" },
  { title: "상태", key: "status", sortable: false, width: "100px" },
  { title: "등록일", key: "createdDate", sortable: false, width: "180px" },
];

const dataTableItem = [
  {
    id: 1,
    commentContent:
      "너무 좋은 의견 주셔서 감사합니다. 저도 일일점검 앱을 사용하다보니 같은 문제로 고민이 되더라구요. 말씀하신 부분에 대한 기능이 개선되었으면 좋겠네요. 좋아요 누르고 갑니다~",
    registrant: "홍길동",
    hasReply: true,
    replyCount: 20,
    likes: 999,
    status: "신고",
    createdDate: "2025.09.09 09:29",
  },
  {
    id: 2,
    commentContent:
      "너무 좋은 의견 주셔서 감사합니다. 저도 일일점검 앱을 사용하다보니 같은 문제로 고민이 되더라구요. 말씀하신 부분에 대한 기능이 개선되었으면 좋겠네요. 좋아요 누르고 갑니다~ 댓글 내용이 노출되는 영역입니다. 최대 3줄까지 표시되며 초과 시 닷(...) 처리됩니다. 댓글 내용이 노출되는 영역입니다. 최대 3줄까지 표시되며 초과 시 닷(...) 처리됩니다. 댓글 내용이 노출되는 영역입니다. 최대 3줄까지 표시되며 초과 시 닷(...) 처리됩니다.",
    registrant: "홍길동",
    hasReply: false,
    replyCount: 12,
    likes: 999,
    status: "삭제",
    createdDate: "2025.09.09 09:29",
  },
  {
    id: 3,
    commentContent:
      "너무 좋은 의견 주셔서 감사합니다. 저도 일일점검 앱을 사용하다보니 같은 문제로 고민이 되더라구요. 말씀하신 부분에 대한 기능이 개선되었으면 좋겠네요. 좋아요 누르고 갑니다~",
    registrant: "홍길동",
    hasReply: true,
    replyCount: 2,
    likes: 999,
    status: "등록",
    createdDate: "2025.09.09 09:29",
  },
  {
    id: 4,
    commentContent:
      "너무 좋은 의견 주셔서 감사합니다. 저도 일일점검 앱을 사용하다보니 같은 문제로 고민이 되더라구요. 말씀하신 부분에 대한 기능이 개선되었으면 좋겠네요. 좋아요 누르고 갑니다~",
    registrant: "홍길동",
    hasReply: false,
    replyCount: 3,
    likes: 999,
    status: "신고",
    createdDate: "2025.09.09 09:29",
  },
  {
    id: 5,
    commentContent:
      "너무 좋은 의견 주셔서 감사합니다. 저도 일일점검 앱을 사용하다보니 같은 문제로 고민이 되더라구요. 말씀하신 부분에 대한 기능이 개선되었으면 좋겠네요. 좋아요 누르고 갑니다~",
    registrant: "홍길동",
    hasReply: true,
    replyCount: 20,
    likes: 999,
    status: "삭제",
    createdDate: "2025.09.09 09:29",
  },
  {
    id: 6,
    commentContent:
      "너무 좋은 의견 주셔서 감사합니다. 저도 일일점검 앱을 사용하다보니 같은 문제로 고민이 되더라구요. 말씀하신 부분에 대한 기능이 개선되었으면 좋겠네요. 좋아요 누르고 갑니다~",
    registrant: "홍길동",
    hasReply: false,
    replyCount: 12,
    likes: 999,
    status: "등록",
    createdDate: "2025.09.09 09:29",
  },
  {
    id: 7,
    commentContent:
      "너무 좋은 의견 주셔서 감사합니다. 저도 일일점검 앱을 사용하다보니 같은 문제로 고민이 되더라구요. 말씀하신 부분에 대한 기능이 개선되었으면 좋겠네요. 좋아요 누르고 갑니다~",
    registrant: "홍길동",
    hasReply: true,
    replyCount: 2,
    likes: 999,
    status: "신고",
    createdDate: "2025.09.09 09:29",
  },
  {
    id: 8,
    commentContent:
      "너무 좋은 의견 주셔서 감사합니다. 저도 일일점검 앱을 사용하다보니 같은 문제로 고민이 되더라구요. 말씀하신 부분에 대한 기능이 개선되었으면 좋겠네요. 좋아요 누르고 갑니다~",
    registrant: "홍길동",
    hasReply: false,
    replyCount: 3,
    likes: 999,
    status: "삭제",
    createdDate: "2025.09.09 09:29",
  },
  {
    id: 9,
    commentContent:
      "너무 좋은 의견 주셔서 감사합니다. 저도 일일점검 앱을 사용하다보니 같은 문제로 고민이 되더라구요. 말씀하신 부분에 대한 기능이 개선되었으면 좋겠네요. 좋아요 누르고 갑니다~",
    registrant: "홍길동",
    hasReply: true,
    replyCount: 2,
    likes: 999,
    status: "신고",
    createdDate: "2025.09.09 09:29",
  },
  {
    id: 10,
    commentContent:
      "너무 좋은 의견 주셔서 감사합니다. 저도 일일점검 앱을 사용하다보니 같은 문제로 고민이 되더라구요. 말씀하신 부분에 대한 기능이 개선되었으면 좋겠네요. 좋아요 누르고 갑니다~",
    registrant: "홍길동",
    hasReply: false,
    replyCount: 3,
    likes: 999,
    status: "삭제",
    createdDate: "2025.09.09 09:29",
  },
  {
    id: 11,
    commentContent:
      "너무 좋은 의견 주셔서 감사합니다. 저도 일일점검 앱을 사용하다보니 같은 문제로 고민이 되더라구요. 말씀하신 부분에 대한 기능이 개선되었으면 좋겠네요. 좋아요 누르고 갑니다~",
    registrant: "홍길동",
    hasReply: true,
    replyCount: 2,
    likes: 999,
    status: "신고",
    createdDate: "2025.09.09 09:29",
  },
  {
    id: 12,
    commentContent:
      "너무 좋은 의견 주셔서 감사합니다. 저도 일일점검 앱을 사용하다보니 같은 문제로 고민이 되더라구요. 말씀하신 부분에 대한 기능이 개선되었으면 좋겠네요. 좋아요 누르고 갑니다~",
    registrant: "홍길동",
    hasReply: false,
    replyCount: 3,
    likes: 999,
    status: "삭제",
    createdDate: "2025.09.09 09:29",
  },
];

</script>
