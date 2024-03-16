// const worker = new Worker(new URL('./worker.js', import.meta.url), {
//     type: 'module'
// })

import MyWork from './worker?worker&inline' //&url
const worker = new MyWork()

worker.addEventListener('message', function (e) {
    console.log('main thread', e, e.data)
})

worker.postMessage([1, 2, 3])