function loadMenu() {

    const menu = document.createElement('div')
    menu.id = 'menu'
    menu.setAttribute('data-tab-content', '')

    const heading = document.createElement('h3')
    heading.textContent = 'Our Menu'

    menu.appendChild(heading)
    menu.appendChild(createParagraph('Margherita: basil, mozzarella cheese and tomatoes'))
    menu.appendChild(createParagraph('Romana: anchovies, capperi, mozzarella and tomatoes'))
    menu.appendChild(createParagraph('Siciliana: peas, hard-boiled eggs, seafood and green olives'))
    menu.appendChild(createParagraph('Ai Funghi e Salsicce: sausages, mushrooms and mozzarella'))
    menu.appendChild(createParagraph('Capricciosa: olives, artichoke hearts, half of a boiled egg, prosciutto and mushrooms'))

    return menu
}

function createParagraph(text) {
    const para = document.createElement('p')
    para.textContent = text

    return para
}

export {
    loadMenu
}