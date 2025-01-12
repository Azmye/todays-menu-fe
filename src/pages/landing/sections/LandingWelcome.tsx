import { useMediaQuery } from "usehooks-ts";
import bannerOne from "/assets/img/banner-1.png";

export default function LandingWelcome() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop)
    return (
      <div className="grid grid-cols-1 px-40 pt-10 relative">
        <div className="relative">
          <img
            src={bannerOne}
            alt=""
            className="w-full h-[520px] rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent rounded-l-md">
            <div className="p-12 max-w-[600px]">
              <h1 className="text-6xl font-bold mb-2 text-white/90">
                Tingkatkan Bisnis Kuliner Anda bersama{" "}
                <span className="text-orange-500">Today's Menu</span>
              </h1>
              <p className="text-xl font-semibold text-white/90">
                Kelola menu dengan mudah, tarik lebih banyak pelanggan, dan
                kembangkan bisnis Anda hari ini.
              </p>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="px-4 py-2 max-w-[600px]">
      <h1 className="text-5xl font-bold mb-2">
        Tingkatkan Bisnis Kuliner Anda bersama{" "}
        <span className="text-orange-500">Today's Menu</span>
      </h1>
      <p className="text-sm">
        Kelola menu dengan mudah, tarik lebih banyak pelanggan, dan kembangkan
        bisnis Anda hari ini.
      </p>
    </div>
  );
}
