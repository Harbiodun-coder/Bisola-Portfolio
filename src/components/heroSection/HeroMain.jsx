import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const HeroMain = () => {
  return (
    <div className="overflow-hidden sm:pt-[100px] md:pt-0">
      <div className="h-[85vh] flex md:flex-row sm:flex-col gap-4 max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroMain;
