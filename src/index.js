import component from "./components/comp";

document.body.appendChild(component());

import App from "./App";

import Vue from "vue";
new Vue({
  el: "#app",
  render: (h) => h(App),
});

import json, { a, b } from "@/json/data.json";
console.log(json, a, b);

import './glob.js'

import './webworker/index.js'

import './assets/index.js'

import { GetInfo } from "./api/index.js";

GetInfo().then(res => {
  console.log(res);
})