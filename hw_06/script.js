// create section Featured Items 

const saleContent = document.querySelector('.sale__content')
const catalogItemsContent = document.createElement('section')
// catalogItemsContent.textContent = 'DANCE'
catalogItemsContent.classList.add('catalog-items__content', 'center')
saleContent.insertAdjacentElement('afterend', catalogItemsContent)

const catalogHeader = document.createElement('div')
catalogHeader.classList.add('catalog__header')
catalogItemsContent.append(catalogHeader)

const catalogSubheader = document.createElement('h3')
catalogSubheader.classList.add('catalog__subheader')
catalogSubheader.textContent = 'Featured Items'

const catalogText = document.createElement('p')
catalogText.classList.add('catalog__text')
catalogText.textContent = 'Shop for items based on what we featured in this week'

catalogHeader.append(catalogSubheader)
catalogHeader.append(catalogText)

const catalogItemsFlex = document.createElement('div')
catalogItemsFlex.classList.add('catalog-items__flex')
catalogItemsContent.append(catalogItemsFlex)

// create product cards

const dataFeatured = JSON.parse(featuredData) // JSON-строка в массив

dataFeatured.forEach(element => {
    const catalogItem = document.createElement('div')
    catalogItem.classList.add('catalog__item')
    catalogItemsFlex.append(catalogItem)

    const catalogImg = document.createElement('img')
    catalogImg.classList.add('catalog__img')
    catalogImg.src = element.url_img
    catalogImg.alt = 'product photo'
    catalogItem.append(catalogImg)

    const catalogItemWrap = document.createElement('div')
    catalogItemWrap.classList.add('catalog__item-wrap')
    catalogItem.append(catalogItemWrap) // the rest are here

    const itemHeading = document.createElement('a')
    itemHeading.classList.add('item-heading')
    itemHeading.href = element.href
    itemHeading.textContent = element.product_name
    catalogItemWrap.append(itemHeading)

    const itemText = document.createElement('p')
    itemText.classList.add('item-text')
    itemText.textContent = element.description
    catalogItemWrap.append(itemText)

    const itemPrice = document.createElement('p')
    itemPrice.classList.add('item-price')
    itemPrice.textContent = element.currency + element.price
    catalogItemWrap.append(itemPrice)

    const cart = document.createElement('a')
    cart.classList.add('cart')
    cart.setAttribute("data-id", element.id)
    const svgCart = document.createElement('span')
    svgCart.innerHTML = `<svg class="svg__cart
    " width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M21.4703 22.6495C21.5152 22.6382 21.5365 22.6172 21.5541 22.5963C21.5619 22.5871 21.5697 22.578 21.5775 22.569C21.6139 22.5274 21.6172 22.4391 21.6163 22.3944C21.6032 22.2887 21.5127 22.216 21.4356 22.216C21.4319 22.216 21.4281 22.2161 21.4257 22.2162C21.3478 22.2216 21.2603 22.3251 21.2669 22.4463C21.2762 22.5628 21.3621 22.6495 21.4337 22.6495H21.4703ZM7.85183 22.6431C7.95074 22.6431 8.03114 22.549 8.03114 22.4334C8.03114 22.3182 7.95074 22.2245 7.85183 22.2245C7.75299 22.2245 7.67252 22.3182 7.67252 22.4334C7.67252 22.549 7.75299 22.6431 7.85183 22.6431ZM21.5935 24.6439C21.5459 24.6439 21.4821 24.6439 21.4337 24.6439C20.2993 24.6439 19.3569 23.7347 19.277 22.5814C19.1971 21.3797 20.0919 20.3081 21.2901 20.2264C21.3389 20.2231 21.3874 20.2215 21.4356 20.2215C22.5712 20.2215 23.53 21.1199 23.6074 22.2727C23.6388 22.8741 23.4629 23.4422 23.0797 23.881C22.6965 24.3361 22.1688 24.5955 21.5935 24.6439ZM7.85183 24.6376C6.65095 24.6376 5.67808 23.6513 5.67808 22.4334C5.67808 21.2163 6.65095 20.2301 7.85183 20.2301C9.05265 20.2301 10.0256 21.2163 10.0256 22.4334C10.0256 23.6513 9.05265 24.6376 7.85183 24.6376ZM20.7947 17.7906H8.76281C8.33109 17.7906 7.94788 17.4981 7.83564 17.0763L3.92077 2.68653H1.17262C0.64577 2.68653 0.214111 2.24866 0.214111 1.71195C0.214111 1.17608 0.64577 0.737244 1.17262 0.737244H4.64056C5.07137 0.737244 5.45458 1.02976 5.56675 1.45254L9.48169 15.8413H20.1556L23.7026 7.55906H11.8789C11.3512 7.55906 10.9195 7.12022 10.9195 6.58448C10.9195 6.04862 11.3512 5.60978 11.8789 5.60978H25.1727C25.4922 5.60978 25.7964 5.77217 25.9715 6.04862C26.1474 6.3241 26.1797 6.66519 26.0513 6.9739L21.6733 17.2054C21.5135 17.5627 21.1779 17.7906 20.7947 17.7906Z"
                    fill="white" />
            </svg>`
    cart.append(svgCart)
    const cartText = document.createElement('span')
    cartText.textContent = 'Add to Cart'
    cart.append(cartText)
    catalogItemWrap.append(cart)
})

const catalogButton = document.createElement('div')
catalogButton.classList.add('catalog__button')

