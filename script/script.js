const API = 'https://api.giphy.com/v1/gifs/search?'
const key = 'api_key=JLESd6ZFU43qeLskQWXNqYaY7rV7JqYO'
const limit = '&limit=25'
const params = '&q='


const form = document.querySelector('.gif_search')
const btn = document.querySelector('#search')
const input = document.querySelector('#name')
const output = document.querySelector('.output')
const select = document.querySelector('#count')

const searchGiphy = async () => {
    let url = API + key + limit + select.value + params + input.value
    const request = await fetch(url)
    const response = await request.json()
    console.log(response);
    renderGiphy(response.data)
    input.value = ""

}

const renderGiphy = (data) => {
    output.innerHTML = ""

    data.forEach(giff => {
        const card = document.createElement('div')
        card.classList.add('card')
        const title = document.createElement('h2')
        title.classList.add('h2')
        title.textContent = giff.title

        const img = document.createElement('iframe')
        img.classList.add('img')
        img.src = giff.embed_url

        card.append(title, img)
        output.append(card)
    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    searchGiphy()
})