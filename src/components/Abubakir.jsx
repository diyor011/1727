import React from 'react'
import pizza from '../assets/pizza.svg'
import burger from '../assets/burger.svg'
import chowmein from '../assets/chowmein.svg'
import noodles from '../assets/noodles.svg'
import sandiwch from '../assets/sandiwch.svg'
import steak from '../assets/steak.svg'
import sale from '../assets/sale.svg'
import live from '../assets/live.svg'
import time from '../assets/time.svg'
import { useTranslation } from 'react-i18next';


const Abubakir = () => {
    const { t } = useTranslation();

    return (
        <main>
            <div className='bg-[#FEFAF1]'>
                <h1 className='text-center text-xl'>{t("searchByFood.title", "Search by Food")}</h1>
                <div className='flex justify-evenly pt-10 pb-10'>
                    <div className='text-center'>
                        <img src={pizza} alt='' className='w-30 h-30' />
                        <p className=''>{t("searchByFood.categories.pizza", "Pizza")}</p>
                    </div>

                    <div className='text-center'>
                        <img src={burger} alt='' className='w-30 h-30' />
                        <p className=''>{t("searchByFood.categories.burger", "Burger")}</p>
                    </div>

                    <div className='text-center'>
                        <img src={noodles} alt='' className='w-30 h-30 rounded-full' />
                        <p className=''>{t("searchByFood.categories.noodles", "Noodles")}</p>
                    </div>

                    <div className='text-center'>
                        <img src={sandiwch} alt='' className='w-30 h-30 rounded-full' />
                        <p className=''>{t("searchByFood.categories.sub", "Sub-sandwich")}</p>
                    </div>

                    <div className='text-center'>
                        <img src={chowmein} alt='' className='w-30 h-30 rounded-full' />
                        <p className=''>{t("searchByFood.categories.chowmein", "chowmein")}</p>
                    </div>

                    <div className='text-center'>
                        <img src={steak} alt='' className='w-30 h-30 rounded-full' />
                        <p className=''>{t("searchByFood.categories.steak", "Steak")}</p>
                    </div>
                </div>
            </div>

            <div className='bg-[#FEEFD0] p-20'>
                <div className='p-10 rounded-2xl flex justify-center gap-10 shadow-[0px_27px_82px_0px_#FFAE0047,0px_14px_15px_0px_#FFAE0003]'>
                    <div className="flex gap-2 items-center text-[20px]">
                        <img src={sale} alt="" />
                        <p className='font-bold bg-[linear-gradient(92.84deg,#FB3C00_-47.72%,#FFB800_136.81%)] bg-clip-text text-transparent'>{t("features.daily", "Daily")}</p>
                    </div>

                    <div className="flex gap-2 items-center text-[20px]">
                        <img src={live} alt="" />
                        <p className='font-bold bg-[linear-gradient(92.84deg,#FB3C00_-47.72%,#FFB800_136.81%)] bg-clip-text text-transparent'>{t("features.live", "live")}</p>
                    </div>
            
                    <div className="flex gap-2 items-center text-[20px]">
                        <img src={time} alt="" />
                        <p className='font-bold bg-[linear-gradient(92.84deg,#FB3C00_-47.72%,#FFB800_136.81%)] bg-clip-text text-transparent'>{t("features.quick", "quick")}</p>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Abubakir