import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { Features } from "./_components/features"
import { AnimatedTooltipPreview } from "./_components/tooltip"

const MarketingPage = () => {
  return (
    <>
    <div className="w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center pt-10">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="min-h-full flex flex-col">
        <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
          <Heading />
          <Heroes />
        </div>
        <Features />
        <AnimatedTooltipPreview />
      </div>
    </div>
    <Footer />
    </>
    
  );
}

export default MarketingPage;

