/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "@/styles/main.scss";

// Composables
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi-svg";
import { custom } from "@/utils/vuetifyIcons";
import { VTable } from "vuetify/components";
import { VDateInput } from "vuetify/labs/VDateInput";

import { ko } from "vuetify/locale";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  locale: {
    locale: "ko",
    fallback: "en",
    messages: { ko },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1c1c1c",
          secondary: "#f5f5f5",
          tertiary: "#fff",
          warning: "#d32226",
          white: "#fefefe",
          gray: "#c2c2c2",
          // Background Colors
          background: "#fefefe", // 기본 배경 색상
          // surface: "#fafafa", // 서페이스 색상
          // bg_overlay: "rgba(0, 0, 0, 0.5)", // 오버레이 배경 색상

          // Text Colors
          text_secondary: "#545454", // 보조 텍스트 색상
          text_tertiary: "#767676", // 3차 텍스트 색상
          text_hovered: "#252525", // 호버된 텍스트 색상
          text_success: "#12852a", // 성공 텍스트 색상

          // Border Colors
          border_selected: "#252525", // 선택된 항목의 테두리 색상
          border_subtle: "#e5e5e5", // 미세한 테두리 색상

          // Icon Colors
          icon_deepgray: "#666666", // 진한 회색 아이콘 색상

          // State Colors
          state_positive: "#12852a", // 긍정적인 상태 색상 (성공)
          state_warn: "#ffb800", // 경고 상태 색상
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases: {
      ...aliases,
    },
    sets: {
      //  mdi,
      custom,
    },
  },
  aliases: {
    VTableRow: VTable,
  },
  components: {
    VDateInput,
  },
  defaults: {
    VNavigationDrawer: {
      width: "253",
      permanent: true,
      class: "lnb",
      VListItem: {
        minHeight: "52",
      },
    },
    VBtn: {
      variant: "flat",
      textTransform: "none",
    },
    VListItem: {
      ripple: false,
      rounded: "8",
    },
    VAppBar: {
      VMenu: {
        offset: "18",
        VToolbar: {
          height: "56",
          color: "transparent",
        },
      },
    },
    VMenu: {
      location: "bottom",
      offset: "4",
    },
    VDialog: {
      scrollable: true,
      width: "auto",
      VCard: {
        maxHeight: "720",
      },
      VCardTitle: {
        VBtn: { width: "32", height: "32" },
      },
      VCardActions: {
        VBtn: { variant: "flat" },
      },
    },
    VProgressCircular: {
      size: 35,
      width: 5,
      color: "white",
      indeterminate: true,
    },
    VSwitch: {
      color: "#0279fe",
      inset: "true",
      hideDetails: "true",
    },
    VTableRow: {
      class: ["tbl-row"],
    },
    VSelect: {
      persistentPlaceholder: true,
      variant: "outlined",
      VList: {
        class: "select-over",
        density:"compact",
        VListItem: {
          minHeight: "32px",
        },
      },
    },
    VTextField: {
      clearable: true,
      clearIcon: "custom:clear",
      variant: "outlined",
    },
    VDateInput: {
      variant: "outlined",
      prependIcon: "",
      prependInnerIcon: "custom:calendar",
      cancelText: "취소",
      okText: "선택완료",
      showAdjacentMonths: true,
      modeIcon: "custom:arrow-down",
      nextIcon: "custom:arrow-right",
      prevIcon: "custom:arrow-left",
      width: 338,
    },
  },
});
