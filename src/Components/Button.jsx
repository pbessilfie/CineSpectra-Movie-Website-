import { FaChevronRight, FaPlayCircle, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Button = ({
  name,
  playIcon,
  plusIcon,
  chevron,
  backgroundColor,
  textColor,
  hidden,
  borderProps,
  handleClick,
  handleRoute
}) => {

  return (
    <Link to={handleRoute}>
      {" "}
      <div
        className={`${textColor} ${backgroundColor} sm:px-6 sm:py-2 rounded-md font-semibold ${hidden} ${borderProps} sm:flex items-center gap-1 cursor-pointer text-sm`}
        to={handleClick}
        onClick={handleClick}
      >
        {playIcon && <FaPlayCircle />}
        {plusIcon && <FaPlus />}
        {name}

        {chevron && <FaChevronRight />}
      </div>
    </Link>
  );
};

export default Button;
