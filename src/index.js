
import component from "./components/comp"

document.body.appendChild(component())

import App from './App.vue'

import Vue from "vue"
new Vue({
    el: '#app',
    render: h => h(App)
})