import { loadHome } from "./home"
import { loadMenu } from "./menu"
import { loadContact } from "./contact"

function createHeader() {
    const header = document.createElement('header')
    const h1 = document.createElement('h1')
    const i = document.createElement('i')
    i.classList.add('fas', 'fa-pizza-slice', 'fa-5x')
    h1.textContent = 'Pizza Restaurant'

    header.appendChild(i)
    header.appendChild(h1)

    return header
}

function createTabs() {
    const tabs = document.createElement('ul')
    tabs.classList.add('tabs')

    const homeTab = document.createElement('li')
    homeTab.setAttribute('data-tab-target', '#home')
    homeTab.classList.add('tab')
    homeTab.textContent = 'Home'
    homeTab.classList.add('active')

    const menuTab = document.createElement('li')
    menuTab.setAttribute('data-tab-target', '#menu')
    menuTab.classList.add('tab')
    menuTab.textContent = 'Menu'

    const contactTab = document.createElement('li')
    contactTab.setAttribute('data-tab-target', '#contact')
    contactTab.classList.add('tab')
    contactTab.textContent = 'Contact'

    tabs.appendChild(homeTab)
    tabs.appendChild(menuTab)
    tabs.appendChild(contactTab)

    return tabs
}

function createTabContent() {
    const tabContent = document.createElement('div')
    tabContent.classList.add('tab-content')

    tabContent.appendChild(loadHome())
    tabContent.appendChild(loadMenu())
    tabContent.appendChild(loadContact())

    return tabContent
}

function addComponents() {
    const content = document.getElementById('content')

    content.appendChild(createHeader())
    content.appendChild(createTabs())
    content.appendChild(createTabContent())
}

// Switch Logic for tabs
function addSwitchLogic() {
    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget)
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active')
            })
            tabs.forEach(tab => {
                tab.classList.remove('active')
            })
            tab.classList.add('active')
            target.classList.add('active')
        })
    })
}

function initializeWebsite() {
    console.log("Hello Ohhun")
    addComponents()
    addSwitchLogic()
}

export default initializeWebsite
