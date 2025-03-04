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
          background: "#fefefe",
          state_warn: "#1b4dd6",
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
      VList: {
        openStrategy: "single",
      },
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
      height: "616px",
      sortAscIcon: "custom:sort-asc",
      sortDescIcon: "custom:sort-desc",
      VCheckboxBtn: {
        baseColor: "#c2c2c2",
        hideDetails: true,
        falseIcon: "custom:checkbox-off",
        trueIcon: "custom:checkbox-on",
      },
       VRadio: {
        baseColor: "#c2c2c2",
        falseIcon: "custom:radio-off",
        trueIcon: "custom:radio-on",
      },
    },
    VSelect: {
      persistentPlaceholder: true,
      variant: "outlined",
      hideDetails: true,
      menuIcon: "custom:select",
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
      placeholder: "YYYY.MM.DD",
      VBtn: {
        ripple: false,
      }
    },
    VDatePicker: {
      showAdjacentMonths: true,
      modeIcon: "custom:arrow-down",
      nextIcon: "custom:arrow-right",
      prevIcon: "custom:arrow-left",
      hideHeader: true,
      hideDetails: true,
      VBtn: {
        ripple: false,
      },
    },
    VCheckbox: {
      baseColor: "#c2c2c2",
      hideDetails: true,
      falseIcon: "custom:checkbox-off",
      trueIcon: "custom:checkbox-on",
    },
    VRadio: {
      baseColor: "#c2c2c2",
      falseIcon: "custom:radio-off",
      trueIcon: "custom:radio-on",
    },
    VRadioGroup: {
      baseColor: "#c2c2c2",
      hideDetails: true,
    },
    VSnackbar: {
      minWidth: "592px",
      timeout: "2000",
    },
    VFileInput: {
      variant: "outlined",
      hideDetails: true,
      prependIcon: "",
      clearable: false,
      dirty: true,
      VField: {
        dirty: true
      },
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
      elevation: 0,
    },
  },
});
