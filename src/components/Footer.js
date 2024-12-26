import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaDiscord,
  FaMoon,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <h1 className="text-xl font-semibold">learnwithctech_</h1>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            learnwithctech_ is an online learning platform intended for web developers.
            Through series-series such as Laravel, ReactJS, VueJS, InertiaJS,
            HTML, Bootstrap, Tailwind CSS, and more.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <FaFacebook className="text-gray-400 hover:text-blue-500 transition duration-300 cursor-pointer" />
            <FaInstagram className="text-gray-400 hover:text-pink-500 transition duration-300 cursor-pointer" />
            <FaTwitter className="text-gray-400 hover:text-blue-400 transition duration-300 cursor-pointer" />
            <FaGithub className="text-gray-400 hover:text-gray-600 transition duration-300 cursor-pointer" />
            <FaYoutube className="text-gray-400 hover:text-red-500 transition duration-300 cursor-pointer" />
            <FaDiscord className="text-gray-400 hover:text-indigo-500 transition duration-300 cursor-pointer" />
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Indeks</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Roadmap</li>
            <li className="hover:text-white cursor-pointer">Series</li>
            <li className="hover:text-white cursor-pointer">Buku</li>
            <li className="hover:text-white cursor-pointer">Artikel</li>
            <li className="hover:text-white cursor-pointer">Premium</li>
            <li className="hover:text-white cursor-pointer">Peringkat</li>
            <li className="hover:text-white cursor-pointer">Validate JSON</li>
            <li className="hover:text-white cursor-pointer">Ebooks - Laravel 9</li>
          </ul>
        </div>

        {/* Additional Links Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Tambahan</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Artikel</li>
            <li className="hover:text-white cursor-pointer">Testimoni</li>
            <li className="hover:text-white cursor-pointer">Iklan</li>
            <li className="hover:text-white cursor-pointer">Templates</li>
            <li className="hover:text-white cursor-pointer">
              Hubungi Kami (Whatsapp)
            </li>
            <li className="hover:text-white cursor-pointer">Privasi</li>
            <li className="hover:text-white cursor-pointer">Ketentuan</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
          <p className="text-gray-400 text-sm mb-4">
            Bergabunglah dengan 23.000+ lainnya dan jangan pernah ketinggalan
            screencast, tips, tutorial, dan lainnya.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-2 bg-gray-800 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300">
              Langganan
            </button>
          </div>
          <p className="text-gray-400 text-xs">
            learnwithctech_ is a Trademark of C-Tech Indonesia. <br />
            © Copyright 2024 C-Tech Indonesia. All rights reserved. Yes, all of
            them 000371291.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            All the design stuff's crafted by ChatGPT.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaMoon className="text-gray-400 hover:text-yellow-500 transition duration-300 cursor-pointer" />
            <FaFacebook className="text-gray-400 hover:text-blue-500 transition duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;