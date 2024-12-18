/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { aliases, mdi } from 'vuetify/iconsets/mdi'; // For Material Icons
import '@mdi/font/css/materialdesignicons.css'; // Material Design Icons

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    // defaultTheme: 'dark',
    themes: {
      light: {
        variables: {
          fontFamily: 'Cabin, sans-serif', // تنظیم فونت پیش‌فرض
        },
          dark: false,
          colors: {
              background: '#fffbff',
              primary: "#3B755F", // #3B755F
              blue:'#2E3A8C', // #2E3A8C
              green:'#3B755F',// #3B755F
              beige:'#F2EBDB',// #F2EBDB
              white:'#FFFFFF',// #FFFFFF
              black:'#212121',// #212121
              secondary: "6b2882", // #6b2882
              error: '#de3730',// #de3730
              info: '#81D4FA',// #81D4FA
              success: '#43A047',// #43A047

          }
      },
  }
  },
})
