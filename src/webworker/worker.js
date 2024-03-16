self.addEventListener('message', function (e) {
    console.log('worker', e, e.data);
    self.postMessage(reduce(e.data))
})

function reduce(arr = []) {
    return arr.reduce((prev, cur) => prev + cur)
}