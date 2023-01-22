import {BasketItem} from "./BasketItem";


function BasketList(props) {
    const {
        order = [],
        handleBasketShow=Function.prototype,
        removeFromBasket=Function.prototype,
        incrQuantity=Function.prototype,
        decrQuantity=Function.prototype
    } = props

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item
            Active
            deep-purple
            lighten-2
            white-text"
            >Cart</li>
            {
                order.length ? order.map(item =>
                    <BasketItem
                        key={item.id} {...item}
                        removeFromBasket={removeFromBasket}
                        incrQuantity={incrQuantity}
                        decrQuantity={decrQuantity}
                    />
                ) :
                    <li className='collection-item'>Cart is empty</li>
            }
            <li className="collection-item Active deep-purple darken-2 white-text">
                Total: {totalPrice}
                <button className='secondary-content btn-small'>Checkout</button>
            </li>
            <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
        </ul>
    )
}

export {BasketList}