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
import { VFileUpload, VFileUploadItem } from "vuetify/labs/VFileUpload";

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
          state_warn: "1B4DD6", // 경고 상태 색상
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
    VFileUpload,
    VFileUploadItem,
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
    VMain: {
      scrollable: true,
    },
    VContainer: {
      fluid: true,
      minWidth: "1654px",
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
        maxHeight: "872",
      },
      VCardTitle: {
        VBtn: {
          width: "32",
          height: "32",
          style: "font-size: 1.25rem",
        },
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
      color: "#555D69",
      inset: true,
      hideDetails: true,
    },
    VTableRow: {
      class: ["tbl-row"],
    },
    VDataTable: {
      fixedHeader: true,
      hover: true,
      showSelect: true,
      hideDefaultFooter: true,
      maxHeight: "616px",
      sortAscIcon: "custom:sort-asc",
      sortDescIcon: "custom:sort-desc",
      VCheckboxBtn: {
        baseColor: "#c2c2c2",
      },
    },
    VSelect: {
      persistentPlaceholder: true,
      variant: "outlined",
      hideDetails: true,
    },
    VTextarea: {
      persistentPlaceholder: true,
      variant: "outlined",
    },
    VTextField: {
      clearable: true,
      clearIcon: "custom:clear",
      variant: "outlined",
      hideDetails: true,
    },
    VDateInput: {
      variant: "outlined",
      prependIcon: "",
      prependInnerIcon: "custom:calendar",
      cancelText: "취소",
      okText: "선택 완료",
      showAdjacentMonths: true,
      modeIcon: "custom:arrow-down",
      nextIcon: "custom:arrow-right",
      prevIcon: "custom:arrow-left",
      hideDetails: true,
    },
    VCheckbox: {
      baseColor: "#c2c2c2",
      hideDetails: true,
    },
    VRadio: {
      baseColor: "#c2c2c2",
    },
    VRadioGroup: {
      baseColor: "#c2c2c2",
      hideDetails: true,
    },
    VSnackbar: {
      minWidth: "592px",
    },
    VFileUpload: {
      title: false,
      density: "compact",
      variant: "compact",
      width: "100px",
      height: "100px",
    },
    VFileUploadItem: {
      width: "100px",
      height: "100px",
    },
    VChip: {
      elevation: "0",
    },
    VExpansionPanels: {
      collapseIcon: "custom:arrow-up",
      expandIcon: "custom:arrow-down",
      elevation: 0,
    },
    VExpansionPanel: {
      elevation: 0
    }
  },
});
