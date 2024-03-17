import sendUrl from './send.png'
import homeUrl from './home.svg'

const img = document.createElement('img')
img.src = sendUrl
document.body.appendChild(img)

const div = document.createElement('div')
div.innerHTML = "home"
div.style.height = '200px'
div.style.background = `url("${homeUrl}")`
document.body.appendChild(div)

// import testUrl from './test.md?url'
import testUrl from './test.md'
console.log('[assets url]', sendUrl, homeUrl, testUrl)

import shaderRaw from './shader.glsl?raw'
console.log('[assets raw]', shaderRaw)


function getUrl(name) {
    return new URL(`./${name}.png`, import.meta.url)
}
// const imgUrl2 = new URL('./send.png', import.meta.url)
const imgUrl2=getUrl('send')
const img2 = document.createElement('img')
img2.src = imgUrl2.href
document.body.appendChild(img2)

console.log('[assets new Url]',imgUrl2)
