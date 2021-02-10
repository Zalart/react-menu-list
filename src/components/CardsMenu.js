import Card from './Card';
import data from '../data';
import './CardsMenu.css';


const CardsMenu = () => {
    data.sort((a, b) => a.price < b.price ? 1 : -1);
    return (
        <div className="CardsMenu">
            {
                data.map((meal) => (
                    <Card {...meal} />
                ))
            }

        </div>
    )
}

export default CardsMenu;