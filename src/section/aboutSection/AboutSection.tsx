// import React from 'react';

import { imgAbout } from "../../image";

const AboutSection = () => {
  return (
    <div className="max-w-5xl mt-12 mx-auto px-4 py-8 relative">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-3xl"
        style={{ backgroundImage: `url(${imgAbout})` }}
      ></div>
      <div className="relative z-10 flex items-center">
        <img
          className="rounded-xl w-100 h-60 object-cover mr-10"
          src={imgAbout}
          alt="imgAbout"
        />
        <div className="flex inline flex-col bg-white rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4 text-orange-500 text-center">Tentang Kami</h2>
          <p className="text-lg text-justify">
            Holaa Cafe merupakan cafe yang baru dibuka pada awal bulan juli 2022 di Gresik Lokasinya searah menuju Pantai Pasir Putih Dalegan Terletak di Jalan Raya Dalegan, Desa Dalegan Kecamatan Panceng-Kab.Gresik. Holaa Cafe yang mengusung konsep semi outdoor dan outdoor dengan dekorasinya aestetic & instagrameble Banyak stan-stan makanan serta terdapat beraneka ragam makanan olahan ikan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;