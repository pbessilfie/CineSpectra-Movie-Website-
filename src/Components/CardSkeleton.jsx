import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div key={index} className="w-36 sm:w-52">
        <div className="w-full h-68 sm:w-full sm:h-80 rounded-lg mb-3">
          <Skeleton height={"100%"} />
        </div>
        <Skeleton width={"100%"} />
        <div className="flex items-center justify-start text-sm sm:text-lg gap-1 sm:gap-2 md:gap-3">
          <Skeleton width={50} />
          <div className="h-2 w-2 rounded-full bg-gray-500"></div>
          <Skeleton width={40} />
          <div className="rounded-md ml-2 sm:ml-4 ">
            <Skeleton width={60} />
          </div>
        </div>
      </div>
    ));
};

export default CardSkeleton;
