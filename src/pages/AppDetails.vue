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


</script>
