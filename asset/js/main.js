import tabController from './tabs.js'

let $ = (q) => document.querySelector(q)
let $all = (q) => document.querySelectorAll(q)

tabController($all("#links a[data-href]"), $("#content"), 'index.html')