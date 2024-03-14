function component(text = "component") {
    const p = document.createElement('p');
    p.innerHTML = text
    return p;
}

export default component;