import DefaultTheme from 'vitepress/theme'
import Button from './components/Button.vue'
import './main.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Button', Button)
  }
}