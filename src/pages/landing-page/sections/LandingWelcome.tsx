import bannerOne from "/assets/img/banner-1.png";

export default function LandingWelcome() {
  return (
    <div className="relative p-16 pt-6 pb-0">
      <img src={bannerOne} alt="" className="w-full h-[520px] rounded-md" />
      <div className="pl-32 mt-48 w-5/12 absolute top-0 left-0">
        <h1 className="text-6xl font-bold mb-2 text-white/90">
          <span className="text-green-600">Tingkatkan</span> Bisnis Kuliner Anda
          bersama To
          <span className="text-black/80">Menu</span>
        </h1>
        <p className="text-xl font-semibold text-white/90">
          Kelola menu dengan mudah, tarik lebih banyak pelanggan, dan kembangkan
          bisnis Anda hari ini.
        </p>
      </div>
    </div>
  );
}
