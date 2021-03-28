function BasketItem(props) {
    const {
        id, 
        name, 
        price, 
        quantity
    } = props

    return  <a className="collection-item">
        {name} x{quantity} = {price}
        <span className="secondary-content"><i className="material-icons basket-delete">close</i></span>
        </a>
}

export {BasketItem}