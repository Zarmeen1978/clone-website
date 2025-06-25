import ProductShowcase from "@/components/product";
import ServicesSection from "@/components/service";
import ProgressSection from "./main/progress";
import ContactBanner from "./main/contactBanner";
import TeamAugmentationTabs from "./main/argumentTab";
import SuccessStoriesCarousel from "@/components/carousal";
import DeveloperFilterUI from "./main/developer";
import ContactFormWithStats from "./main/contact";


export default function Home() {
  return (
    <div className="w-full relative">
      {/* Video container */}
      <div className="w-full relative">
        <video
          src="./Home_Page_Video_Final_Format_8fe0b0e15f.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 z-10 flex items-center gap-8">
          {/* Text and Button */}
          <div className="text-white max-w-sm">
            <h1 className="text-3xl font-bold mb-2">Future-Driven Innovations.</h1>
            <p className="text-lg mb-4">
              Fostering Growth For Startups, Enterprises, And Innovators.
            </p>
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow hover:bg-blue-100 transition duration-300">
              Book a 15 min Call
            </button>
          </div>
        </div>
      </div>
      <ProductShowcase/>
      <ServicesSection/>
      <ProgressSection/>
      <ContactBanner/>
      <SuccessStoriesCarousel/>
      <TeamAugmentationTabs/>
      <DeveloperFilterUI/>
      <ContactFormWithStats/>
    </div>
  );
}
