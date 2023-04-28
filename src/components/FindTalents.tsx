/* eslint-disable @next/next/no-img-element */
import { BUTTONS } from "@/config"

export const FindTalents = () => {
    return (
        <div className="relative flex flex-col w-full px-6 mt-7">
            <img className="absolute top-0 left-0 -z-[1] bg-cover rounded-lg w-full h-full object-cover" src="/img/tal.jpg" alt="" />
            <p className="text-white text-[20px] absolute top-10 left-6">For Client</p>
            <p className="text-white text-[42px] font-bold mt-[180px] leading-8" style={{ fontFamily: "PT Serif" }}>Find talents</p>
            <p className="text-white text-[42px] font-bold" style={{ fontFamily: "PT Serif" }}>your way</p>
            <p className="text-white text-[16px] mt-10 w-[55%]">Work with the largest network of independent professionals and get things done from quick turnarounds to big transformations.</p>
            <div className="flex flex-col justify-around gap-4 my-10 md:flex md:flex-row">
                {BUTTONS.map((button, index) => (
                    <button key={index} className="rounded-lg text-white bg-[#108a00] p-4 flex flex-col md:w-[30%] w-full hover:bg-white hover:text-[#108a00]">
                        <p className="font-medium text-[24px] leading-6">{button.title}</p>
                        <p className="font-medium text-[24px] leading-6">{button.subtitle}</p>
                        <div className="flex justify-end w-full md:justify-start">
                            <p className="font-medium text-[14px] mt-5">Talent Marketplace <sup>TM</sup></p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}