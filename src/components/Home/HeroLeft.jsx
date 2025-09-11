
import { MdStart } from "react-icons/md";
import GlassButton from "./GlassButton";

const HeroLeft = () => {
  return (
    <div className="flex flex-col w-full max-w-md lg:max-w-lg xl:max-w-xl  justify-center mt-20 md:mt-5 items-start gap-4 sm:gap-6 lg:gap-8 z-10 pr-0 lg:pr-8">
      <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-lg">
        Instant Airport Taxi Quotes.
    
        Simple. Transparent. 24/7.
      </h1>

      <p className="text-sm sm:text-base lg:text-lg xl:text-xl max-w-xl text-white/90 drop-shadow leading-relaxed">
        Book your journey with confidence. Premium cars, licensed drivers, and clear pricing, discussed directly with you, no hidden fees.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-2 sm:mt-4">
        <GlassButton as="a" to="/fleet" className="w-full sm:w-auto">
          <span className="inline-flex items-center justify-center gap-2 px-2">
            View Fleet
            <MdStart />
          </span>
        </GlassButton>
      </div>
    </div>
  );
};

export default HeroLeft;