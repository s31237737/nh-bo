<template>
  <v-row>
    <v-sheet
      class="pa-12 pb-8"
      width="448"
    >
      <!-- v-text-field에서 label 슬롯을 사용 -->
      <v-text-field
        v-model="form"
        density="compact"
        label="First name"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        :rules="rules"
        :persistent-placeholder="true"
      />
      <v-select
        class="mt-8"
        label="Select"
        :persistent-placeholder="true"
        variant="outlined"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      />
    </v-sheet>
    <v-sheet
      class="pa-12 pb-8"
      width="448"
    >
      <div class="text-subtitle-1 text-medium-emphasis">
        Account
      </div>

      <v-text-field
        v-model="email"
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        :rules="emailRules"
      />
    </v-sheet>
  </v-row>
  <!-- 텍스트 -->
  <v-row>
    <v-col>
      <p class="title-1">
        title-1 큰 제목입니다 (24px, Bold, 125%)
      </p>
      <p class="title-2">
        title-2 중간 크기 제목입니다 (18px, SemiBold, 125%)
      </p>

      <p class="text-1">
        text-1 큰 본문 텍스트입니다. (16px, Regular, 150%)
      </p>
      <p class="text-1-md">
        text-1-md 큰 본문 텍스트입니다. (16px, SemiBold, 150%)
      </p>
      <p class="text-1-bd">
        text-1-bd 큰 본문 Bold 700 텍스트입니다. (16px, Bold, 150%)
      </p>

      <p class="text-2">
        text-2 일반 본문 텍스트입니다. (14px, Regular, 150%)
      </p>
      <p class="text-2-md">
        text-2-md 일반 본문  텍스트입니다. (14px, SemiBold, 150%)
      </p>

      <p class="caption">
        caption 작은 캡션 스타일입니다. (14px, Regular, 150%)
      </p>
    </v-col>
  </v-row>
  <!-- // 텍스트 -->
  <!-- 버튼 -->
  <div>
    <v-row>
      <!-- x-small/Primary -->
      <v-col cols="auto">
        <v-btn
          size="x-small"
          color="primary"
        >
          x-small/Primary
        </v-btn>
      </v-col>

      <!-- x-small/Secondary -->
      <v-col cols="auto">
        <v-btn
          size="x-small"
          color="secondary"
        >
          x-small/Secondary
        </v-btn>
      </v-col>

      <!-- x-small/Tertiary -->
      <v-col cols="auto">
        <v-btn
          size="x-small"
          color="tertiary"
          variant="outlined"
        >
          x-small/Tertiary
        </v-btn>
      </v-col>

      <!-- x-small/Warning -->
      <v-col cols="auto">
        <v-btn
          size="x-small"
          color="warning"
        >
          x-small/Warning
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          size="x-small"
          color="warning"
          variant="outlined"
        >
          x-small/Warning
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <!-- small/Primary -->
      <v-col cols="auto">
        <v-btn
          size="small"
          color="primary"
        >
          small/Primary
        </v-btn>
      </v-col>

      <!-- small/Secondary -->
      <v-col cols="auto">
        <v-btn
          size="small"
          color="secondary"
        >
          small/Secondary
        </v-btn>
      </v-col>

      <!-- small/Tertiary -->
      <v-col cols="auto">
        <v-btn
          size="small"
          color="tertiary"
          variant="outlined"
        >
          small/Tertiary
        </v-btn>
      </v-col>

      <!-- small/Warning -->
      <v-col cols="auto">
        <v-btn
          size="small"
          color="warning"
        >
          small/Warning
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          size="small"
          color="warning"
          variant="outlined"
        >
          small/Warning
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <!-- default/Primary -->
      <v-col cols="auto">
        <v-btn color="primary">
          default/Primary
        </v-btn>
      </v-col>

      <!-- default/Secondary -->
      <v-col cols="auto">
        <v-btn color="secondary">
          default/Secondary
        </v-btn>
      </v-col>

      <!-- default/Tertiary -->
      <v-col cols="auto">
        <v-btn
          color="tertiary"
          variant="outlined"
        >
          default/Tertiary
        </v-btn>
      </v-col>

      <!-- default/Warning -->
      <v-col cols="auto">
        <v-btn color="warning">
          default/Warning
        </v-btn>
      </v-col>
      <!-- default/Warning -->
      <v-col cols="auto">
        <v-btn
          color="warning"
          variant="outlined"
        >
          default/Warning
        </v-btn>
      </v-col>
    </v-row>


    <v-row>
      <!-- large/Primary -->
      <v-col cols="auto">
        <v-btn
          size="large"
          color="primary"
        >
          large/Primary
        </v-btn>
      </v-col>

      <!-- large/Secondary -->
      <v-col cols="auto">
        <v-btn
          size="large"
          color="secondary"
        >
          large/Secondary
        </v-btn>
      </v-col>

      <!-- large/Tertiary -->
      <v-col cols="auto">
        <v-btn
          size="large"
          color="tertiary"
          variant="outlined"
        >
          large/Tertiary
        </v-btn>
      </v-col>

      <!-- large/Warning -->
      <v-col cols="auto">
        <v-btn
          size="large"
          color="warning"
        >
          large/Warning
        </v-btn>
      </v-col>

      <!-- large/Warning -->
      <v-col cols="auto">
        <v-btn
          size="large"
          color="warning"
          variant="outlined"
        >
          large/Warning
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <!-- icon/Primary -->
      <v-col cols="auto">
        <v-btn
          size="small"
          color="primary"
          prepend-icon="mdi:mdi-plus"
        >
          icon/Primary
        </v-btn>
      </v-col>

      <!-- icon/Secondary -->
      <v-col cols="auto">
        <v-btn
          size="small"
          color="secondary"
          prepend-icon="mdi:mdi-plus"
        >
          icon/Secondary
        </v-btn>
      </v-col>

      <!-- icon/Tertiary -->
      <v-col cols="auto">
        <v-btn
          size="small"
          color="tertiary"
          variant="outlined"
          append-icon="mdi:mdi-plus"
        >
          icon/Tertiary
        </v-btn>
      </v-col>

      <!-- icon/Warning -->
      <v-col cols="auto">
        <v-btn
          size="small"
          color="warning"
          append-icon="mdi:mdi-plus"
        >
          icon/Warning
        </v-btn>
      </v-col>
      <!-- icon/Warning -->
      <v-col cols="auto">
        <v-btn
          size="small"
          color="warning"
          variant="outlined"
          append-icon="mdi:mdi-plus"
        >
          icon/Warning
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <!-- icon/Primary -->
      <v-col cols="auto">
        <v-btn
          size="small"
          color="primary"
          icon="mdi:mdi-plus"
        />
      </v-col>

      <!-- icon/Secondary -->
      <v-col cols="auto">
        <v-btn
          size="small"
          color="secondary"
          icon="mdi:mdi-plus"
        />
      </v-col>

      <!-- icon/Tertiary -->
      <v-col cols="auto">
        <v-btn
          size="small"
          color="tertiary"
          variant="outlined"
          icon="mdi:mdi-plus"
        />
      </v-col>

      <!-- icon/Warning -->
      <v-col cols="auto">
        <v-btn
          size="small"
          color="warning"
          icon="mdi:mdi-plus"
        />
      </v-col>
      <!-- icon/Warning -->
      <v-col cols="auto">
        <v-btn
          size="small"
          color="warning"
          variant="outlined"
          icon="mdi:mdi-plus"
          rounded="lg"
        />
      </v-col>
    </v-row>
  </div>
  <!-- //버튼 -->
  <Popup />

  <!-- table -->
  <v-row>
    <v-col cols="auto">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Calories
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in desserts"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
    <v-col cols="8">
      <v-table-row>
        <tbody>
          <!-- 일반 데이터 -->
          <tr
            v-for="(row, index) in tableData"
            :key="index"
          >
            <th width="20%">
              {{ row.label }}
            </th>
            <td>{{ row.value }}</td>
            <th>
              {{ row.label2 }}
            </th>
            <td>{{ row.value2 }}</td>
          </tr>

          <!-- 내용 (한 줄 전체 차지) -->
          <tr>
            <th>
              내용
            </th>
            <td
              colspan="3"
              class="text-left"
            >
              {{ content }}
            </td>
          </tr>
        </tbody>
      </v-table-row>
    </v-col>
  </v-row>

  <!-- // table -->
</template>

<script setup>
import { ref, computed } from 'vue';

const form = ref('');

// email validation 규칙 정의
const rules = computed(() => [
  value => {
    if (value) return true;
    return 'You must enter a first name.';
  },
]);

const desserts = ref([
  {
    name: 'Frozen Yogurt',
    calories: 159,
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
  },
  {
    name: 'Eclair',
    calories: 262,
  },
  {
    name: 'Cupcake',
    calories: 305,
  },
]);

const tableData = ref([
  { label: '공개상태', value: '공개', label2: '등록일', value2: '25.09.09' },
  { label: '제목', value: '개인정보처리방침', label2: '버전', value2: 'v0.8' },
]);

const content = ref('1.1.1 업데이트 내용 '.repeat(20));
</script>
<style lang="scss" scoped>
.v-field--active.v-field--variant-outlined .v-field__outline__notch::before {opacity: 1;}
.v-field--variant-outlined .v-label.v-field-label--floating{}
</style>
