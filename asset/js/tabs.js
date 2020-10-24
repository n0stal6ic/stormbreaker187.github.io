/*
TODO: use history api
*/

async function nav(resource, script_resource, contentElement) {
    contentElement.innerHTML = ''
    let loadingEl = document.createElement('div')
    loadingEl.className = 'loader'
    contentElement.appendChild(loadingEl)
    console.log(`naving to ${resource}`)
    let req = await fetch(resource)
    let res = await req.text()
    contentElement.innerHTML = res
    if(script_resource) {
        let script_req = await fetch(script_resource)
        let script_res = await script_req.text()
        eval(script_res)
    }
}

export default function tabs(tabList, contentElement, defaultState) {
    tabList.forEach(tabEl => {
        let resource = '/pages/' + tabEl.dataset.href
        let script_resource = tabEl.dataset.script
        tabEl.addEventListener('click', async () => {
            nav(resource, script_resource, contentElement)
        })
    });
    nav('/pages/' + defaultState, undefined, contentElement)
}