import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div key={index} className="w-36 sm:w-52 mx-1">
        <div className="w-full h-52 sm:h-80 rounded-lg mb-3">
          <Skeleton height={"100%"} />
        </div>
        <Skeleton width={"100%"} />
        <div className="w-full flex items-center justify-evenly text-sm sm:text-lg gap-1 sm:gap-2 md:gap-3">
          <div className="w-[25%]">
            <Skeleton width={"100%"} />
          </div>
          <div className="h-2 w-2 rounded-full bg-gray-500"></div>
          <div className="w-[25%]">
            <Skeleton width={"100%"} />
          </div>
          <div className="w-[25%]">
            <Skeleton width={"100%"} />
          </div>
        </div>
      </div>
    ));
};

export default CardSkeleton;
