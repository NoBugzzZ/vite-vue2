import cssmodule,{yellowBackground} from '@/styles/cssmodule.module.css'
// import common from '@/styles/common.css'

function component(text = "component") {
    const p = document.createElement('p');
    p.innerHTML = text
    p.classList.add(cssmodule.text,yellowBackground)
    // p.className=common.sfc
    // p.className=cssmodule.text
    // p.className=cssmodule['red-background']
    return p;
}

export default component;