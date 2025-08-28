import React from "react";
import { FaMotorcycle } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import '../i18n'
import { useTranslation } from "react-i18next";
import Photo from '../assets/hero-header.webp'
import Mask from '../assets/Mask Group.png'

function Hero() {
    const { t, i18n } = useTranslation();

    return (
        <section className="min-h-screen flex flex-col bg-gradient-to-r from-yellow-400 to-yellow-500">

            <header className="flex justify-between items-center px-10 py-4">

                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-300 rounded">
                        <img src={Mask}alt=""  className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="font-bold text-xl text-orange-600">food<span className="text-gray-700">wagon</span></h1>
                </div>


                <div className="flex items-center gap-6">

                    <details className="dropdown">
                        <summary className="btn m-1">Language</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <button onClick={() => i18n.changeLanguage("uz")}>O‘zbekcha</button>
                            <button onClick={() => i18n.changeLanguage("en")}>English</button>
                            <button onClick={() => i18n.changeLanguage("ru")}>Русский</button>
                        </ul>
                    </details>


                    <button className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-medium text-sm">
                        <CiSearch className="text-lg" /> {t('hero.search')}
                    </button> 

       
                    <button className="flex items-center gap-1 bg-white text-orange-500 font-medium px-3 py-1 rounded shadow hover:bg-orange-50">
                        <MdPerson className="text-lg" /> Login
                    </button>
                </div>
            </header>


            <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-20">

                <div className="max-w-xl">
                    <h2 className="text-5xl font-bold text-white mb-4">
                        {t('hero.title')}
                    </h2>
                    <p className="text-lg text-white/90 mb-8">
                        {t('hero.subtitle')}
                    </p>


                    <div className="flex bg-white rounded-lg shadow-md overflow-hidden w-fit mb-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-500 font-medium">
                            <FaMotorcycle /> {t('hero.delivery')}
                        </button>
                        <button className="px-4 py-2 text-gray-600 font-medium hover:text-orange-500">
                            {t('hero.pickup')}
                        </button>
                    </div>


                    <div className="flex bg-white rounded-lg shadow-md overflow-hidden max-w-lg">
                        <div className="flex items-center px-3 text-gray-400">
                            <FaMapMarkerAlt />
                        </div>
                        <input
                            type="text"
                            placeholder="Enter Your Address"
                            className="flex-1 px-2 py-3 focus:outline-none text-sm"
                        />
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3">
                            {t('hero.findFood')}
                        </button>
                    </div>
                </div>


                <div className="mt-10 lg:mt-0">
                    <div className="w-96 h-96 bg-gray-200 rounded-full overflow-hidden shadow-xl">
                        <img src={Photo} alt="Hero" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
