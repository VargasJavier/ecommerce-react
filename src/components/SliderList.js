import SkeletonCircle from "./SkeletonCircle";
import Slider from "./Slider";

const SliderList = ({ categories, categoryName }) => {
  return (
    <div className='w-auto items-center flex overflow-x-auto overscroll-x-contain p-4 space-x-4 scrollbar-hide mobile:justify-between'>
      {categories.length ? (
        <>
          {categories.map((category, i) => {
            return (
              <Slider categoryName={categoryName} category={category} key={i} />
            );
          })}
        </>
      ) : (
        <SkeletonCircle />
      )}
    </div>
  );
};

export default SliderList;
