/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/styles/main.scss'
import '@/assets/scss/main.scss'
// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  //theme: false,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1C1C1C',
        },
      },
    },
  },
})
