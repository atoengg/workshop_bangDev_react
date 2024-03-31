// import React, { useState } from 'react';

const ContactSection = () => {
  return (
    <div className="bg-orange-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">Hubungi Kami</h2>
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium text-black mb-2">Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-orange-500"
                placeholder="Masukkan nama Anda"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium text-black mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-orange-500"
                placeholder="Masukkan alamat email Anda"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium text-black mb-2">Pesan</label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-orange-500"
                rows={4}
                placeholder="Tuliskan pesan Anda di sini"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-orange-500 text-white w-full px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition duration-300">Kirim Pesan</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
