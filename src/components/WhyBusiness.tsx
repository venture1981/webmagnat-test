/* eslint-disable @next/next/no-img-element */
import { Cost, Whitestar } from "./SvgList"

export const WhyBusiness = () => {
    return (
        <div className="flex flex-col justify-between py-10 md:flex-row">
            <div className="flex flex-col gap-3 w-full md:w-3/5 bg-[#f2f7f2] py-10 px-5">
                <p className="text-[42px] text-black font-normal leading-[42px]" style={{ fontFamily: "PT Serif" }}>Why businesses</p>
                <p className="text-[42px] text-black leading-[42px]" style={{ fontFamily: "PT Serif" }}>turn to Upwork</p>
                <div className="flex mt-3">
                    <div className="flex">
                        <div className="w-5 h-5 mt-[10px]">
                            <Cost />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[26px] text-black">Proof of quality</p>
                            <p className="text-[16px] text-black"> Check any pros work samples, client reviews, and identity verification.</p>
                        </div>
                    </div>
                </div>
                <div className="flex mt-3">
                    <div className="flex">
                        <div className="w-5 h-5 mt-[10px]">
                            <Cost />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[26px] text-black">No cost until you hire</p>
                            <p className="text-[16px] text-black"> Check any pros work samples, client reviews, and identity verification.</p>
                        </div>
                    </div>
                </div>
                <div className="flex mt-3">
                    <div className="flex">
                        <div className="w-5 h-5 mt-[10px]">
                            <Cost />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[26px] text-black">Safe and secure</p>
                            <p className="text-[16px] text-black"> Check any pros work samples, client reviews, and identity verification.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row px-3 md:w-2/5 w-full mx-3 rounded-md ml-0 bg-[#108a00] relative">
                <img className="w-[360px] h-[700px] lg:scale-[0.6]  -rotate-[8deg] lg:-top-[150px] lg:-left-[250px] left-[110px] scale-[0.2] se:scale-[0.3] -top-[160px] se:-top-[150px] md:scale-[0.6]  se:left-[115px] md:-left-[190px] md:-top-[110px] object-cover z-[1] absolute" src="/img/person.png" alt="" />
                <div className="flex flex-col md:pt-[160px] py-[44px] text-white">
                    <p className="text-3xl font-bold">We&#39;re the world&#39;s work marketplace</p>
                    <div className="flex items-center mt-5">
                        <div className="w-5 h-5" >
                            <Whitestar />
                        </div>
                        <div className="ml-2">
                            <p className="text-3xl font-bold">4.9/5</p>
                            <p className="text-sm">Clients rate professionals on Upwork</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-5">
                        <div className="w-5 h-5" >

                            <Whitestar />
                        </div>
                        <div className="ml-2">
                            <p className="text-3xl font-bold">Award winner</p>
                            <p className="text-sm">G2&#39;s 2021 best Software Awards</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}