import { FaChevronRight, FaPlayCircle, FaPlus } from "react-icons/fa";

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
}) => {
  return (
    <div
      className={`${textColor} ${backgroundColor} sm:px-6 sm:py-2 rounded-md font-semibold ${hidden} ${borderProps} md:flex items-center gap-1 cursor-pointer text-sm`}
      onClick={handleClick}
    >
      {playIcon && <FaPlayCircle />}
      {plusIcon && <FaPlus />}
      {name}

      {chevron && <FaChevronRight />}
    </div>
  );
};

export default Button;
