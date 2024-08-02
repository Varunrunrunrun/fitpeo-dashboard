
import { StarRatingProps } from '../constants/types';
import Icon from './Icon';

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, index) => {
                let starClass = 'w-6 h-6 text-gray-300 fill-gray-300';
                if (index < fullStars) {
                    starClass = 'w-6 h-6 text-yellow-400 fill-yellow-400';
                } else if (index === fullStars && halfStar) {
                    starClass = 'w-6 h-6 text-yellow-400 fill-yellow-400';
                }
                return (
                    <Icon name="Star" className={starClass} />
                );
            })}
        </div>
    );
};

export default StarRating;