const btnBrowse = document.createElement('button')
btnBrowse.classList.add('btn-browse')
btnBrowse.textContent = 'Browse All Product'

btnBrowse.addEventListener('click', function () {
    window.location.href = 'pages/catalog.html'
})

catalogButton.append(btnBrowse)
catalogItemsContent.append(catalogButton)

//----------------------------------------------------------
// here try to create a section

const cartItemBox = document.createElement('div')
cartItemBox.classList.add('footer__cart-items', 'center')
const footerAdvantages = document.querySelector('.footer__advantages')
footerAdvantages.insertAdjacentElement('afterend', cartItemBox)

const cartItemHeader = document.createElement('div')
cartItemHeader.classList.add('catalog__header')
cartItemBox.append(cartItemHeader)

const cartItemSubheader = document.createElement('h3')
cartItemSubheader.classList.add('catalog__subheader')
cartItemSubheader.textContent = 'Cart Items'
cartItemHeader.append(cartItemSubheader)

const cartItemContent = document.createElement('div')
cartItemContent.classList.add('cart-btn')
cartItemBox.append(cartItemContent)

//---------------------------------------------
// add item in the cart

const cardLinkEl = document.querySelectorAll('.cart')
let cartItemsArray = []

cardLinkEl.forEach(item => item.addEventListener('click', function (e) {

    dataFeatured.forEach(product => {

        if (cartItemsArray.length === 0 && product.id === e.target.parentElement.dataset.id) {
            cartItemsArray.push(product)
            cardCartCreation(product, e.target.parentElement.dataset.id)
        }

        else if (product.id === e.target.parentElement.dataset.id && cartItemsArray.length !== 0) {

            if (cartItemsArray.some(el => el.id === e.target.parentElement.dataset.id)) {
                let productInputChange = document.querySelector(`#${e.target.parentElement.dataset.id}`)
                productInputChange.value = Number(productInputChange.value) + 1
                product.quantity = Number(productInputChange.value) // to count totale items in cart
            } else {
                cardCartCreation(product, e.target.parentElement.dataset.id)
                cartItemsArray.push(product)
            }
        }
    })


    // remove items from the cart

    const exitCrosses = document.querySelectorAll('.cart-card__remove-item')

    exitCrosses.forEach(cartAddBtn => cartAddBtn.addEventListener('click', function (e) {

        e.target.closest('.cart-card').remove()

        for (let i = 0; i < cartItemsArray.length; i++) {
            if (e.target.id === cartItemsArray[i].id) {
                cartItemsArray.splice(i, 1)
                break
            }
        }

        if (document.querySelector('.cart-btn').childNodes.length === 0) { cartItemBox.style.display = 'none' }
    }))

    let totalQuantity = cartItemsArray.reduce((total, item) => total + Number(item.quantity), 0)
    // to count totale items in cart
    const cartCircleTotal = document.querySelector('.cart-circle')
    cartCircleTotal.textContent = totalQuantity
}))

// functon creating card with id

function cardCartCreation(element, id) {
    // create card
    const cardItem = document.createElement('div')
    cardItem.classList.add('cart-card')
    cartItemContent.append(cardItem)

    const imgElem = document.createElement('img')
    imgElem.classList.add('cart-card__img')
    imgElem.src = element.url_img
    imgElem.alt = 'photo product'
    cardItem.append(imgElem)

    const cardData = document.createElement('div')
    cardData.classList.add('cart-card__wrap')
    // text-align: left
    cardItem.append(cardData)

    const cardHeading = document.createElement('div')
    cardHeading.classList.add('cart-card__title')
    cardHeading.textContent = element.product_name
    cardData.append(cardHeading)

    const cardInfo = document.createElement('div')
    cardInfo.classList.add('cart-card__properties')
    cardData.append(cardInfo)

    const pPrice = document.createElement('div')
    pPrice.classList.add('cart-card__property')
    pPrice.textContent = 'Price: '
    cardInfo.append(pPrice)

    const pPriceSpan = document.createElement('span')
    pPriceSpan.classList.add('cart-card__property', 'cart-card__property_color')
    pPriceSpan.textContent = element.currency + element.price
    pPrice.append(pPriceSpan)

    const pColor = document.createElement('div')
    pColor.classList.add('cart-card__property')
    pColor.textContent = 'Color: ' + element.color
    cardInfo.append(pColor)

    const pSize = document.createElement('div')
    pSize.classList.add('cart-card__property')
    pSize.textContent = 'Color: ' + element.size
    cardInfo.append(pSize)


    const pQuantity = document.createElement('div')
    pQuantity.classList.add('cart-card__property')
    pQuantity.textContent = 'Quantity: '
    cardInfo.append(pQuantity)

    const pQuantitySpan = document.createElement('input')
    pQuantitySpan.classList.add('cart-card__property', 'cart-card__property_quantity')
    pQuantitySpan.type = 'number'
    pQuantitySpan.setAttribute('type', 'number')
    pQuantitySpan.setAttribute('min', '1')
    pQuantitySpan.setAttribute("id", id)
    pQuantitySpan.value = element.quantity
    pQuantity.append(pQuantitySpan)

    // Крестик
    const exit = document.createElement('button')
    exit.classList.add('cart-card__remove-item')
    exit.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
        fill="#575757" />
</svg>`
    exit.setAttribute("id", id)
    cardItem.append(exit)

    cartItemBox.style.display = 'flex'
}
