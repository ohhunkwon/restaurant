function loadHome() {

    const home = document.createElement('div')
    home.id = 'home'
    home.classList.add('active')
    home.setAttribute('data-tab-content', '')

    const heading = document.createElement('h3')
    heading.textContent = 'Tasty and reasonably priced pizzas'

    const para = document.createElement('p')
    para.textContent = 'Come to our shop to try it out!'

    home.appendChild(heading)
    home.appendChild(para)

    return home
}



export {
    loadHome
}