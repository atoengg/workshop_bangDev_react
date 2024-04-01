import Skeleton from "react-loading-skeleton";

interface MenuSkeletonProps {
  cardsMenu: number; // Tetapkan tipe properti cardsMenu
}

const MenuSkeleton = ({ cardsMenu }: MenuSkeletonProps) => {
  return Array(cardsMenu)
    .fill(0)
    .map((item, index) => (
      <div
        className="p-2 shadow-md rounded-lg flex flex-col justify-between"
        key={index}
      >
        <Skeleton width={80} height={120} />
        <div className="mt-4 flex justify-between items-center">
          <div className="">
            <Skeleton width={80} height={80} />
            <Skeleton width={80} height={80} />
          </div>
          <div className="text-sm">
            <div className="flex items-center gap-1">
              <Skeleton width={80} height={80} />
            </div>
            <Skeleton width={80} height={80} />
          </div>
        </div>
      </div>
    ));
};

export default MenuSkeleton;
