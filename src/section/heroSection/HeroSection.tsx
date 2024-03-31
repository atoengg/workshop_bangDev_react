import Button from "../../components/elements/button/Button";
import { imgHero } from "../../image";

const HeroSection = () => {
  return (
    <>
      <section id="hero" className="w-full h-screen pt-32 bg-[#fff8ea]">
        <div className="px-10 h-full">
          <div className="flex flex-row justify-center items-center">
            <div className="w-1/2">
              <h1 className="text-[#1f1235] text-[45px] font-bold leading-[72px] mb-4">
                Menikmati Cafe Keren Seharga Warkop
                <span className="text-[#ff6e6c]">.</span>
              </h1>
              <p>
                Lagi nyari cafe di Gresik yang tempatnya minimalis tapi tetap
                asik buat nongkrong dan meeting? Coba datang ke Holaa Cafe. Di
                sini kamu akan mendapati cafe dengan konsep minimalis kekinian
                yang Instagramable. Menu yang disajikan juga enak dan murah.
                Jika kamu sedang di Gresik, coba sempatkan waktu untuk datang ke
                cafe ini.
              </p>
              <Button
                className={
                  "w-[250px] h-[70px] bg-[#ff6e6c] text-[#f3fff4] font-bold rounded-md mt-6"
                }
                label={"Jelajahi"}
              />
            </div>
            <div className="w-1/2">
              <img src={imgHero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
