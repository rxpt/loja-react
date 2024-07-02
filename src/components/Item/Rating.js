import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Rating({ rating }) {
  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, index) => {
        const isHalf = rating % 1 !== 0 && index === Math.floor(rating);
        const isEmpty = index >= Math.ceil(rating);

        let component = faStar;

        if (isEmpty) {
          component = faStarEmpty;
        } else if (isHalf) {
          component = faStarHalfStroke;
        }

        return <FontAwesomeIcon icon={component} key={index} />;
      })}
    </div>
  );
}

export default Rating;
