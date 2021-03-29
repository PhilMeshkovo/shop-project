function BasketItem(props) {
    const {
        id, 
        name, 
        price, 
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype
    } = props

    return  <a href='#!' className="collection-item">
        {name} x<i className='material-icons basket-quantity' onClick={() => decQuantity(id)}>remove</i>{' '}
        {quantity} <i className='material-icons basket-quantity' onClick={() => incQuantity(id)}>add</i> = {price * quantity} руб.
        
        
        <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete">close</i></span>
        </a>
}

export {BasketItem}