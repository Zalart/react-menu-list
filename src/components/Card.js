import './Card.css';
import veggie from './assets/veggie.png'

const Card = ({ itemName, description, price, foodImage, featured, isVegetarian }) => {
    return (
        <div className="card"><div className="imageContainer">
            {foodImage ? <img className="image" src={foodImage} alt={itemName} title={itemName} /> : <img className="image" src="https://www.buhuslugi.by/wp-content/themes/consultix/images/no-image-found-360x250.png" alt="No image found" title="No image found" />}
        </div>
            <div className="textContent">
                <h2>{itemName}</h2>
                <div className="description">{description}</div>
                <div>
                    {featured ? <span alt="Featured" title="Featured" className="featured">⭐</span> : null}
                    {isVegetarian ? <span><img title="Vegetarian" className="veggie" src={veggie} alt="Veggie" /></span> : null}
                </div>
            </div>
            <div className="price">{price} <span>BYN</span></div>
        </div>
    );
}

export default Card;