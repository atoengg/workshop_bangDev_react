import Button from "../../components/elements/button/Button";
import { imgHero } from "../../image";

const HeroSection = () => {
  return (
    <>
      <section id="beranda" className="w-full h-screen pt-32 bg-orange-50">
        <div className="px-28 h-full">
          <div className="flex flex-row justify-center items-center px-8">
            <div className="w-1/2">
              <h1 className="text-black text-[45px] font-bold leading-[72px] mb-4">
                Menikmati Cafe Keren Seharga Warkop
                <span className="text-orange-500">.</span>
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
                type={"button"}
                className={
                  "bg-orange-500 text-white font-bold rounded-lg px-6 py-3 mt-4 hover:bg-white hover:text-orange-500 transition duration-300"
                }
                label={"Pesan Sekarang"}
              />
            </div>
            <div className="w-1/2 flex justify-end">
              <img
                src={imgHero}
                className="rounded-3xl ml-24"
                width={350}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
