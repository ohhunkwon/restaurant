function loadContact() {

    const contact = document.createElement('div')
    contact.id = 'contact'
    contact.setAttribute('data-tab-content', '')

    const heading = document.createElement('h3')
    heading.textContent = 'Contact Us'

    const address = document.createElement('p')
    address.textContent = 'Address: 15 X Street, X Town, X City, Post Code XX1 3XX'

    const phoneNum = document.createElement('p')
    phoneNum.textContent = 'Contact number: 078 - XXXX - XXXX'

    contact.appendChild(heading)
    contact.appendChild(address)
    contact.appendChild(phoneNum)

    return contact
}

export {
    loadContact
}