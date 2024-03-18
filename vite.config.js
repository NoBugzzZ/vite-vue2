import vuePlugin from '@vitejs/plugin-vue2'
// import vue2JsxPlugin from '@vitejs/plugin-vue2-jsx'
import path from 'path'

export default {
  base: '/vite-vue2/',
  plugins: [vuePlugin()],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  },
  assetsInclude: [
    "**/*.md"
  ]
}
