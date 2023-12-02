import PropTypes from 'prop-types';
import "./ItemListContainerComponent.scss"

export const ItemListContainerComponent = ({ greeting }) => {
    return (
        <div className="itemListContainer">
            <div className='message'>{greeting}</div>
        </div>
    )
}


ItemListContainerComponent.propTypes = {
    greeting: PropTypes.string.isRequired,
};