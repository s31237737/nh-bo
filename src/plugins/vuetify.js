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

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  //theme: false,
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1c1c1c",
          secondary: "#f5f5f5",
          tertiary: "#f5f5f5",
          warning: "#d32226",
          // Background Colors
          background: "#fefefe", // 기본 배경 색상
          surface: "#fafafa", // 서페이스 색상
          bg_overlay: "rgba(0, 0, 0, 0.5)", // 오버레이 배경 색상
          bg_layer: "#fefefe", // 레이어 배경 색상
          bg_box_deepgray: "#c2c2c2", // 깊은 회색 배경 박스 색상
          bg_box_white: "#fefefe", // 하얀색 배경 박스 색상
          bg_box_gray: "#f5f5f5", // 회색 배경 박스 색상
          bg_box_black: "#1c1c1c", // 검정 배경 박스 색상

          // Text Colors
          text_primary: "#1c1c1c", // 기본 텍스트 색상
          text_secondary: "#545454", // 보조 텍스트 색상
          text_tertiary: "#767676", // 3차 텍스트 색상
          text_hovered: "#252525", // 호버된 텍스트 색상
          text_helper: "#767676", // 보조 텍스트(헬퍼) 색상
          text_unselected: "#767676", // 선택되지 않은 텍스트 색상
          text_placeholder: "#767676", // 텍스트 플레이스홀더 색상
          text_on: "#fefefe", // 텍스트(밝은 배경에 맞는 색상)
          text_error: "#d32226", // 오류 텍스트 색상
          text_success: "#12852a", // 성공 텍스트 색상

          // Border Colors
          border_white: "#fefefe", // 흰색 테두리 색상
          border_selected: "#252525", // 선택된 항목의 테두리 색상
          border_subtle: "#e5e5e5", // 미세한 테두리 색상
          border_strong: "#c2c2c2", // 강한 테두리 색상
          border_error: "#d32226", // 오류 테두리 색상

          // Icon Colors
          icon_black: "#1c1c1c", // 검정 아이콘 색상
          icon_white: "#fefefe", // 하얀 아이콘 색상
          icon_gray: "#c2c2c2", // 회색 아이콘 색상
          icon_deepgray: "#666666", // 진한 회색 아이콘 색상
          icon_red: "#d32226", // 빨간 아이콘 색상

          // State Colors
          state_positive: "#12852a", // 긍정적인 상태 색상 (성공)
          state_negative: "#d32226", // 부정적인 상태 색상 (오류)
          state_warn: "#ffb800", // 경고 상태 색상
          state_in_progress: "#ffb800", // 진행중 상태 색상
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
  defaults: {
    VBtn: { variant: "flat" ,textTransform: "none"},
    VListItem: {
      ripple: false,
    },
    VMenu: {
      location: "bottom",
      offset: "10",
    },
    VDialog: {
      scrollable: true,
      width: "auto",
      VCard: { maxHeight: "720" },
      VCardTitle: {
        VBtn: { width: "32", height: "32" },
      },
    },
  },
});
