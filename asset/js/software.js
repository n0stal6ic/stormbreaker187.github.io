    fetch('/asset/data/software.json').then(async req => {
    let res = await req.json()
    let el = document.getElementById('software')
    el.innerHTML = ''
    res.forEach(([name, desc, link]) => {
        console.log({name, desc, link})
        let prel = document.createElement('div')

        let title_el = document.createElement('h2')
        title_el.innerText = name

        let desc_el = document.createElement('p')
        desc_el.innerText = desc

        prel.appendChild(title_el)
        prel.appendChild(desc_el)
        prel.onclick = () => window.location = link

        el.appendChild(prel)
    });
})
