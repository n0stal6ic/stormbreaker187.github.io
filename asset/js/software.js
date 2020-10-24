    fetch('/asset/data/software.json').then(async req => {
    let res = await req.json()
    let el = document.getElementById('software')
    el.innerHTML = ''
    res.forEach(([name, desc, link, vrst]) => {
        console.log({name, desc, link, vrst})
        let prel = document.createElement('div')

        let title_el = document.createElement('h2')
        title_el.innerText = name

        let desc_el = document.createElement('p')
        desc_el.innerText = desc

        let buttons_wrapper = document.createElement('div')
        buttons_wrapper.className = 'buttons-wrapper'

        let download_el = document.createElement('span')
        download_el.className = 'software-button'
        download_el.onclick = () => window.open(link)

        buttons_wrapper.appendChild(download_el)

        prel.appendChild(title_el)
        prel.appendChild(desc_el)
        prel.appendChild(buttons_wrapper)

        el.appendChild(prel)
    });
})