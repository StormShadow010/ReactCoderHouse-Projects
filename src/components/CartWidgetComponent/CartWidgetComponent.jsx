
import cartShopping from "../../assets/images/cartShopping.png"
import "./CartWidgetComponent.scss"

export const CartWidgetComponent = () => {
    return (
        <div className='cartWidgetContainer'>
            <div className="logoCart">
                <img src={cartShopping} alt="" />
            </div>
            <div className="counterCartWidget">
                <span>100</span>
            </div>

        </div>
    )
}
