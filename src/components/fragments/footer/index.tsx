import {
  BsFacebook,
  BsGeoAltFill,
  BsInstagram,
  BsSend,
  BsTiktok,
  BsWhatsapp,
} from "react-icons/bs";
import { logoTitleBar } from "../../../image";
import SosialMediaFooter from "../../elements/footer-sosial-media";
import Button from "../../elements/button/Button";

const Footer = () => {
  return (
    <footer className="bg-white mt-0 py-[50px] px-0 text-black">
      <div className="container mx-auto px-10 md:px-24 max-w-full">
        <div className="grid gap-14 row-gap-4 lg:grid-cols-6">
          <div className="md:max-w-sm lg:col-span-2">
            <div className="flex items-center">
              <img
                src={logoTitleBar}
                alt={`ini gambar ${logoTitleBar}`}
                className="rounded-full mr-4"
                width="50"
                height="50"
              />
              <h2 className="font-semibold">Holaa.Indonesia</h2>
            </div>

            <div className="flex items-center gap-4 mt-5">
              <BsGeoAltFill />
              <a
                href="https://www.google.com/maps/place/HOLAA+CAFE/@-6.8973909,112.457595,14z/data=!4m15!1m8!3m7!1s0x2e77e7f770a22f0b:0x31eaa2816904dacd!2sHOLAA+CAFE!8m2!3d-6.8972521!4d112.4643102!10e1!16s%2Fg%2F11q4h8dh2n!3m5!1s0x2e77e7f770a22f0b:0x31eaa2816904dacd!8m2!3d-6.8972521!4d112.4643102!16s%2Fg%2F11q4h8dh2n?entry=ttu"
                className="text-sm font-[300]"
              >
                Mulyorejo, Dalegan, Kec. Panceng, Kab. Gresik, Jawa Timur
              </a>
            </div>

            <div className="flex items-center gap-4 mt-5">
              <BsWhatsapp />
              <a
                href="https://api.whatsapp.com/send?phone=6281232098116"
                className="text-sm font-[300]"
              >
                081232098116
              </a>
            </div>
          </div>

          <div className="grid row-gap-8 grid-cols-2 gap-5 md:grid-cols-3 lg:col-span-4">
            <div className="">
              <h2 className="font-semibold text-lg">Menu Baru</h2>
              <div className="flex flex-col mt-4">
                <a href="#" className="mb-2 text-[14px] font-light">
                  Sundae Milo
                </a>
                <a href="#" className="mb-2 text-[14px] font-light">
                  Holaa cone Mini
                </a>
                <a href="#" className="mb-2 text-[14px] font-light">
                  Holaa Cone Medium
                </a>
                <a href="#" className="mb-2 text-[14px] font-light">
                  Holaa Lemon Berry
                </a>
                <a href="#" className="mb-2 text-[14px] font-light">
                  Es Cokelat Holaa
                </a>
              </div>
            </div>

            <div className="">
              <h2 className={"font-semibold text-lg"}>Sosial Media Kami</h2>
              <p className={"font-light text-sm mt-3"}>
                untuk mengetahui informasi lebih tentang kami, anda dapat
                mengunjungi medsos kami
              </p>

              <div className="flex items-center mt-4">
                <SosialMediaFooter
                  patch={"https://www.instagram.com/holaa.indonesia/"}
                  logo={<BsInstagram />}
                />
                <SosialMediaFooter
                  patch={
                    "https://www.tiktok.com/@holaaindonesia?is_from_webapp=1&sender_device=pc"
                  }
                  logo={<BsTiktok />}
                />
                <SosialMediaFooter
                  patch={
                    "https://www.facebook.com/profile.php?id=100082032754739&mibextid=ZbWKwL"
                  }
                  logo={<BsFacebook />}
                />
              </div>
            </div>

            <div className="">
              <h2 className="font-semibold text-lg">Get In Touch</h2>
              <p className={"font-light text-sm mt-3"}>
                Berlangganan Buletin mingguan kami dan terima pembaruan melalui
                email
              </p>

              <div className="flex items-center mt-5">
                <input
                  type="email"
                  name="subscribe"
                  id="subscribe"
                  placeholder="masukan alamat email anda"
                  className="w-full bg-white rounded-full border border-solid border-black text-xs py-2 px-4 mr-2"
                />
                <Button
                  className={
                    "bg-black p-2 rounded-full flex items-center justify-center text-white"
                  }
                  label={<BsSend />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
