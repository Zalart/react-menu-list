import './Card.css';

const Card = ({ itemName, description, price, foodImage, featured, isVegetarian }) => {
    return (
        <div className="card">
            {foodImage ? <div className="image" style={{ backgroundImage: `url(${foodImage})` }}> </div> : <div className="image" style={{ backgroundImage: `url(https://www.buhuslugi.by/wp-content/themes/consultix/images/no-image-found-360x250.png)` }}> </div>}
            <div className="textContent">
                <h2 className="name">{itemName}</h2>
                <div className="status">
                    {featured ? '⭐' : null}
                    <span>{price}</span>
                    <span>{description}</span>
                    <span>{isVegetarian}</span>

                </div>
            </div>
        </div >
    );
}

export default Card;