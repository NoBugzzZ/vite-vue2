import component from './components/comp'

document.body.appendChild(component())

import App from './App.vue'

import Vue from 'vue'
new Vue({
  el: '#app',
  render: (h) => h(App)
})

import json, { a, b } from '@/json/data.json'
console.log(json, a, b)

const modules=import.meta.glob('./dir/*.js')
console.log(modules)
for(let name in modules){
    modules[name]().then(res=>console.log(res))
}