import { useState } from "react";
import { ArrowRight } from "./SvgList";

export default function TrustSlider() {
    const [movePrev, setMovePrev] = useState(false);
    return (
        <div className="flex gap-8 relative h-[450px] overflow-hidden transition-all duration-500 ease-in-out">
            {
                movePrev ?
                    <button className={`z-30 absolute left-0 top-[calc(50%-40px)] w-10 h-10 p-2 rotate-180 rounded-full bg-white shadow-md`}
                        onClick={() => {
                            setMovePrev(false)
                        }}
                    ><ArrowRight /></button> :
                    <button className="z-30 absolute right-0 top-[calc(50%-40px)] w-10 h-10 p-2 rotate-0 rounded-full bg-white shadow-md"
                        onClick={() => {
                            setMovePrev(true)
                        }}
                    ><ArrowRight /></button>
            }
            <div className={`absolute w-[320px] sm:w-[calc(50%-64px)] flex flex-col gap-3 bg-[#13544e] rounded-md px-7 transition-all duration-500 ease-in-out pt-10 transform ${movePrev ? 'transform lg:-translate-x-[600px] md:-translate-x-[300px] sm:-translate-x-[200px] -translate-x-[600px]' : ''}`}>
                <div className="flex">
                    <img src="/img/nasdaq-light.svg" className="w-[200px] h-[60px]" alt="" />
                </div>
                <p className="text-white text-[20px]">“Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”</p>
                <p className="text-white text-[16px] md:hidden pb-[70px]">Josh Machiz, Chief Digital Officer</p>
                <p className="text-white text-[16px] w-full border-b-2 border-white pb-3">Results</p>
                <div className="flex flex-row gap-3 mb-5">
                    <div className="w-2/5">
                        <p className="text-white text-[26px]">Emmy Winning</p>
                        <p className="text-white text-[16px]">Facebook watch program</p>
                    </div>
                    <div className="w-3/5">
                        <p className="text-white text-[26px]">Millions</p>
                        <p className="text-white text-[16px]">of impressions generated per client per IPO</p>
                    </div>
                </div>
            </div>
            <div className={`absolute w-[320px] sm:w-[calc(50%-64px)] left-[350px] sm:left-[calc(50%-32px)] transition-all duration-500 ease-in-out  flex flex-col gap-3 bg-[#bc511b] rounded-md px-7 pt-10 transform ${movePrev ? 'transform lg:-translate-x-[600px] md:-translate-x-[300px] sm:-translate-x-[200px] -translate-x-[600px]' : ''}`}>
                <div className="flex">
                    <img src="/img/microsoft-lg-light.svg" className="w-[200px] h-[60px]" alt="" />
                </div>
                <p className="text-white text-[20px]">“Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”</p>
                <p className="text-white text-[16px] md:hidden pb-[70px]">Josh Machiz, Chief Digital Officer</p>
                <p className="text-white text-[16px] w-full border-b-2 border-white pb-3">Results</p>
                <div className="flex flex-row gap-3 mb-5">
                    <div className="w-2/5">
                        <p className="text-white text-[26px]">Emmy Winning</p>
                        <p className="text-white text-[16px]">Facebook watch program</p>
                    </div>
                    <div className="w-3/5">
                        <p className="text-white text-[26px]">Millions</p>
                        <p className="text-white text-[16px]">of impressions generated per client per IPO</p>
                    </div>
                </div>
            </div>
            <div className={`absolute sm:left-[calc(100%-64px)] left-[700px] transition-all duration-500 ease-in-out  w-[320px] sm:w-[calc(50%-64px)] flex flex-col gap-3 bg-[black] rounded-md px-7 pt-10 transform ${movePrev ? 'transform lg:-translate-x-[600px] md:-translate-x-[300px] sm:-translate-x-[200px] -translate-x-[600px]' : ''}`}>
                <div className="flex">
                    <img src="/img/nasdaq-light.svg" className="w-[200px] h-[60px]" alt="" />
                </div>
                <p className="text-white text-[20px]">“Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”</p>
                <p className="text-white text-[16px] md:hidden pb-[70px]">Josh Machiz, Chief Digital Officer</p>
                <p className="text-white text-[16px] w-full border-b-2 border-white pb-3">Results</p>
                <div className="flex flex-row gap-3 mb-5">
                    <div className="w-2/5">
                        <p className="text-white text-[26px]">Emmy Winning</p>
                        <p className="text-white text-[16px]">Facebook watch program</p>
                    </div>
                    <div className="w-3/5">
                        <p className="text-white text-[26px]">Millions</p>
                        <p className="text-white text-[16px]">of impressions generated per client per IPO</p>
                    </div>
                </div>
            </div>
        </div>
    )
}